import { Registrable } from "./Registrable";
import { Controllable } from "./Controllable";
import {
  DataStructor,
  DataSourceOrExternalData,
} from "../service/DataService";

import {GeneratorService} from '../service'
import {all as deepmerge} from 'deepmerge'
import { isDataSource, isAllObject, isAllFunction, assertUnreachable, assertExist, isAllElement } from '../util'

function createGenerateResult(generators: GeneratorService[], globalGenerators: GeneratorService[], ctrl: Controller<unknown>) {
  const { data, config, renderService } = ctrl
  const validGlobalGenerators = globalGenerators.filter(g => (
    !g.renderTargets || g.renderTargets.find(target => target === renderService!.constructor)
  ))
  const generates = generators.map(g => g.generate(data, deepmerge([{}, config]))).concat(validGlobalGenerators)

  if (isAllFunction(generates)) {
    return function(v: any, ...restArgs: any) {
      let last = v
      for (const fn of generates) {
        last = fn(last, ...restArgs)
      }
      return last
    }
  }

  // 如果deepmerge element
  if (isAllElement(generates)) {
    return assertUnreachable('理论上不会出现, 但如果出现了，避免deepmerge element死循环')
  }

  if (isAllObject(generates)) {
    return deepmerge(generates)
  }

  return assertUnreachable('理论上不会出现,')
}

// 这个泛型的目的是，在用户使用特定的图表时，进行registerGeneratorService时，它的参数类型会被限定
export class Controller<T> extends Registrable<T> implements Controllable {
  data: DataStructor;
  config: any;
  instance: any;
  el: any;
  params: DataSourceOrExternalData;

  constructor(el: HTMLDivElement, params: DataSourceOrExternalData, config: any) {
    super();
    this.el = el;
    this.data = {
      dimensions: [],
      source: []
    };
    this.config = config;
    this.params = params;
  }

  instantiation() {
    assertExist(this.renderService, 'RenderService not registered!')
    this.instance = this.renderService?.mount(this.el, this.config);
  }

  doRender() {
    assertExist(this.renderService, 'RenderService not registered!')
    assertExist(this.generatorServices, 'GeneratorService not registered!')

    const globalGeneratorServices = Registrable.generatorServices
    const generateResult = createGenerateResult(this.generatorServices, globalGeneratorServices, this)

    this.renderService.render({
      instance: this.instance,
      generateResult
    });
  }

  async fetchData() {
    assertExist(this.dataService, 'DataService not registered!')
    // 把config处理成对应的接口参数结构
    if (!isDataSource(this.params)) {
      assertExist(this.dataService.fetchDataByExternalData, 'fetchDataByExternalData not implemented!')
      return this.dataService.fetchDataByExternalData(this.params);
    }
    return this.dataService.fetchData(this.params)!;
  }

  // g2-like apis
  async render() {
    this.data = await this.fetchData();
    this.doRender();
  }
  // updateConfig(config: any) {
  //   this.doRender(this.data, config)
  // }
  // changeData(data: any) {
  //   // TODO: merge data
  //   this.doRender(data, this.config)
  // }
  destroy() {
    // todo
  }
}

export { Controllable } from "./Controllable";

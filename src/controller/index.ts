import { Registrable } from "./Registrable";
import { Controllable } from "./Controllable";
import {
  DataStructor,
  DataSourceOrExternalData,
} from "../service/DataService";

import {GeneratorService} from '../service'
import {all as deepmerge} from 'deepmerge'
import { isDataSource, isAllObject, isAllFunction, assertUnreachable, isAllElement } from '../util'

function createGenerateResult(generators: GeneratorService[], data: DataStructor, config: any) {
  const generates = generators.map(g => g.generate(data, config))

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
    if (!this.renderService) {
      throw new Error("RenderService not registered!");
    }
    this.instance = this.renderService?.mount(this.el, this.config);
  }

  doRender(data: any, config: any) {
    if (!this.renderService) {
      throw new Error("RenderService not registered!");
    }
    if (!this.generatorServices.length) {
      throw new Error("GeneratorService not registered!")
    }

    const generateResult = createGenerateResult(this.generatorServices, data, config)

    this.renderService.render({
      instance: this.instance,
      generateResult
    });
  }

  async fetchData() {
    if (!this.dataService) {
      throw new Error("DataService not registered!");
    }
    // 把config处理成对应的接口参数结构
    if (!isDataSource(this.params)) {
      if (!this.dataService.fetchDataByExternalData) {
        throw new Error("fetchDataByExternalData not implemented!");
      }
      return this.dataService.fetchDataByExternalData(this.params);
    }
    return this.dataService.fetchData(this.params)!;
  }

  // g2-like apis
  async render() {
    this.data = await this.fetchData();
    this.doRender(this.data, this.config);
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

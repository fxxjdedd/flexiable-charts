import { Registrable } from "./Registrable";
import { Controllable } from "./Controllable";
import { DataStructor, DataSourceOrExternalData, DataSource } from "../service/DataService";

function isDataSource(dataSource: any): dataSource is DataSource {
  return !!dataSource.id;
}
export class Controller extends Registrable implements Controllable {
  data: DataStructor;
  config: any;
  instance: any;
  el: any;
  params: DataSourceOrExternalData
  constructor(el: any, config: any, params: DataSourceOrExternalData) {
    super()
    this.el = el
    this.data = {}
    this.config = config;
    // FIXME: 这里service还没有注册
    this.instance = this.renderService?.mount(el)
    this.params = params
  }
  doRender(data: any, config: any) {
    if (!this.renderService) {
      throw new Error("RenderService not registered!")
    }
    this.renderService.render({
      instance: this.instance,
      data,
      config
    })
  }
  async fetchData() {
    if (!this.dataService) {
      throw new Error("DataService not registered!")
    }
    // 把config处理成对应的接口参数结构
    if (!isDataSource(this.params)) {
      if (!this.dataService.fetchDataByExternalData) {
        throw new Error("fetchDataByExternalData not implemented")
      }
      return this.dataService.fetchDataByExternalData(this.params)
    }
    return this.dataService?.fetchData(this.params)!
  }
  // g2-like apis
  async render() {
    this.data = this.fetchData();
    this.doRender(this.data, this.config)
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

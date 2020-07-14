import { Registrable } from "./Registrable";
import { Controllable } from "./Controllable";

export class Controller extends Registrable implements Controllable {
  data: any;
  config: any;
  instance: any;
  originData: any;
  metrics: any
  el: any;
  constructor(el: any, config: any, originDataAndMetrics: any) {
    super()
    this.el = el
    this.data = null
    this.config = config;
    this.instance = this.renderService?.mount(el)
    this.originData = originDataAndMetrics.data
    this.metrics = originDataAndMetrics.metrics
  }
  doRender(data: any, config: any) {
    this.renderService?.render({
      instance: this.instance,
      data,
      config
    })
  }
  async fetchData() {
    // 把config处理成对应的接口参数结构
    if (this.metrics) {
      this.data = await this.dataService!.fetchData(this.originData, this.metrics);
    } else {
      this.data = await this.dataService!.fetchData(this.config.dataSource);      
    }
  }
  // g2-like apis
  async render() {
    this.data = await this.fetchData();
    this.doRender(this.data, this.config)
  }
  updateConfig(config: any) {
    this.doRender(this.data, config)
  }
  changeData(data: any) {
    // TODO: merge data
    this.doRender(data, this.config)
  }
  destroy() {
    // todo
  }
}

export { Controllable } from "./Controllable";

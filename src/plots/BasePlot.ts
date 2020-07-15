import { Controller, Controllable } from "../controller";
export class BasePlot implements Controllable {
  ctrl: Controller;

  constructor(chart: Controller) {
    this.ctrl = chart;
    this.ctrl.instantiation();
  }

  async render() {
    await this.ctrl.render();
  }

  // updateConfig(config: any) {
  //   this.ctrl?.updateConfig(config)
  // }

  // changeData(data: any) {
  //   this.ctrl?.changeData(data)
  // }

  destroy() {}
}

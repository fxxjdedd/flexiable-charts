import { Controller, Controllable } from "../controller";
export class BasePlot implements Controllable {
  ctrl: Controller;

  constructor(ctrl: Controller) {
    this.ctrl = ctrl;
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

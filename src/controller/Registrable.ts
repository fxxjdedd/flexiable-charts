import {
  DataService,
  RenderService,
  DataServiceCtor,
  RenderServiceCtor
} from "../service";

// TODO: DI?
export abstract class Registrable {
  renderService?: RenderService;
  dataService?: DataService;

  registerRenderService(Class: RenderServiceCtor) {
    // TODO: 实例化的时候需要注入一些方便用户使用的实例
    this.renderService = new Class();
  }
  registerDataService(Class: DataServiceCtor) {
    // TODO: 实例化的时候需要注入一些方便用户使用的实例
    this.dataService = new Class();
  }

  static globalRegisterRenderService(Class: RenderServiceCtor) {
    Registrable.prototype.renderService = new Class();
  }

  static globalRegisterDataService(Class: DataServiceCtor) {
    Registrable.prototype.dataService = new Class();
  }
}

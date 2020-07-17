import {
  DataService,
  RenderService,
  GeneratorService,
  DataServiceCtor,
  RenderServiceCtor,
  GeneratorServiceCtor
} from "../service";

// TODO: DI?
export abstract class Registrable {
  renderService?: RenderService;
  dataService?: DataService;
  generatorServices: Array<GeneratorService> = [];

  registerRenderService(Class: RenderServiceCtor) {
    // TODO: 实例化的时候需要注入一些方便用户使用的实例
    this.renderService = new Class();
  }
  registerDataService(Class: DataServiceCtor) {
    // TODO: 实例化的时候需要注入一些方便用户使用的实例
    this.dataService = new Class();
  }
  registerGeneratorService(Class: GeneratorServiceCtor) {
    this.generatorServices.push(new Class());
  }

  static globalRegisterRenderService(Class: RenderServiceCtor) {
    Registrable.prototype.renderService = new Class();
  }

  static globalRegisterDataService(Class: DataServiceCtor) {
    Registrable.prototype.dataService = new Class();
  }

  static globalRegisterGeneratorService(Class: GeneratorServiceCtor) {}
}

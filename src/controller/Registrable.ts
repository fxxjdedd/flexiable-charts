import {
  DataService,
  RenderService,
  GeneratorService,
  DataServiceCtor,
  RenderServiceCtor,
  GeneratorServiceCtor
} from "../service";

// TODO: DI?
export abstract class Registrable<T> {
  renderService?: RenderService;
  dataService?: DataService;
  generatorServices: Array<GeneratorService<T>> = [];

  registerRenderService(Class: RenderServiceCtor) {
    // TODO: 实例化的时候需要注入一些方便用户使用的实例
    this.renderService = new Class();
  }
  registerDataService(Class: DataServiceCtor) {
    // TODO: 实例化的时候需要注入一些方便用户使用的实例
    this.dataService = new Class();
  }
  registerGeneratorService(Class: GeneratorServiceCtor<T>) {
    this.generatorServices.push(new Class());
  }

  static globalRegisterRenderService(Class: RenderServiceCtor) {
    Registrable.prototype.renderService = new Class();
  }

  static globalRegisterDataService(Class: DataServiceCtor) {
    Registrable.prototype.dataService = new Class();
  }

  static globalRegisterGeneratorService(Class: GeneratorServiceCtor<any>) {}
}

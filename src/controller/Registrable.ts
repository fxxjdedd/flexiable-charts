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
  static generatorServices: Array<GeneratorService<unknown>> = [];

  registerRenderService(Class: RenderServiceCtor) {
    this.renderService = new Class();
  }
  registerDataService(Class: DataServiceCtor) {
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

  static globalRegisterGeneratorService(Class: GeneratorServiceCtor<unknown>) {
    // NOTE: 这里不是在prototype上加
    Registrable.generatorServices.push(new Class());
  }
}

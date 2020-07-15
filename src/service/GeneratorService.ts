export interface GeneratorService {
  generate(data: any, config: any): any;
}

export interface GeneratorServiceCtor {
  new (): GeneratorService;
}

export interface GenerateService {
  generate(data: any, config: any): any;
}

export interface GenerateServiceCtor {
  new (): GenerateService;
}

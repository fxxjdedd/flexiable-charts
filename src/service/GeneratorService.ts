export interface GeneratorService<T = unknown> {
  generate(data: any, config: any): T;
}

export interface GeneratorServiceCtor<T = unknown> {
  new (): GeneratorService<T>;
}

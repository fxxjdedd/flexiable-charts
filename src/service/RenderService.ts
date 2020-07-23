export interface RenderProps<T = object, C = object> {
  instance: T;
  generateResult: C;
}

export interface RenderService {
  mount(el: HTMLDivElement, config: any): object;
  render(renderProps: RenderProps): any;
}

export interface RenderServiceCtor {
  new (): RenderService;
}

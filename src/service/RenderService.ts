export interface RenderProps<T = object, C = object, D = any> {
  instance: T;
  config: C;
  data: D;
}

export interface RenderService {
  mount(el: any): any;
  render(renderProps: RenderProps): any;
}

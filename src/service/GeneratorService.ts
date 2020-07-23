import {
  EChartsRenderService,
  G2RenderService,
  ReactRenderService,
  VueRenderService
} from "./core-service";

type RenderTarget =
  | typeof EChartsRenderService
  | typeof G2RenderService
  | typeof ReactRenderService
  | typeof VueRenderService;

// 为什么T可选？
// 1. 作为框架开发者，T是必须填上的，这样才能限定特定的组件registerService时的类型鉴定
// 2. 作为使用者，如果它写的GeneratorService只是自己用，那就没必要写。如果它写的GeneratorService要分发给别人用，那么就跟框架开发者一样了。
export interface GeneratorService<T = unknown> {
  generate(data: any, config: any, instance: any): T;
  renderTargets?: RenderTarget[];
}

export interface GeneratorServiceCtor<T = unknown> {
  new (): GeneratorService<T>;
}

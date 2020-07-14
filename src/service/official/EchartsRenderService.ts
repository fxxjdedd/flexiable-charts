import { RenderService } from "..";
import echarts from "echarts/lib/echarts";
import { RenderProps } from "../RenderService";

export type EChartsInstance = echarts.ECharts;
export type EChartOption = echarts.EChartOption;
export type EChartsRenderProps<S = {}> = RenderProps<
  EChartsInstance,
  EChartOption & S,
  any
>;

export class EchartsRenderService implements RenderService {
  mount(el: any) {
    return echarts.init(el);
  }
  // 在这里根据props，渲染出对应的echarts图表
  // 注意按需引用的问题
  render({ instance, config, data }: EChartsRenderProps) {
    instance.setOption({});
  }
}

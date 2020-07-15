import { RenderService } from "..";
import echarts from "echarts/lib/echarts";
import { RenderProps } from "../RenderService";
import { DataStructor } from "../DataService";

export type EChartsInstance = echarts.ECharts;
export type EChartOption = echarts.EChartOption;
export type EChartsRenderProps = RenderProps<
  EChartsInstance,
  EChartOption,
  DataStructor
>;

export class EchartsRenderService implements RenderService {
  mount(el: HTMLDivElement) {
    return echarts.init(el);
  }
  // 在这里根据props，渲染出对应的echarts图表
  // 注意按需引用的问题
  render({ instance, config, data }: EChartsRenderProps) {
    config.dataset = {
      source: data.source
    };
    config.series = Array.from(Array(data.source[0].length - 1), () => ({
      type: "line"
    }));
    instance.setOption(config);
  }
}

import { GeneratorService, DataStructor } from "../../service";
import { EChartOption } from "echarts";
import { EChartsRenderService } from "../../service/core-service";

export type GenerateReturn = EChartOption;

export class LineGenerator implements GeneratorService<GenerateReturn> {
  renderTargets = [EChartsRenderService];
  generate(data: DataStructor, config: EChartOption) {
    config.dataset = {
      dimensions: data.dimensions,
      source: data.source
    };
    config.series = Array.from(Array(data.dimensions.length - 1), () => ({
      type: "line"
    }));
    return config;
  }
}

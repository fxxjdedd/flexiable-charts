import { GenerateService } from "../../service/GenerateService";
import { DataStructor } from "../../service/DataService";
import { EChartOption } from "echarts";
export class LineGenerator implements GenerateService {
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

import { Line } from "../plots/line";
import { Registrable } from "../controller/Registrable";
import { GeneratorService } from "../service";
import { EChartOption, EChartsRenderService } from "../service/core-service";

class globalEChartsGeneratorService implements GeneratorService {
  // 这意味着，globalEChartsGeneratorService只对EChartsRenderService生效
  renderTargets = [EChartsRenderService];
  generate(data, config: EChartOption) {
    config.title = {
      textStyle: {
        color: "red"
      }
    };
    // TODO: 这里的返回值需要加上限定，ECharts类型的必须返回config
    return config;
  }
}

class TitleTextEChartsGeneratorService implements GeneratorService {
  // 局部的Generator不需要指定renderTargets
  generate(data, config: EChartOption) {
    config.title = {
      text: "这是新的title"
    };
    return config;
  }
}

class TitleFontWeightEChartsGeneratorService implements GeneratorService {
  // 局部的Generator不需要指定renderTargets
  generate(data, config: EChartOption) {
    config.title = {
      textStyle: {
        fontWeight: "bolder"
      }
    };
    return config;
  }
}

Registrable.globalRegisterGeneratorService(globalEChartsGeneratorService);
// echarts
const echartsLine = new Line(
  document.getElementById("demo-1"),
  {
    id: 1,
    from: ""
  },
  {
    title: {
      text: "原始的title"
    },
    legend: {},
    tooltip: {},
    xAxis: { type: "category" },
    yAxis: {}
  }
);

// 可以注册多个
echartsLine.ctrl.registerGeneratorService(TitleTextEChartsGeneratorService);
echartsLine.ctrl.registerGeneratorService(
  TitleFontWeightEChartsGeneratorService
);

echartsLine.render();

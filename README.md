# flexiable-charts

一个高度可扩展的charts库

# todos

- [x] 基础使用
- [x] 全局、局部注册Generator
- [x] 全局、局部注册Theme
- [ ] 更多plots

# usage
基础用法：
```ts
import { Line, G2Line, ReactTable, VueTable } from "./plots";

// echarts
const echartsLine = new Line(
  document.getElementById("echarts"),
  {
    id: 1,
    from: ""
  },
  {
    legend: {},
    tooltip: {},
    xAxis: { type: "category" },
    yAxis: {}
  }
);
echartsLine.render();

// g2
const g2Line = new G2Line(
  document.getElementById("g2"),
  {
    id: 2,
    from: ""
  },
  {
    autoFit: true,
    height: 500,
    padding: [30, 20, 70, 30]
  }
);
g2Line.render();

// react
const reactTable = new ReactTable(
  document.getElementById("react-table"),
  {
    id: 3,
    from: ""
  },
  {}
);
reactTable.render();

// vue
const vueTable = new VueTable(
  document.getElementById("vue-table"),
  {
    id: 4,
    from: ""
  },
  {}
);
vueTable.render();

```

自定义渲染：
```ts
import { Line } from "../plots/line";
import { Registrable } from "../controller/Registrable";
import { GeneratorService, DataStructor } from "../service";
import { EChartOption, EChartsRenderService } from "../service/core-service";

class globalEChartsGeneratorService implements GeneratorService {
  // 这意味着，globalEChartsGeneratorService只对EChartsRenderService生效
  renderTargets = [EChartsRenderService];
  generate(data: DataStructor, config: EChartOption) {
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
  generate(data: DataStructor, config: EChartOption) {
    config.title = {
      text: "这是新的title"
    };
    return config;
  }
}

class TitleColorWeightEChartsGeneratorService implements GeneratorService {
  // 局部的Generator不需要指定renderTargets
  generate(data: DataStructor, config: EChartOption) {
    config.title = {
      textStyle: {
        color: "red"
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
  TitleColorWeightEChartsGeneratorService
);

echartsLine.render();

```

自定义主题：

```ts
import { Line } from "../plots/line";
import { Registrable } from "../controller/Registrable";
import theme1 from "./theme1";
import theme2 from "./theme2";

// Theme: 全局注册theme
// 可以注册多个，会选择“最后一个”注册的主题应用到所有图表
Registrable.globalRegisterTheme("theme-test1", theme1);
Registrable.globalRegisterTheme("theme-test2", theme2);
const echartsLine = new Line(
  document.getElementById("demo-2"),
  {
    id: 1,
    from: ""
  },
  {
    title: {
      text: "测试主题"
    },
    legend: {},
    tooltip: {},
    xAxis: { type: "category" },
    yAxis: {},
    // Theme: 额外添加的EChartsOption属性，用来局部注册theme
    // 可以传string | object
    // 如果传string，则会去全局注册的theme里找，并局部使用；如果没找到，会给出warn
    // 如果传object，则会局部注册一个theme，并局部使用
    theme: "theme-test1"
  }
);

echartsLine.render();

```
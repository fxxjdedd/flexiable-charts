# flexiable-charts

Created with CodeSandbox

# todos

- [] 全局注册，局部注册，全局兼容性注册（既要大规模应用插件，也要保证兼容性）
- [x] generator service 注册多个？
- [x] generator service 注册校验？
- [] generator 还是不够抽象
- [] 写 react、vue 时支持 jsx

# usage

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

// custom render 伪代码
const myLine = new Line();
myLine.ctrl.registerDataService;
myLine.ctrl.registerGeneratorService;
myLine.ctrl.registerRenderService;

// custom chart 伪代码
class MyChart extends BasePlot {
  constructor() {
    // register service
  }
}
const myChart = new MyChart();
```

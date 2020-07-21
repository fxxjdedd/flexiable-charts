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

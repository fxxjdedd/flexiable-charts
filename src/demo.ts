import { Line } from "./plots/line";
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

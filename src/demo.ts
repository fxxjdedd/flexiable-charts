import { Line, G2Line } from "./plots";
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

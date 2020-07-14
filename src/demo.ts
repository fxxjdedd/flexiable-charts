import { Line } from "./plots/line";

const echartsLine = new Line(document.getElementById("#echarts"), {
  dataSource: {
    id: 1,
    from: ""
  },
  title: {
    text: "echarts折线图"
  }
});
echartsLine.render();
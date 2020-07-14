import { Controller } from "../../controller";
import { BasePlot } from "../BasePlot";
import {
  EchartsRenderService,
  BIAssociativeDataService,
  EChartOption,
  EChartsRenderProps
} from "../../service/official";
import "echarts/lib/chart/line";
import { DataSource, DataAndMetrics } from "../../service/DataService";

export class Line extends BasePlot {
  constructor(el: any, config: EChartOption & { dataSource: DataSource });
  constructor(el: any, config: EChartOption, dataAndMetrics: DataAndMetrics); // https://stackoverflow.com/questions/57455457/expected-0-arguments-but-got-2-with-typescript-overloading
  constructor(el: any, config: EChartOption, dataAndMetrics?: DataAndMetrics) {
    const ctrl = new Controller(el, config, dataAndMetrics);
    ctrl.registerRenderService(EchartsRenderService);
    ctrl.registerDataService(BIAssociativeDataService);
    super(ctrl);
  }
}

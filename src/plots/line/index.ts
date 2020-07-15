import { Controller } from "../../controller";
import { BasePlot } from "../BasePlot";
import {
  EchartsRenderService,
  BIAssociativeDataService,
  EChartOption
} from "../../service/official";
import "echarts/lib/chart/line";
import { DataSourceOrExternalData } from "../../service/DataService";

export class Line extends BasePlot {
  constructor(
    el: any,
    dataSourceOrExternalData: DataSourceOrExternalData,
    config: EChartOption
  ) {
    const ctrl = new Controller(el, config, dataSourceOrExternalData);
    ctrl.registerRenderService(EchartsRenderService);
    ctrl.registerDataService(BIAssociativeDataService);
    super(ctrl);
  }
}

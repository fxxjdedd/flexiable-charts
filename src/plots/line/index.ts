import { Controller } from "../../controller";
import { BasePlot } from "../BasePlot";
import {
  EChartsRenderService,
  BIAssociativeDataService,
  EChartOption
} from "../../service/core-service";
import "echarts/lib/chart/line";
import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";
import { DataSourceOrExternalData } from "../../service/DataService";
import { LineGenerator, GenerateReturn } from "./LineGenerator";

export class Line extends BasePlot<GenerateReturn> {
  constructor(
    el: any,
    dataSourceOrExternalData: DataSourceOrExternalData,
    config?: EChartOption
  ) {
    const ctrl = new Controller<GenerateReturn>(
      el,
      dataSourceOrExternalData,
      config
    );
    ctrl.registerGeneratorService(LineGenerator);
    ctrl.registerRenderService(EChartsRenderService);
    ctrl.registerDataService(BIAssociativeDataService);
    super(ctrl);
  }
}

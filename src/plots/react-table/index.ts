import { Controller } from "../../controller";
import { BasePlot } from "../BasePlot";
import {
  BIAssociativeDataService,
  ReactRenderService
} from "../../service/core-service";
import "echarts/lib/chart/line";
import { DataSourceOrExternalData } from "../../service/DataService";
import { TableGenerator } from "./TableGenerator";

export class Table extends BasePlot {
  constructor(
    el: any,
    dataSourceOrExternalData: DataSourceOrExternalData,
    config: any
  ) {
    // TODO在这里进行config的定制化
    const ctrl = new Controller(el, dataSourceOrExternalData, config);
    ctrl.registerGeneratorService(TableGenerator);
    ctrl.registerRenderService(ReactRenderService);
    ctrl.registerDataService(BIAssociativeDataService);
    super(ctrl);
  }
}

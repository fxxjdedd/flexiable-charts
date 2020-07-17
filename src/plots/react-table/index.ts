import { Controller } from "../../controller";
import { BasePlot } from "../BasePlot";
import {
  BIAssociativeDataService,
  ReactRenderService
} from "../../service/core-service";
import "echarts/lib/chart/line";
import { DataSourceOrExternalData } from "../../service/DataService";
import { TableGenerator, GenerateReturn } from "./TableGenerator";

export class Table extends BasePlot<GenerateReturn> {
  constructor(
    el: any,
    dataSourceOrExternalData: DataSourceOrExternalData,
    config: any
  ) {
    const ctrl = new Controller<GenerateReturn>(
      el,
      dataSourceOrExternalData,
      config
    );
    ctrl.registerGeneratorService(TableGenerator);
    ctrl.registerRenderService(ReactRenderService);
    ctrl.registerDataService(BIAssociativeDataService);
    super(ctrl);
  }
}

import { BasePlot } from "../BasePlot";
import { DataSourceOrExternalData } from "../../service/DataService";
import {
  BIAssociativeDataService,
  G2RenderService
} from "../../service/core-service";
import { Controller } from "../../controller";
import { ChartCfg } from "@antv/g2/lib/interface";
import { LineGenerator, GenerateReturn } from "./LineGenerator";

export class G2Line extends BasePlot<GenerateReturn> {
  constructor(
    el: any,
    dataSourceOrExternalData: DataSourceOrExternalData,
    config?: Omit<ChartCfg, "container"> & { container?: HTMLDivElement }
  ) {
    const g2Config = {
      container: el,
      ...config
    };

    const ctrl = new Controller<GenerateReturn>(
      el,
      dataSourceOrExternalData,
      g2Config
    );
    ctrl.registerGeneratorService(LineGenerator);
    ctrl.registerRenderService(G2RenderService);
    ctrl.registerDataService(BIAssociativeDataService);
    super(ctrl);
  }
}

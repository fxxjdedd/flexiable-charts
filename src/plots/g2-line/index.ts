import { BasePlot } from "../BasePlot";
import { DataSourceOrExternalData } from "../../service/DataService";
import { G2RenderService } from "../../service/official/G2RenderService";
import { BIAssociativeDataService } from "../../service/official";
import { Controller } from "../../controller";
import { ChartCfg } from "@antv/g2/lib/interface";
import { LineGenerator } from "./LineGenerator";

export class G2Line extends BasePlot {
  constructor(
    el: any,
    dataSourceOrExternalData: DataSourceOrExternalData,
    config?: Omit<ChartCfg, "container"> & { container?: HTMLDivElement }
  ) {
    const g2Config = {
      container: el,
      ...config
    };

    const ctrl = new Controller(el, dataSourceOrExternalData, g2Config);
    ctrl.registerGenerateService(LineGenerator);
    ctrl.registerRenderService(G2RenderService);
    ctrl.registerDataService(BIAssociativeDataService);
    super(ctrl);
  }
}

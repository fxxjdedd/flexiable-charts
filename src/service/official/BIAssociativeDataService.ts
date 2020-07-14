import { DataService } from "..";
import {
  DataSource,
  DataAndMetrics,
  OriginData,
  Metrics
} from "../DataService";

export class BIAssociativeDataService implements DataService {
  async fetchData(dataSource: DataSource): Promise<any>;
  async fetchData(originData: OriginData, metrics?: any): Promise<any> {
    if (metrics) {
      // 根据originData和metrics拉取
    } else {
      // 根据id拉
    }
    return Promise.resolve();
  }
  // async fetchData(dataSource?: DataSource) {
  //   return new Promise(r => {
  //     setTimeout(() => {
  //       r();
  //     }, 1000);
  //   });
  // }
}

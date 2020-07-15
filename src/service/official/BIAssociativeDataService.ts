import { DataService } from "..";
import {
  DataSource,
  DataAndMetrics,
  OriginData,
  Metrics
} from "../DataService";

export class BIAssociativeDataService implements DataService {
  async fetchData(dataSource: DataSource): Promise<any>;
  async fetchData(externalData: OriginData): Promise<any> {}
  // async fetchData(dataSource?: DataSource) {
  //   return new Promise(r => {
  //     setTimeout(() => {
  //       r();
  //     }, 1000);
  //   });
  // }
}

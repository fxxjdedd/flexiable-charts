import { DataService } from "..";
import { DataSource, ExternalData } from "../DataService";

export class BIAssociativeDataService implements DataService {
  async fetchData(dataSource: DataSource): Promise<any> {}
  async fetchDataByExternalData(externalData: ExternalData): Promise<any> {}
  // async fetchData(dataSource?: DataSource) {
  //   return new Promise(r => {
  //     setTimeout(() => {
  //       r();
  //     }, 1000);
  //   });
  // }
}

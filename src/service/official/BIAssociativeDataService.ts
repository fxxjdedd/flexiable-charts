import { DataService } from "..";
import { DataSource, ExternalData, DataStructor } from "../DataService";

export class BIAssociativeDataService implements DataService {
  async fetchData(dataSource: DataSource): Promise<DataStructor> {
    return new Promise(r => {
      setTimeout(() => {
        r({
          source: [
            ["product", "2015", "2016", "2017"],
            ["Matcha Latte", 43.3, 85.8, 93.7],
            ["Milk Tea", 83.1, 73.4, 55.1],
            ["Cheese Cocoa", 86.4, 65.2, 82.5],
            ["Walnut Brownie", 72.4, 53.9, 39.1]
          ]
        });
      }, 1000);
    });
  }
  async fetchDataByExternalData(externalData: ExternalData): Promise<any> {}
  // async fetchData(dataSource?: DataSource) {
  //   return new Promise(r => {
  //     setTimeout(() => {
  //       r();
  //     }, 1000);
  //   });
  // }
}

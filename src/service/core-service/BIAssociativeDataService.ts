import { DataService } from "..";
import { DataSource, ExternalData, DataStructor } from "../DataService";

export class BIAssociativeDataService implements DataService {
  async fetchData(dataSource: DataSource): Promise<DataStructor> {
    return new Promise(r => {
      setTimeout(() => {
        r({
          dimensions: ["date", "nlp", "blockchain"],
          source: [
            {
              date: "2015-01-04",
              nlp: 8,
              blockchain: 2
            },
            {
              date: "2015-01-11",
              nlp: 8,
              blockchain: 2
            },
            {
              date: "2015-01-18",
              nlp: 8,
              blockchain: 3
            },
            {
              date: "2015-01-25",
              nlp: 8,
              blockchain: 3
            },
            {
              date: "2015-02-01",
              nlp: 8,
              blockchain: 2
            },
            {
              date: "2015-02-08",
              nlp: 8,
              blockchain: 2
            },
            {
              date: "2015-02-15",
              nlp: 8,
              blockchain: 3
            },
            {
              date: "2015-02-22",
              nlp: 8,
              blockchain: 2
            }
          ]
        });
      }, 1000);
    });
  }
  async fetchDataByExternalData(externalData: ExternalData): Promise<any> {}
}

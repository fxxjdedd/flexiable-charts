export interface DataStructor {
  source: Array<Array<any>>;
}
export interface DataSource {
  id: number;
  from: string;
}

export type ExternalData = {
  data: Array<object>;
  dimensions: Array<object>;
  indicators: Array<object>;
};

export type DataSourceOrExternalData = DataSource | ExternalData;

export interface DataService {
  fetchData(params: DataSource): Promise<DataStructor>;
  fetchDataByExternalData?(params: ExternalData): Promise<DataStructor>;
}

export interface DataServiceCtor {
  new (): DataService;
}

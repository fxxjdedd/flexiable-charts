export interface DataSource {
  id: number;
  from: string;
}

export type Data = Array<object>;

export type OriginData = any;

export type Metrics = {
  dimensions: Array<object>;
  indicators: Array<object>;
};

export type DataAndMetrics = Data & Metrics;

export interface DataService {
  fetchData(dataSource: DataSource): Promise<any>;
  fetchData(originData: OriginData, metrics: Metrics): Promise<any>;
}

import { GeneratorService, DataStructor } from "../../service";
import { createElement } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
export class TableGenerator implements GeneratorService {
  generate(data: DataStructor) {
    return createElement(Table, {
      columns: data.dimensions.map(dim => ({
        key: dim,
        dataIndex: dim,
        label: dim
      })),
      dataSource: data.source
    });
  }
}

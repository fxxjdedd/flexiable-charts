import { GeneratorService, DataStructor } from "../../service";
import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
export class TableGenerator implements GeneratorService {
  generate(data: DataStructor) {
    return React.createElement(Table, {
      columns: data.dimensions.map(dim => ({
        key: dim,
        dataIndex: dim,
        title: dim
      })),
      dataSource: data.source
    });
  }
}

import { GeneratorService, DataStructor } from "../../service";
import React, { ReactElement } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { ReactRenderService } from "../../service/core-service";

export type GenerateReturn = (lastElement?: ReactElement) => ReactElement;

export class TableGenerator implements GeneratorService<GenerateReturn> {
  renderTargets = [ReactRenderService];
  generate(data: DataStructor) {
    return () => {
      return React.createElement(Table, {
        columns: data.dimensions.map(dim => ({
          key: dim,
          dataIndex: dim,
          title: dim
        })),
        dataSource: data.source
      });
    };
  }
}

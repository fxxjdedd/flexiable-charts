import { GeneratorService, DataStructor } from "../../service";
import Vue from "vue";
import { Table, TableColumn } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

export class TableGenerator implements GeneratorService {
  generate(data: DataStructor) {
    const createElement = new Vue({}).$createElement;
    return createElement(
      Table,
      {
        props: {
          data: data.source
        }
      },
      data.dimensions.map(dim => {
        return createElement(TableColumn, {
          props: {
            prop: dim,
            label: dim
          }
        });
      })
    );
  }
}

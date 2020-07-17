import { GeneratorService, DataStructor } from "../../service";
import Vue, { VNode } from "vue";
import { Table, TableColumn } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { VueRenderService } from "../../service/core-service";

const createElement = new Vue({}).$createElement;

export type GenerateReturn = (lastVNode?: VNode) => VNode;

export class TableGenerator implements GeneratorService<GenerateReturn> {
  renderTargets = [VueRenderService];
  generate(data: DataStructor) {
    return () => {
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
    };
  }
}

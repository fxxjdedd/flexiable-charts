import { RenderService } from "..";
import { Chart } from "@antv/g2";
import { ChartCfg } from "@antv/g2/lib/interface";
import { RenderProps } from "../RenderService";

// 使用g2而不是g2plot：之所以要使用g2的能力，就是为了解决定制的特殊场景，g2plot是通用场景的实现，不符合需求

export type G2RenderProps = RenderProps<Chart, (instance: Chart) => Chart>;

export class G2RenderService implements RenderService {
  mount(el: HTMLDivElement, config: ChartCfg) {
    console.log(el, config);
    return new Chart({
      container: el,
      ...config
    });
  }

  render({ instance, generateResult }: G2RenderProps) {
    generateResult(instance);
    instance.render();
  }
}

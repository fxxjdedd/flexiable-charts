import { RenderService } from "..";
import Vue from "vue";
export class VueRenderService implements RenderService {
  mount(el: any) {
    const container = document.createElement("div");
    el.appendChild(container);
    return {
      render: (element: any) => {
        new Vue({
          el: container,
          render: () => element
        });
      }
    };
  }
  render({ instance, generateResult }: any) {
    const element = generateResult();
    instance.render(element);
  }
}

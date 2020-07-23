import { RenderService } from "..";
import ReactDOM from "react-dom";
export class ReactRenderService implements RenderService {
  mount(el: any) {
    const container = document.createElement("div");
    el.appendChild(container);
    return {
      render: (element: any) => {
        ReactDOM.render(element, container);
      }
    };
  }
  render({ instance, generateResult }: any) {
    const element = generateResult();
    instance.render(element);
  }
}

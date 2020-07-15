import { RenderService } from "..";
import ReactDOM from "react-dom";
export class ReactRenderService implements RenderService {
  mount(el: any) {
    const dom = document.createElement("div");
    el.appendChild(dom);
    return {
      render: (element: any) => {
        ReactDOM.render(element, dom);
      }
    };
  }
  render({ instance, config }: any) {
    console.log(config);
    instance.render(config);
  }
}

import { RenderService } from "..";
import echarts from "echarts/lib/echarts";
import { RenderProps } from "../RenderService";
import { Registrable } from "../../controller/Registrable";

export type EChartsInstance = echarts.ECharts;
export type EChartOption = echarts.EChartOption & {
  theme?: string | object;
};

export type EChartsRenderProps = RenderProps<EChartsInstance, EChartOption>;

let uid = 0;

export class EChartsRenderService implements RenderService {
  private _getThemeName(theme: EChartOption["theme"]) {
    if (theme) {
      if (typeof theme === "string") {
        const hasTheme = Registrable.themes.has(theme);
        if (!hasTheme) {
          console.warn(`Theme: ${theme}主题尚未注册`);
        }
        return theme;
      }
      if (typeof theme === "object") {
        // 此时是局部注册
        const partialTheme = `partial-theme_${++uid}`;
        echarts.registerTheme(partialTheme, theme);
        return partialTheme;
      }
    } else {
      // 如果没有theme，默认使用全局注册的最后一个theme
      const globalRegisteredThemes = Registrable.themes;
      const latestRegisteredTheme = Array.from(
        globalRegisteredThemes.keys()
      ).pop();
      return latestRegisteredTheme;
    }
  }

  mount(el: HTMLDivElement, config: EChartOption) {
    const { theme } = config;
    const themeName = this._getThemeName(theme);
    return echarts.init(el, themeName);
  }
  // 在这里根据props，渲染出对应的echarts图表
  // 注意按需引用的问题
  render({ instance, generateResult }: EChartsRenderProps) {
    instance.setOption(generateResult);
  }
}

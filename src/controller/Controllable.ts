export interface Controllable {
  render(): Promise<void>;
  updateConfig(config: any): void;
  changeData(data: any): void;
  destroy(): void;
}

import { App } from "vue";
import components from "./component";

// 全局引入
export const install = (app: App) => {
  components.forEach((c) => app.use(c));
};

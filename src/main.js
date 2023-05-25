import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "./utils/method";

/** Initial master component*/
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en";
Vue.use(ElementUI, { locale });
Vue.use(BootstrapVue);
Vue.config.productionTip = false;
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "../src/assets/scss/base/index.scss";
import "echarts";

import ECharts from "vue-echarts";
import { use } from "echarts/core";

// import ECharts modules manually to reduce bundle size
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";

use([CanvasRenderer, PieChart, GridComponent, TooltipComponent]);

// register globally (or you can do it locally)
Vue.component("v-chart", ECharts);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

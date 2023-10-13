import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

const app = createApp(App);

app.use(router);

app.mount("#app");

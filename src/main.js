import "./assets/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import Container from "./UI/Container.vue";
const app = createApp(App);
app.component("container", Container);
app.use(createPinia());
app.use(router);

app.mount("#app");

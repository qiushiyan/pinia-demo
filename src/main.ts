import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import "./tailwind.css";

createApp(App).use(createPinia()).mount("#app");

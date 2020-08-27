import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "@/assets/styles/main.css";
import router from "./router";
import store from "./store";
import { localize } from "@vee-validate/i18n";
import en from "@vee-validate/i18n/dist/locale/en.json";
import * as rules from "@vee-validate/rules";
import { configure, defineRule } from "vee-validate";

configure({
  generateMessage: localize({ en }),
});

type ValidationRuleFunction = (
  value: any,
  params: any[] | Record<string, any>,
  ctx: FieldContext
) => boolean | string | Promise<boolean | string>;

interface FieldContext {
  field: string;
  value: any;
  form: Record<string, any>;
  rule: {
    name: string;
    params?: Record<string, any> | any[];
  };
}

Object.keys(rules).forEach((rule: string) => {
  defineRule(rule, (rules as Record<string, ValidationRuleFunction>)[rule]);
});

createApp(App).use(store).use(router).mount("#app");

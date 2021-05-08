# Introduction
 a Vue UI components library based on  vue 3 and TypeScript.

# Install
```
npm install @itshizhan/vui -S
```

# Usage

```
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vui from "@itshizhan/vui";
import "@itshizhan/vui/lib/index.css";

createApp(App)
  .use(router)
  .use(Vui)
  .mount("#app");
```
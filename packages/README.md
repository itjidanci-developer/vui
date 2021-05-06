# Introduction
a Vue 3 components library based on TypeScript for itjidanci-developer-cms.

# Install
```
npm install itshizhan-vui -S
```

# Usage

```
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import itshizhanVui from "itshizhan-vui";
import "itshizhan-vui/lib/itshizhan-vui.css";

createApp(App)
  .use(router)
  .use(itshizhanVui)
  .mount("#app");
```
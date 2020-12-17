import VHello from "./components/hello";
import VPagination from './components/pagination'
import { App } from "vue";
import "./styles/global.scss";
const components = [VHello,VPagination];

function install(Vue: App):void{
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
}

export default { install };

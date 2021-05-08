import VHello from "./components/hello";
import VInput from './components/input/index';
import VPagination from './components/pagination'
import { App } from "vue";
import "./styles/global.scss";

const components = [VHello,VInput,VPagination];

function install(Vue: App):void{
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
}

export default { install };

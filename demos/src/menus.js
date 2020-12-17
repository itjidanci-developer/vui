// 构建页面 views目录
import InputDemo from './views/InputDemo.vue'
import PaginationDemo from './views/PaginationDemo.vue'
// import RadioDemo from './views/raido'
// import CheckboxDemo from './views/checkbox'
// import SelectDemo from './views/select'
// import CssiconDemo from './views/cssicon'
// import TagDemo from './views/tag'
// import SwitchDemo from './views/switch'
// import RateDemo from './views/rate'
// import SliderDemo from './views/slider'
// import UploadDemo from './views/upload'
// 以下为本地测试页面，testViews目录
// import SlotDemo from './testViews/SlotDemo.vue'

let menus = [
  {
    name: 'InputDemo',
    component: InputDemo,
  },{
    name:'PaginationDemo',
    component: PaginationDemo
  }
  // ,
  // {
  //   name: 'RadioDemo',
  //   component: RadioDemo,
  // },
  // {
  //   name: 'CheckboxDemo',
  //   component: CheckboxDemo,
  // }, {
  //   name: 'SelectDemo',
  //   component: SelectDemo,
  // }, {
  //   name: 'CssiconDemo',
  //   component: CssiconDemo
  // }, {
  //   name: 'TagDemo',
  //   component: TagDemo
  // }, {
  //   name: 'Switch',
  //   component: SwitchDemo
  // }, {
  //   name: 'Rate',
  //   component: RateDemo
  // }, {
  //   name: 'Slider',
  //   component: SliderDemo
  // }, {
  //   name: 'Upload',
  //   component: UploadDemo
  // },
]


menus.map(item => {
  item.to = '/' + item.name
  item.path = '/' + item.name
})
export { menus }

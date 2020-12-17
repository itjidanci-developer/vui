/*!
 *  @oovui/vue v0.0.1
 * (c) 2018-2020 itshizhan@163.com
 * Released under the MIT License.
 */
import { defineComponent, openBlock, createBlock, createVNode, toDisplayString } from 'vue';

var script = defineComponent({
	name: 'VHello',
	props: {
		msg: {
			type: String,
			default: 'default msg,hello test1',
		},
	},
});

const _hoisted_1 = { class: "p-cls" };
const _hoisted_2 = { class: "h1-cls" };
const _hoisted_3 = /*#__PURE__*/createVNode("p", { class: "p1" }, "测试", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("p", _hoisted_1, [
    createVNode("h1", _hoisted_2, toDisplayString(_ctx.msg), 1 /* TEXT */),
    _hoisted_3
  ]))
}

script.render = render;
script.__file = "components/hello/VHello.vue";

var script$1 = defineComponent({
	name: 'VPagination',
});

const _hoisted_1$1 = { class: "test" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1$1, "测试"))
}

script$1.render = render$1;
script$1.__file = "components/pagination/VPagination.vue";

var components = [script, script$1];
function install(Vue) {
    components.forEach(function (component) {
        Vue.component(component.name, component);
    });
}
var index = { install: install };

export default index;
//# sourceMappingURL=oovui.esm.js.map

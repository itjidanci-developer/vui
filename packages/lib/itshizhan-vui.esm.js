/*!
 *  @oovui/vue v0.0.2
 * (c) 2018-2020 itshizhan@163.com
 * Released under the MIT License.
 */
import { defineComponent, openBlock, createBlock, createVNode, toDisplayString, ref, onMounted, computed, createCommentVNode, Fragment, renderList } from 'vue';

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
    name: 'v-pagination',
    props: {
        //奇数,可展示为...
        length: {
            type: Number,
            default: 5,
        },
        // 当前页码
        index: {
            type: Number,
            default: 1,
        },
        // 每页显示条数
        size: {
            type: Number,
            default: 10,
        },
        // 总记录数
        total: {
            type: Number,
            default: 1,
        },
    },
    emits: ['change'],
    setup(props, { emit }) {
        //当前页码
        const currentIndex = ref(1);
        const showPrevMore = ref(false);
        const showNextMore = ref(false);
        onMounted(() => {
            currentIndex.value = props.index;
        });
        const totalPages = computed(() => {
            const { size, total } = props;
            return Math.ceil(total / size);
        });
        //计算总页数
        const paginations = computed(() => {
            const { length } = props;
            const array = [];
            const pageCount = totalPages.value;
            const current = currentIndex.value;
            const _offset = (length - 1) / 2;
            const offset = {
                start: current - _offset,
                end: current + _offset,
            };
            if (offset.start < 1) {
                offset.end = offset.end + (1 - offset.start);
                offset.start = 1;
            }
            if (offset.end > pageCount) {
                offset.start = offset.start - (offset.end - pageCount);
                offset.end = pageCount;
            }
            if (offset.start < 1)
                offset.start = 1;
            showPrevMore.value = offset.start > 1;
            showNextMore.value = offset.end < pageCount;
            console.log('showPrevMore.value:' + showPrevMore.value);
            for (let i = offset.start; i <= offset.end; i++) {
                array.push(i);
            }
            return array;
        });
        //跳转到指定页
        function go(index) {
            if (currentIndex.value !== index) {
                currentIndex.value = index;
                // 父组件通过change方法来接受当前的页码
                emit('change', index);
            }
        }
        function prev() {
            if (currentIndex.value > 1) {
                go(currentIndex.value - 1);
            }
        }
        function next() {
            if (currentIndex.value < totalPages.value) {
                go(currentIndex.value + 1);
            }
        }
        return {
            currentIndex,
            prev,
            next,
            go,
            totalPages,
            paginations,
            showPrevMore,
            showNextMore,
        };
    },
});

const _hoisted_1$1 = { class: "vui-pagination" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("ul", _hoisted_1$1, [
    createVNode("li", {
      class: [
				'paging-item',
				'paging-item--prev',
				{ 'paging-item--disabled': _ctx.currentIndex === 1 },
			],
      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.prev && _ctx.prev(...args)))
    }, " 上一页 ", 2 /* CLASS */),
    (_ctx.showPrevMore)
      ? (openBlock(), createBlock("li", {
          key: 0,
          class: ['paging-item', 'paging-item--more'],
          onClick: _cache[2] || (_cache[2] = $event => (_ctx.go(1)))
        }, " 1 "))
      : createCommentVNode("v-if", true),
    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.paginations, (pager) => {
      return (openBlock(), createBlock("li", {
        class: ['paging-item', { 'paging-item--current': _ctx.currentIndex == Number(pager) }],
        key: pager,
        onClick: $event => (_ctx.go(pager))
      }, toDisplayString(pager), 11 /* TEXT, CLASS, PROPS */, ["onClick"]))
    }), 128 /* KEYED_FRAGMENT */)),
    (_ctx.showNextMore)
      ? (openBlock(), createBlock("li", {
          key: 1,
          class: ['paging-item', 'paging-item--more'],
          onClick: _cache[3] || (_cache[3] = $event => (_ctx.go(_ctx.totalPages)))
        }, toDisplayString(_ctx.totalPages), 1 /* TEXT */))
      : createCommentVNode("v-if", true),
    createVNode("li", {
      class: [
				'paging-item',
				'paging-item--next',
				{ 'paging-item--disabled': _ctx.currentIndex === _ctx.totalPages },
			],
      onClick: _cache[4] || (_cache[4] = (...args) => (_ctx.next && _ctx.next(...args)))
    }, " 下一页 ", 2 /* CLASS */)
  ]))
}

script$1.render = render$1;
script$1.__file = "components/pagination/VPagination.vue";

const components = [script, script$1];
function install(Vue) {
    components.forEach((component) => {
        Vue.component(component.name, component);
    });
}
var index = { install };

export default index;
//# sourceMappingURL=itshizhan-vui.esm.js.map

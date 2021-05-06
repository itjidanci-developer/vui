<template>
	<ul class="vui-pagination">
		<li
			:class="[
				'paging-item',
				'paging-item--prev',
				{ 'paging-item--disabled': currentIndex === 1 },
			]"
			@click="prev"
		>
			上一页
		</li>
		<li :class="['paging-item', 'paging-item--more']" v-if="showPrevMore" @click="go(1)">
			1
		</li>
		<li
			:class="['paging-item', { 'paging-item--current': currentIndex == Number(pager) }]"
			v-for="pager in paginations"
			:key="pager"
			@click="go(pager)"
		>
			{{ pager }}
		</li>
		<li
			:class="['paging-item', 'paging-item--more']"
			v-if="showNextMore"
			@click="go(totalPages)"
		>
			{{ totalPages }}
		</li>
		<li
			:class="[
				'paging-item',
				'paging-item--next',
				{ 'paging-item--disabled': currentIndex === totalPages },
			]"
			@click="next"
		>
			下一页
		</li>
	</ul>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
export default defineComponent({
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
			if (offset.start < 1) offset.start = 1;
			showPrevMore.value = offset.start > 1;
			showNextMore.value = offset.end < pageCount;
			console.log('showPrevMore.value:' + showPrevMore.value);
			for (let i = offset.start; i <= offset.end; i++) {
				array.push(i);
			}
			return array;
		});
		//跳转到指定页
		function go(index: number) {
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
</script>
<style lang="scss">
@import '../../styles/variable.scss';
.vui-pagination {
	display: inline-block;
	padding: 0;
	margin: 1rem 0;
	font-size: 0;
	list-style: none;
	user-select: none;
	> .paging-item {
		display: inline-block;
		font-size: 12px;
		position: relative;
		padding: 6px 12px;
		line-height: 1.42857143;
		text-decoration: none;
		border: 1px solid #ccc;
		background-color: #fff;
		cursor: pointer;
		color: #7b7b7b;
		margin-left: 10px;
		&:first-child {
			margin-left: 0;
		}
		&:hover {
			background-color: #f0f0f0;
			color: #e60012;
		}
		&.paging-item--disabled,
		&.paging-item--more {
			background-color: #fff;
			color: #505050;
		}
		&.paging-item--disabled {
			cursor: not-allowed;
			opacity: 0.5;
		}
		&.paging-item--more,
		&.paging-item--current {
			cursor: default;
		}
		&.paging-item--current {
			background-color: #3bc264;
			color: #fff;
			position: relative;
			z-index: 1;
			border-color: #3bc264;
		}
	}
}
</style>

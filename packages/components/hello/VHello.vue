<template>
	<p class="p-cls">
		<h1 class="h1-cls">{{ msg }}</h1>
		<p class="p1">测试</p>
	</p>
	
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'VHello',
	props: {
		msg: {
			type: String,
			default: 'default msg,hello test1',
		},
	},
});
</script>

<style lang="scss">
@import '../../styles/variable.scss';
.p-cls{
	text-align: center;
	display: flex;
	color: red;
	.h1-cls{
		font-size: 30px;
		flex: 1;
	}
	.p1{
		display: grid;
	}
}
</style>
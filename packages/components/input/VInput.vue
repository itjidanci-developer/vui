<template>
	<div class="itvui-input-wrapper">
		<span class="itvui-input-label" v-if="label">
			{{ label }}
		</span>
    <div class="itvui-input-prepend-append">
      <div class="itvui-input-prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="itvui-input-inner-body" 
          :class="{
            'itvui-input-has-prepend': $slots.prepend,
            'itvui-input-has-append': $slots.append,
            'itvui-input-no-prefix': !$slots.prefix,
            'disabled': disabled,
          }">
        <span class="itvui-input-prefix" v-if="$slots.prefix">
          <slot name="prefix"></slot>
        </span>
        <input
          class="itvui-input"
          :class="{
            'disabled': disabled
          }"
          :type="type"
          :value="modelValue"
          @input="inputHandle"
          :placeholder="placeholder"
          v-bind="$attrs"
          :disabled="disabled"
          @focus="focus = true"
          @blur="focus = false"  
        />
        <span class="itvui-input-suffix" v-if="$slots.suffix">
          <slot name="suffix"></slot>
        </span>
        <EyeIcon v-if="false"/>
	    	<EyeSlashIcon  v-if="false"/>
      </div>
      <div class="itvui-input-append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>

    </div>


		<span class="itvui-input-message" v-if="message">
			{{ message }}
		</span>
	
	</div>
</template>
<script lang="ts">
/**
 *  input 组件HTML结构如下：
 *  label + 前缀 + 前icon + input + 后icon + 后缀 + message
 */
import { defineComponent, ref } from 'vue';
// import EyeIcon from '../../icons/EyeIcon.vue';
// import EyeSlashIcon from '../../icons/EyeSlashIcon.vue';
export default defineComponent({
	name: 'v-input',
	// components: {
	// 	EyeIcon,
	// 	EyeSlashIcon,
	// },
	inheritAttrs: false,
	props: {
		type: {
			type: String,
			default: 'text',
		},
		placeholder: String,
		modelValue: String,
		disabled: Boolean,
		label: String,
		message: String,
	},
	emits: ['update:modelValue'],
	setup(props, { emit }) {
		const focus = ref(false);
		function inputHandle(e: Event) {
			emit('update:modelValue', (e.target as HTMLInputElement).value);
		}
		return {
			inputHandle,
			focus,
		};
	},
});
</script>

<style lang="scss">
@import '../../styles/variable.scss';

.itvui-input-wrapper {
  .itvui-input {
    height: 100%;
    padding: 0.5em 0.6em;
    border: none;
    background-color: white;
    transition: $itvui-transition;
    width: 100%;
    outline: none;
    font-size: 14px;
    &.disabled {
      cursor: not-allowed;
      background: #f5f6f6;
      color: #c5cbd7;
    }
    
  }
  .itvui-input-prepend-append {
    display:flex;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: 0.2em 0;
  }
  .itvui-input-inner-body {
    flex: 1;
    border: 1px solid #aaa;
    border-radius: $itvui-border-radius;
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding: 0 6px;
    &.itvui-input-has-prepend {
      border-radius:  0 $itvui-border-radius $itvui-border-radius 0;
    }
    &.itvui-input-has-append {
      border-radius:  $itvui-border-radius 0 0 $itvui-border-radius;
    }
    &.itvui-input-has-prepend.itvui-input-has-append {
      border-radius:0
    }
    &.itvui-input-no-prefix {
      padding: 0;
    }
    &.disabled {
      cursor: not-allowed;
      color: #c5cbd7;
    }
  }
  .itvui-input-prepend {
    border: 1px solid #aaa;
    border-right: none;
    border-radius: $itvui-border-radius 0 0 $itvui-border-radius;
    height: 100%;
    padding: 0.5em 0.6em;
    background-color: #fafbfd;
    color: #555555;
    font-size: 14px;
  }
  .itvui-input-append {
    border: 1px solid #aaa;
    border-left: none;
    border-radius: 0 $itvui-border-radius $itvui-border-radius 0;
    height: 100%;
    padding: 0.5em 0.6em;
    background-color: #fafbfd;
    color: #555555;
    font-size: 14px;
  }
  .itvui-input-prefix,.itvui-input-suffix {
    display: inline-flex;
  }
  .itvui-input-message {
    font-size: 13px;
  }
}
</style>

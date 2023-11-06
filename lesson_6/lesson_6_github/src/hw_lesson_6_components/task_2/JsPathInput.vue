<template>
	<div class="task-container">
		<h3>
			<b>Задача 2.</b><br> Розробити компонент (з підтримкою v-model), який дозволяє вводити шлях до файлу js (URL, що
			закінчується розширенням js). При заданні модифікатора checkPath відображати червоним фоном input, якщо шлях
			некоректний.
		</h3>
		<label>
			{{ title }}
			<input v-model="jsPathCurrentVal" type="text" :class="inputBgColor" placeholder="Enter url path" />
		</label>
	</div>
</template>

<script>
export default {
	name: 'JsPathInput',
	data() {
		return {
			inputBgColor: null,
		}
	},
	props: {
		title: String,
		modelValue: String,
		modelModifiers: {
			default: () => ({}),
		},
	},
	computed: {
		jsPathCurrentVal: {
			get() {
				return this.modelValue;
			},
			set(newJsPath) {
				this.validatePath(newJsPath);
				this.$emit('update:modelValue', newJsPath);
			}
		}
	},
	methods: {
		validatePath(jsPath) {
			if (this.modelModifiers.checkPath) {
				const jsPathRegex = /^(?:\S+\/)*\S+\w+\.js$/;
				if (!jsPathRegex.test(jsPath)) {
					this.inputBgColor = 'invalid-path-bg';
				} else {
					this.inputBgColor = null;
				}
			}
			if (!jsPath) {
				this.inputBgColor = null;
			}
		}
	}
}
</script>

<style lang="css" scoped>

.invalid-path-bg {
	background-color: red;
}
</style>

<template>
	<div class="task-container">
		<h3>
			<b>Задача 3.</b><br> Розробити компонент (з підтримкою v-model), який дозволяє вводити e-mail з домену “edu”
			(приклад:
			ivan-hopko@inv.mn.edu). Частинка «@inv.mn.edu» додається автоматично (користувач не вводить її). При заданні
			модифікатора check відображати червоним фоном input, якщо некоректний.
		</h3>
		<label>
			{{ title }}
			<input v-model="emailCurrentVal" type="email" :class="inputBgColor" placeholder="Enter e-mail"
				@blur="addEduDomain" />
		</label>
	</div>
</template>

<script>
export default {
	name: 'EduEmailInput',
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
		emailCurrentVal: {
			get() {
				return this.modelValue;
			},
			set(newEmailValue) {
				this.isValidEduEmail(newEmailValue);
				this.$emit('update:modelValue', newEmailValue);
			}
		}
	},
	methods: {
		isValidEduEmail(emailValue) {
			const checkEmailRegex = /^[^\s]+@[^\s]+edu$/;
			if (this.modelModifiers.check) {
				if (!checkEmailRegex.test(emailValue)) {
					this.inputBgColor = 'invalid-email-bg';
				} else {
					this.inputBgColor = null;
				}
			}
			if (!emailValue) {
				this.inputBgColor = null;
			}
		},
		addEduDomain() {
			if (this.emailCurrentVal && !this.emailCurrentVal.includes('@')) {
				this.emailCurrentVal += '@inv.mn.edu';
			}
		}
	},
}
</script>

<style lang="css" scoped>
.invalid-email-bg {
	background-color: red;
}
</style>

<template>
	<div class="task-container">
		<h3>
			<b>Задача 1.</b><br> Розробити компонент для введення віку користувача (з підтримкою v-model). При заданні
			модифікатора
			check не допускати введення некоректного віку (вік не може бути більшим за 150). При заданні модифікатора
			setColor задавати фон (вік менше 10 – зелений, від 10 до 21 – жовтий, інакше – оранжевий).
		</h3>
		<label>
			{{ title }}
			<input v-model="userAgeCurrentVal" type="number" min="0" :class="inputBgColor" />
		</label>
	</div>
</template>

<script>
export default {
	name: 'UserAgeInput',
	data() {
		return {
			inputBgColor: null,
		};
	},
	props: {
		title: String,
		modelValue: Number,
		modelModifiers: {
			default: () => ({}),
		},
	},
	computed: {
		userAgeCurrentVal: {
			get() {
				return this.modelValue;
			},
			set(newAge) {
				if (this.modelModifiers.check) {
					if (newAge < 0 || newAge > 150) {
						newAge = null;
					}
				}

				this.inputBgColor = this.getInputBgColor(newAge);

				this.$emit('update:modelValue', newAge);
			},
		},
	},
	methods: {
		getInputBgColor(age) {
			if (this.modelModifiers.setColor && age) {
				if (age < 10) {
					return 'small-age-bg';
				} else if (age <= 21) {
					return 'middle-age-bg';
				} else {
					return 'adult-age-bg';
				}
			}
			return null;
		},
	},
};
</script>

<style lang="css" scoped>
.small-age-bg {
	background-color: green;
}

.middle-age-bg {
	background-color: yellow;
}

.adult-age-bg {
	background-color: orange;
}
</style>

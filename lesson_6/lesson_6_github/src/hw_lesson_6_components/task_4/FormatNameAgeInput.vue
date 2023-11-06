<template>
	<div class="task-container">
		<h3>
			<b>Задача 4.</b><br> Розробити компонент для вводу віку користувача та імені. Робити форматування при заданні
			відповідних
			модифікаторів відповідних полів input:<br>
			- ім’я користувача - у випадку порожнього поля (червони фон)<br>
			- вік (вік менший за 18 – колір фону червоний, інакше – зелений).
		</h3>
		<label>
			{{ userNameTitle }}
			<input v-model="userNameCurrentVal" type="text" :class="userNameBgColor" placeholder="Enter user name" />
		</label>
		<label>
			{{ userAgeTitle }}
			<input v-model="userAgeCurrentVal" type="number" min="0" :class="userAgeBgColor" placeholder="Enter user age" />
		</label>
	</div>
</template>

<script>
export default {
	name: 'FormatNameAgeInput',
	data() {
		return {
			userNameBgColor: 'empty-user-input-bg',
			userAgeBgColor: null,
		}
	},
	props: {
		userNameTitle: String,
		userAgeTitle: String,
		userName: String,
		userNameModifiers: { default: () => ({}) },
		userAge: Number,
		userAgeModifiers: { default: () => ({}) },
	},
	computed: {
		userNameCurrentVal: {
			get() {
				return this.userName;
			},
			set(newUserName) {
				if (this.userNameModifiers.nameInputColor) {
					if (!newUserName) {
						this.userNameBgColor = 'empty-user-input-bg';
					} else {
						this.userNameBgColor = null;
					}
				}
				this.$emit('update:userName', newUserName);
			}
		},
		userAgeCurrentVal: {
			get() {
				return this.userAge;
			},
			set(newUserAge) {
				if (this.userAgeModifiers.ageInputColor) {
					if (newUserAge < 18) {
						this.userAgeBgColor = 'invalid-user-age-input-bg';
					} else {
						this.userAgeBgColor = 'user-age-over18-bg';
					}
					if (!newUserAge) {
						this.userAgeBgColor = null;
					}
				}
				this.$emit('update:userAge', newUserAge);
			}
		}
	},
}
</script>

<style lang="css" scoped>
.empty-user-input-bg,
.invalid-user-age-input-bg {
	background-color: rgba(255, 0, 0, 0.389);
}

.user-age-over18-bg {
	background-color: rgba(0, 128, 0, 0.523);
}
</style>

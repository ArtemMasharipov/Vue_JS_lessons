<template>
	<div class="task-container">
		<h3>
			<b>Задача 6.</b><br> Створити компонент - форму для вводу даних кредитної карти (на зразок поданого прикладу). При
			вводі
			“EXPIRY DATE” розділювач “/” додається автоматично.
		</h3>
		<div class="card-form">
			<div class="card-number">
				<label for="card-number">CARD NUMBER</label>
				<input v-model="cardCurrentNum" ref="cardValue" type="text" :key="updateCardNumKey" maxlength="19"
					id="card-number"
					placeholder="&#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226;" />
			</div>
			<div class="card-details">
				<div class="expiry-date">
					<label for="expiry-date">EXPIRY DATE</label>
					<input v-model="expDateValue" type="text" maxlength="5" id="expiry-date" placeholder="MM / YY"
						@keydown="onKeyDown" />
				</div>
				<div class="secure-code">
					<label for="secure-code">SECURE CODE</label>
					<input v-model="cardVerificationVal" ref="secureCodeValue" type="password" :key="updateSecureCodeKey"
						maxlength="3" id="secure-code" placeholder="&#8226;&#8226;&#8226;" />
				</div>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	name: 'CreditCardDataInput',
	props: {
		cardNumber: {
			type: String,
			default: '',
		},
		cardNumberModifiers: {
			type: Object,
			default: () => ({}),
		},
		cardVV: {
			type: String,
			default: '',
		},
		cardVVModifiers: {
			type: Object,
			default: () => ({}),
		},
	},
	data() {
		return {
			expDateValue: '',
			updateCardNumKey: 0,
			updateSecureCodeKey: 0,
		};
	},

	computed: {
		cardCurrentNum: {
			get() {
				return this.cardNumber
			},
			set(newVal) {
				if (this.cardNumberModifiers.digitsOnly) {
					newVal = newVal.replace(/\D/g, '')
					this.$nextTick(() => {
						this.updateCardNumKey++
						this.$nextTick(() => {
							this.$refs.cardValue.focus()
						})
					})
				}
				if (this.cardNumberModifiers.separate4Digits) {
					newVal = newVal.replace(/(\d{4}(?=.+))/g, '$1 ')
				}
				this.$emit('update:cardNumber', newVal)
			},
		},
		cardVerificationVal: {
			get() {
				return this.cardVV
			},
			set(newVal) {
				if (this.cardVVModifiers.digitsOnly) {
					newVal = newVal.replace(/\D/g, '')
					this.$nextTick(() => {
						this.updateSecureCodeKey++
						this.$nextTick(() => {
							this.$refs.secureCodeValue.focus()
						})
					})
				}
				this.$emit('update:cardVV', newVal)
			},
		},
	},
	watch: {
		expDateValue(newValue, oldValue) {
			if (newValue.length === 2 && oldValue.length === 1) this.expDateValue = newValue + '/'
			else if (newValue.length === 2 && oldValue.length === 3) this.expDateValue = newValue[0]
		},
	},
	methods: {
		onKeyDown(event) {
			const key = event.key
			const isDigit = key >= '0' && key <= '9'
			const isBackspace = key === 'Backspace'
			if (!isDigit && !isBackspace) event.preventDefault()
		},
	},
}
</script>


<style lang="css" scoped>
.card-form {
	border: 1px solid grey;
	font-family: Arial, sans-serif;
	width: 300px;
	height: 180px;
	background-color: #f0f0f0;
	padding: 20px;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-form label {
	font-size: 10px;
	color: #333;
	text-transform: uppercase;
	margin-bottom: 5px;
	display: block;
}

.card-form input {
	width: 100%;
	margin-bottom: 15px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
}

.card-details {
	display: flex;
	justify-content: space-between;
}

.expiry-date,
.secure-code {
	display: flex;
	flex-direction: column;
	flex-basis: 45%;
}

.secure-code-info {
	display: inline-flex;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: #333;
	color: white;
	align-items: center;
	justify-content: center;
	margin-left: 5px;
}

::placeholder {
	color: #aaa;
}
</style>
<template>
	<div id="basic-inquery">
		<!-- <Button
			class="effect"
			:submit="true"
			:class="submitActive ? 'enabled effect' : 'disabled'"
			@click="submitForm"
			>test api</Button
		> -->
		<form
			name="contact-formulier"
			class="form"
		>
			<input
				type="hidden"
				name="form-name"
				value="contact-formulier"
			/>
			<fieldset class="optional-fields">
				<span class="fieldset-label">Optionele velden:</span>
				<FormsComponentsInputMultiChoice
					@payload="consumeData"
					name="reden-bericht"
					inputID="reden-bericht"
					label="ik wil graag:"
					class="multi-select"
				></FormsComponentsInputMultiChoice>
				<FormsComponentsInputPhone
					@payload="consumeData"
					name="telefoon"
					inputID="telefoonnummer"
					label="telefoonnummer:"
					class="input-phone-number"
				></FormsComponentsInputPhone>
			</fieldset>
			<fieldset class="required-fields">
				<span class="fieldset-label">Verplichte velden:</span>
				<FormsComponentsInputName
					@payload="consumeData"
					name="naam"
					inputID="naam"
					label="naam:"
					class="input-name"
					required
				></FormsComponentsInputName>
				<FormsComponentsInputEmail
					@payload="consumeData"
					name="email"
					inputID="email"
					label="email:"
					class="input-email"
					required
				>
				</FormsComponentsInputEmail>
				<FormsComponentsInputTextarea
					@payload="consumeData"
					:rows="5"
					name="bericht"
					inputID="bericht"
					label="bericht:"
					required
				></FormsComponentsInputTextarea>
			</fieldset>
			<fieldset>
				<Button
					class="effect"
					:submit="true"
					@click="submitForm"
					:class="submitActive ? 'enabled effect' : 'disabled'"
					>Verzend</Button
				>
			</fieldset>
		</form>
	</div>
</template>

<script setup>
	const submitActive = ref(false);
	const fd = reactive([]);

	function consumeData(payload) {
		let fdObject = fd.find((Object) => Object.entry.fieldLabel === payload.fieldLabel);
		if (fdObject) {
			fdObject.entry.fieldValue = payload.fieldValue;
			fdObject.entry.fieldValidity = payload.fieldValidity;
			// Check required fields's validity:
			//// If payload has a 'fieldValidity' field (check if payload Object is required)
			if (typeof fdObject.entry.fieldValidity === "boolean") {
				if (fdObject.entry.fieldValidity === true) {
					submitActive.value = true;
				} else {
					submitActive.value = false;
				}
			}
		} else {
			// Array is empty, push object into:
			fd.push({ entry: payload });
		}
	}
	async function submitForm() {
		console.log(fd);
		let formBody = fd;
		console.log(formBody);
		const api = useRuntimeConfig().public.apiUrl; // <-- composable = issue??!?!!
		await $fetch(api + "/ezforms/submit", {
			method: "POST",
			body: {
				formName: "formnameyo",
				formData: {
					formBody
				},
			},
		});
	}
</script>

<style lang="scss" scoped>

	fieldset {
		grid-auto-rows: auto;
		grid-template-rows: repeat(3, auto);
	}

	.optional-fields,
	.required-fields {
		grid-column: 1 /3;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0 $spacing3;
		@include media(xsm) {
			display: block;
		}
	}

	.optional-fields {
		grid-row: 1;
		background-color: rgba($color: $black, $alpha: 0.6);
	}

	.required-fields {
		grid-row: 2;
	}

	.fieldset-label {
		font-size: $font-size4;
		opacity: 0.3;
	}
	.multi-select {
		grid-column: 1 / 3;
	}
	.input-name-textarea,
	.input-name,
	.input-email {
		grid-column: 1;
	}

	button.button {
		grid-row: 3;
	}

	@include media(xsm, sm) {
		button.button {
			grid-row: 4;
			grid-column: 1/ 3;
			margin: auto;
		}
	}
</style>

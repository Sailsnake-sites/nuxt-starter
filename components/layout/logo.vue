<template>
	<div
		id="header__logo"
		class="company-logo"
	>
		<img
			class="logo__effect-image"
			src="/Logo--full__no-padding.png"
			alt="Sailsnake logo"
			width="182"
			height="82"
		/>
	</div>
</template>

<style lang="scss" scoped>
.company-logo {
		position: relative;
		width: 8em;
		display: inline-block;
		@include media(sm) {
			margin-block: auto;
		}
		img {
			position: relative;
			width: 100%;
			height: auto;
		}
	}

</style>

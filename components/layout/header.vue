<template>
	<header id="header" class="initial-load-state">
		<LayoutLogo />
		
		header
		<NavigationMainMenu class="main-menu" />
	</header>
</template>

<script>
export default {
	mounted() {
		if (process.client) {
			let header = document.getElementById("header");
			setTimeout(() => {
				header.classList.remove("initial-load-state");
			}, 700);
		}
	},
};
</script>

<style lang="scss" scoped>

	header {
		position: absolute;
		top: 0;
		width: 100%;
		display: grid;
		grid-template-columns: 0.2fr repeat(2, 0.6fr) 1fr;
		grid-template-rows: auto 1fr;
		z-index: 99;
		margin-inline: auto;
		@include media(xsm) {
			position: relative;
			display: block;
		}
	}
	#header__logo {
		grid-column: 2;
		grid-row: 1;
		@include media(xsm) {
			display: none;
		}
	}
	#main-menu {
		grid-column: 3;
		grid-row: 1;
	}
	.initial-load-state {

	}
</style>

<template>
	<div id="main-menu">
		<div
			id="mobile-menu__toggle-button"
			@click="toggleMobileMenu()"
			:class="{ mobileMenuOpen: mobileMenuActive }"
		>
			<span>Menu</span>
		</div>

		<nav :class="{ mobileMenuOpen: mobileMenuActive}">
			<menu
				class="main-menu__items"
			>
				<NuxtLink
					to="/"
					class="menu-item"
					@click="toggleMobileMenu()"
					><span>Home</span></NuxtLink
				>
				<NuxtLink
					to="/over"
					class="menu-item"
					@click="toggleMobileMenu()"
					><span>Over Ons</span></NuxtLink
				>
				<NuxtLink
					to="/contact"
					class="menu-item"
					@click="toggleMobileMenu()"
					><span>Contact</span></NuxtLink
				>
			</menu>
		</nav>
	</div>
</template>

<script setup>
	const api = useRuntimeConfig().public.apiUrl;
	// const { data: menuData } = await useFetch(api + "/menu-data?populate=*");

	const route = ref(useRoute());
	watchEffect(route);
</script>

<script>
	export default {
		data() {
			return {
				mobileMenuActive: false,
			};
		},
		methods: {
			toggleMobileMenu() {
				this.mobileMenuActive = !this.mobileMenuActive;
			},
		},
	};
</script>

<style lang="scss" scoped>
	#main-menu {
		position: relative;
		display: grid;
		@include media(xsm) {
			width: 100%;
			position: fixed;
		}
	}
	#mobile-menu__toggle-button {
		position: absolute;
		z-index: 99;
		display: none;
		width: max-content;
		margin-inline: auto;
		justify-self: center;
		cursor: pointer;
		span {
			font-weight: bold;
			&::after {
				display: none;
				position: absolute;
				content: "Sluiten";
			}
		}
		@include media(xsm) {
			display: block;
		}
	}
	nav {
		position: relative;
		width: 100%;
		width: max-content;
		height: max-content;
		margin-inline: auto;
		@include media(xsm) {
			width: 100%;
			padding-top: 0;
		}
		@include media(sm) {
			padding: 0;
		}
	}
	.menu-item {
		list-style: none;
		padding: $spacing1;
	}

	.main-menu__items {
		position: relative;
		display: flex;
		max-width: max-content;
		grid-column: 1;
		grid-row: 2;
		.menu-item {
			cursor: pointer;
			display: inline-block;
		}
		@include media(xsm) {
			flex-direction: column;
		}
	}



	// toggle states

	#mobile-menu__toggle-button.mobileMenuOpen {
		background: $black;
		span::after {
			display: block;
		}
	}

	nav.mobileMenuOpen {
		max-height: 100vh;
		@include media(xsm) {
			&::before {
				position: fixed;
				content: "";
				width: 100%;
				height: 100vh;
				background: rgba($color: $black, $alpha: 0.8);
				z-index: -1;
			}
		}
	}
</style>

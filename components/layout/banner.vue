<template>
	<div
		id="banner"
		class="banner initial-load-state"
	>
		<div class="banner__hero-image" />
		banner
	</div>
</template>

<script>
	export default {
		mounted() {
			if (process.client) {
				let banner = document.getElementById("banner");
				setTimeout(() => {
					banner.classList.remove("initial-load-state");
				}, 2000);
			}
		},
	};
</script>

<style lang="scss" scoped>
	$banner-clip-left: calc(3 / 13 * 100%);
	$banner-clip-right: calc(13 / 13 * 100%);

	.banner {
		position: relative;
		width: 100%;
		height: auto;
		aspect-ratio: 21 /5;
		background: $black;
		@include media(xsm) {
			aspect-ratio: 16 / 9;
		}
	}

	.banner__hero-image {
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 1;
		background: orange;
	}
</style>

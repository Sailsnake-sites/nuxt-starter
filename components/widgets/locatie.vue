<template>
	<div
		class="__locatie widget__block"
	>
		<div class="widget-title">Locatie</div>
		<div
			v-if="locatie.data.rich_text"
			v-html="locatie.data.rich_text"
		></div>
		<a
			class="__locatie--google-maps"
			:href="locatie.data.google_maps_link"
			target="_blank"
		>
			<span>Navigeer via</span>
			<img class="effect-base-image" src="/navigation/google-maps.png" alt="Google Maps logo icon" width="500" height="96" />
			<img src="/navigation/google-maps.png" alt="Google Maps logo icon" width="500" height="96" />
			
		</a>
	</div>
</template>
<script setup>
	const api = useRuntimeConfig().public.apiUrl;
	const { data: locatie } = await useFetch(api + "/locatie?populate=*");
</script>

<style lang="scss" scoped>
	.__locatie {
		:deep(ul) {
			padding: 0;
			li {
				list-style: none;
			}
		}
	}

	a.__locatie--google-maps {
		position: relative;
		display: block;
		margin-top: $spacing5;
		overflow: hidden;
		span {
			font-family: $font-art;
			color: $red;
			display: block;
		}
		img {
			position: relative;
			width: 100%;
			max-width: 10em;
			height: auto;
			margin: $spacing3;
			opacity: 1;
			transition: $transition3;
		}
		img.effect-base-image {
			position: absolute;
			inset: 0;
			top: 1.6em; // precise
			// filter: blur(2px) saturate(500%);
			transform: translateX(-150%);
			opacity: 1;
			transition: $transition3;

			display: none;
		}
		&:hover {
			img.effect-base-image {
				opacity: 1;
				transform: translateX(0);
			}
			img {
				// filter: drop-shadow(0 0 $spacing1 $green);
				// background: $white;
				// transform: translateX(150%);
				transform: scale(105%);
			}
		}
	}
</style>

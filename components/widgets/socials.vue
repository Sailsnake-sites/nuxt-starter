<template>
	<div
		id="__socials"
		class="widget__block"
	>
		<div class="widget-title">Socials</div>
		<a
			v-if="socialMedia.data.google"
			:href="socialMedia.data.google"
			target="_blank"
		>
			<img src="/social-media/google.png" />
		</a>
		<a
			v-if="socialMedia.data.whatsapp"
			:href="socialMedia.data.whatsapp"
			target="_blank"
		>
			<img src="/social-media/whatsapp.png" />
		</a>
		<a
			v-if="socialMedia.data.facebook"
			:href="socialMedia.data.facebook"
			target="_blank"
		>
			<img src="/social-media/facebook.png" />
		</a>
		<a
			v-if="socialMedia.data.youtube"
			:href="socialMedia.data.youtube"
			target="_blank"
		>
			<img src="/social-media/youtube.png" />
		</a>
	</div>
</template>
<script setup>
	const api = useRuntimeConfig().public.apiUrl;
	const { data: socialMedia } = await useFetch(api + "/social-media?populate=*");
</script>

<style lang="scss" scoped>
	#__socials {
		display: grid;
		grid-template-columns: repeat(2, 50%);
		gap: $spacing3;
		.widget-title {
			grid-column: 1 /3;
		}
		a {
			
			img {
				position: relative;
				height: 1.2em;
				width: auto;
				transition: $transition3;
			}
			@include hover {
				// background: $green;
				// filter: drop-shadow(0 0 $spacing3 $green);
				img {
					// filter: brightness(300%) drop-shadow(0 0 $spacing1 $black);
					transform: scale(105%);
				}
			}
		}
	}
</style>

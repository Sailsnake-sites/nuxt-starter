<template>
	<div
		id="__openingstijden"
		class="widget__block"
	>
		<div class="widget-title">Openingstijden</div>
		<div v-html="openingstijden.data.rich_text"></div>
		<span>{{ openingstijden.data.message }}</span>
	</div>
</template>
<script setup>
	const api = useRuntimeConfig().public.apiUrl;
	const { data: openingstijden } = await useFetch(api + "/openingstijden?populate=*");
</script>

<style lang="scss" scoped>
	#__openingstijden {
		:deep(figure) {
			margin: 0;
		}
		span {
			display: block;
			margin-top: $spacing4;
			font-family: $font-art;
			font-size: $font-size7;
			color: $black;
		}
	}

</style>

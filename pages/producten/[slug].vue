<template>
	<main>
		<section>
		</section>
		<!-- <SeoHead
			v-if="pageData.data.seo"
			:seo="pageData.data.seo"
		/> -->
	</main>
</template>
<script setup>
	definePageMeta({
		layout: "alternative",
		layoutProp: "imAProp",
	});

	const route = useRoute();

	const api = useRuntimeConfig().public.apiUrl;
	// const { data: pageData } = await useFetch(
	// 	`${api}/pageData?filters[slug][$eq]=${route.params.slug}&populate=deep,3`
	// );
</script>

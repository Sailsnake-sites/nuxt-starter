<template>
	<main>
		<!-- <SeoHead v-if="pageData.data.seo" :seo="productenAlgemeen.data.seo" /> -->
	</main>
</template>


<script setup>

definePageMeta({
  layout: "alternative",
  layoutProp: "imAProp",
});

const api = useRuntimeConfig().public.apiUrl;

// const { data: filteredData } = await useFetch(api + '/page-filtered?filters[uitgelicht][$eq]=true&populate=deep,3')
// const { data: pageData } = await useFetch(`${api}/page-data?populate=deep,3`)

</script>

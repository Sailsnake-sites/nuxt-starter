<template>
	<main>
		<section>
			<h1>home</h1>
		</section>
		<!-- <SeoHead
			v-if="home.data.seo"
			:seo="home.data.seo"
		/> -->
	</main>
</template>

<script setup>
	const api = useRuntimeConfig().public.apiUrl; 
	// const { data: home } = await useFetch(`${api}/home?populate=deep,3`);
</script>


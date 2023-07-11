<template>
	<main>
		<section>
			<h1>over</h1>
		</section>
		<!-- <SeoHead
			v-if="over.data.seo"
			:seo="over.data.seo"
		/> -->
	</main>
</template>

<script setup>
	const api = useRuntimeConfig().public.apiUrl; 
	// const { data: over } = await useFetch(`${api}/over?populate=deep,3`);
</script>


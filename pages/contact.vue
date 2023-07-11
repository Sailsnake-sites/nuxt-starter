<template>
	<main>
		<section>
			<h1>Contact</h1>
		</section>
		<FormsBasicInquery />
		<!-- <SeoHead
			v-if="contact.data.seo"
			:seo="contact.data.seo"
		/> -->
	</main>
</template>

<script setup>
	const api = useRuntimeConfig().public.apiUrl; 
	// const { data: contact } = await useFetch(`${api}/contact?populate=deep,3`);
</script>


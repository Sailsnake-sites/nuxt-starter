<template>
	<main>
		hello
		{{  response  }}
	</main>
</template>

<script setup>

definePageMeta({
  layout: "alternative",
});
// const { data: response } = await useFetch("http://localhost:1337/api/hello?populate=*")

const { find } = useStrapi()

const response = await find('hello')

</script>
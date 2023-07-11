<template>
	<div id="site-wrapper">
		<LayoutHeader />
		<LayoutBanner />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<LayoutSidebar />
		<LayoutFooter />
	</div>
</template>

<!-- <script setup>
	onBeforeMount(() => {
		document.body.classList.add("initial-site-load-state");

		setTimeout(() => {
			document.body.classList.remove("initial-site-load-state");
		}, 2000);
	});
</script> -->

<style lang="scss">
	.page-enter-active,
	.page-leave-active,
	.layout-enter-active,
	.layout-leave-active {
		transition: all $transition1;
	}
	.page-enter-from,
	.page-leave-to,
	.layout-enter-from,
	.layout-leave-to {
		opacity: 0;
	}
</style>

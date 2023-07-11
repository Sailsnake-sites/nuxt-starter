<template>
	<div class="layout-wrapper index">
		Layout: Index
		<slot />
	</div>
</template>

<style lang="scss" scoped>
	.layout-wrapper {
		main {
			grid-column: 1 / 3 !important;
		}
	}
</style>

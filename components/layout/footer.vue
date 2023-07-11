<template>
	<footer>
		<div id="__by-sailsnake">
			<p>
				site realisatie:<a
					href="http://www.sailsnake.nl"
					target="_blank"
					>Sailsnake</a
				>
			</p>
		</div>
	</footer>
</template>
<style lang="scss" scoped>
	$footer-height: 33em;
	footer {
		position: relative;
		height: $footer-height;
		@include media(xsm) {
			height: auto;
		}
	}
	#__by-sailsnake {
		position: relative;
		p {
			margin: 0;
			font-size: $font-size7;
			color: $grey;
		}
		a {
			font-style: normal;
			color: $black;
		}
	}
</style>

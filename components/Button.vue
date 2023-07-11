<template>
	<button
		:type="submit ? 'submit' : 'button'"
		class="button"
	>
		<slot />
	</button>
</template>

<script>
	export default {
		props: {
			submit: Boolean,
		},
		data() {
			return {
				//   slotData: this.$slots.default[0].text, // Is data from slot!
			};
		},
	};
</script>

<style lang="scss" scoped>
	// main button styles in "buttons.scss"

	$base-color: orange;
	$button-padding: 0;
	.button {
		$button-padding: 0.4em 1.2em;
		position: relative;
		display: inline-block;
		border: none;
		margin: 0.5em auto;
		padding: $button-padding;
		background-color: $base-color;
		color: $white;
		font-family: $font-main;
		font-size: $font-size6;
		font-weight: bold;
		text-decoration: none;
		text-transform: lowercase;
		cursor: pointer;
		height: max-content;
		height: auto;
		z-index: 3;
		&.disabled {
			transition: $transition1;
			cursor: not-allowed;
			&:hover {
				::after {
					position: absolute;
					width: 100%;
					height: 100%;
					content: "choose an option first";
					z-index: 3;
				}
			}
		}
		&.enabled {
			opacity: 1;
			pointer-events: all;
		}
	}

	.button:hover {
		@include hover {
			background: $grey;
			color: rgba($color: $white, $alpha: 0.9);
			box-shadow: $shadow1;
		}
	}

	.button.effect[data-content]::after,
	.button.effect[data-content]::before {
		content: attr(data-content);
		position: absolute;
		left: 0;
		top: 0;
		padding: $button-padding;
		opacity: 1;
		clip-path: polygon(0 0, 0 100%, 100% 100%, 0% 100%);
	}

	.effect:hover::after,
	.effect:hover::before {
		animation: highlight 650ms ease-in;
	}
	.button.effect[data-content]::after {
		z-index: 2;
		color: $white;
	}

	.button.effect[data-content]::before {
		content: attr(data-content);
		color: transparent;
		z-index: 1;
		text-shadow: 0 0 30px $white;
	}

	.button.effect[data-content]:hover::after {
		// only works when called like this
		animation: highlight 650ms linear;
	}
</style>

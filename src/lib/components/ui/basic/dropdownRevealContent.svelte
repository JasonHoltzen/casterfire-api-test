<script>
	import { onMount } from 'svelte';
	import { backInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	let thisNode;
	let cssBoxEdge = '--left: 0px; --right: unset; --bdrsTLeft: 0rem; --bdrsTRight: 0.5rem;';

	onMount(() => {
		if (thisNode) {
			if (isOutRight(thisNode)) {
				cssBoxEdge = '--left: unset; --right: 0px; --bdrsTLeft: 0.5rem; --bdrsTRight: 0rem;';
			}
		}
	});

	const isOutRight = (node) => {
		let rect = node.getBoundingClientRect();
		let { right } = rect;
		let winWidth = window.innerWidth;
		let docElemWidth = document.documentElement.clientWidth;
		let pad = '20'; //min px from edge

		return right + pad > winWidth || right + pad > docElemWidth;
	};
</script>

<div
	bind:this={thisNode}
	transition:slide={{ easing: backInOut, duration: 500 }}
	style={cssBoxEdge}
>
	<slot name="content">No content provided in dropdownRevealContent.</slot>
</div>

<style lang="scss">
	div {
		position: absolute;
		left: var(--left);
		right: var(--right);
		top: 100%;
		background: var(--ddBgClr);
		border: 2px solid var(--ddBdrClr);
		border-radius: 0.5rem;
		border-top-left-radius: var(--bdrsTLeft);
		border-top-right-radius: var(--bdrsTRight);
		box-shadow: 0 0.1rem 0.5rem var(--c-gray-light);
		box-sizing: border-box;
		gap: 0.5rem;
		min-width: 100px;
		overflow-y: auto;
		padding: 10px;
		transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
		z-index: 5;
		&::-webkit-scrollbar-thumb {
			background-color: var(--c-p-light);
			border-radius: 0.5rem;
			background-clip: padding-box;
		}
		&::-webkit-scrollbar {
			width: 0.8rem;
		}

		@include respond('sm') {
			position: relative;
			flex: 1 1 auto;
			border-top-left-radius: 0rem;
			border-top-right-radius: 0rem;
			box-shadow: none;
			height: auto;
			left: 0;
			min-width: 100%;
			right: 0;
			top: unset;
			width: 100%;
			overflow: unset;
		}
	}
</style>

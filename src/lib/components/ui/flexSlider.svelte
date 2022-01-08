<script>
	import { expoInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	export let visible = false;
	let childVisible = false;

	function grow(node, params) {
		const o = +getComputedStyle(node).flexGrow;
		return {
			duration: params.duration || 1000,
			easing: params.easing || expoInOut,
			delay: params.delay || 0,
			css: (t) => `flex-grow: ${t * o + 0.0001};`
		};
	}

	function scale(node, params) {
		const style = getComputedStyle(node).transform;

		return {
			delay: 0,
			duration: 500,
			css: (t) => `transform: scale(${t}); transform-origin: top right;`
		};
	}
</script>

<div id="flexbox">
	<div class="flexed left">
		<slot name="left" />
	</div>
	{#if visible}
		<div
			class="flexed right"
			transition:grow={{ duration: 300, easing: expoInOut }}
			on:introstart={() => (childVisible = false)}
			on:introend={() => (childVisible = true)}
			on:outrostart={() => (childVisible = false)}
			on:outroend={() => (childVisible = true)}
		>
			{#if childVisible}
				<span transition:fade={{ duration: 200 }}>
					<slot name="right" />
				</span>
			{/if}
		</div>
	{/if}
</div>

<style>
	#flexbox {
		height: 100%;
		display: flex;
		flex-flow: row nowrap;
	}

	.flexed {
		display: flex;
		flex-flow: row nowrap;
		flex-basis: auto;
		flex-grow: 1;
		flex-shrink: 1;
	}

	.flexed.right {
		max-width: 45%;
	}

	span {
		overflow: hidden;
		width: 100%;
		height: 100%;
	}
</style>

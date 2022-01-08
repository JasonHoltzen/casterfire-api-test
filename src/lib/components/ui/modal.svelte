<script>
	import { modal } from '$stores/ui.js';
	import { fade } from 'svelte/transition';
</script>

{#if $modal.show}
	<div class="modal" transition:fade={{ duration: 200 }}>
		<svelte:component this={$modal.component} />
	</div>
{/if}

<style lang="scss">
	.modal {
		display: grid;
		place-items: center center;
		position: absolute;
		height: 100%;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		backdrop-filter: blur(10px) saturate(180%);
		background: rgba($c-gray, 0.85);
		overflow: auto;
		width: 100%;
		z-index: 3333;
	}
</style>

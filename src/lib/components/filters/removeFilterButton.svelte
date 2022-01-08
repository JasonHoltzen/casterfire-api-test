<script>
	import { fade, fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let hovered = false;
	const btnClicked = () => dispatch('clicked');
</script>

<button
	on:click={btnClicked}
	in:fade
	out:fly
	on:mouseenter={() => (hovered = true)}
	on:mouseleave={() => (hovered = false)}
>
	<span class="text">
		<slot name="buttonText" />
	</span>
	<span class="icon">
		{#if hovered}
			<span transition:fade>
				<slot name="hoveredIcon">×</slot>
			</span>
		{:else}
			<span transition:fade>
				<slot name="defaultIcon">×</slot>
			</span>
		{/if}
	</span>
</button>

<style lang="scss">
	button {
		flex: 0 1 auto;
		display: inline-flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-between;
		gap: 5px;
		background: var(--c-gray-lighter);
		border-width: 2px;
		border-style: solid;
		border-color: var(--c-gray-darker);
		border-radius: 0.3rem;
		box-sizing: border-box;
		cursor: pointer;
		outline: none;
		padding: 0.1rem 0.5rem;
		transition: background 0.2s ease-in-out, border-color 0.2s ease-in-out;
		&:hover {
			border-color: var(--c-p-light);
		}
	}

	.text {
		flex: 1 1 auto;
		display: inline;
		color: var(--c-gray-darkest);
		font-family: var(--font-normal);
		font-size: 15px;
		letter-spacing: 1.05;
		text-align: left;
		padding-left: 0.1em;
		// max-width: 90%;
	}

	.icon {
		flex: 0 0 20px;
		align-self: flex-start;
		display: inline-grid;
		place-items: center center;
		position: relative;
		border-radius: 50%;
		height: 20px;
		width: 20px;

		span {
			position: absolute;
			top: 0;
			left: 0;
		}
	}
</style>

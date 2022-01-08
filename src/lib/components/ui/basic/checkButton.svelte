<script>
	import { fade } from 'svelte/transition';

  export let iconVisible;
  export let iconHidden;

	export let toggled = true;
	export let text = 'no text received';
	let hovered = false;
	$: id = text.replaceAll(' ', '');

	export const iconVisibleProps = {
		color: 'var(--c-gray-lighter',
		width: '20px',
		height: '20px',
		size: '20px',
		viewBox: '0 0 24 24'
	};
	export const iconHiddenProps = {
		color: 'var(--c-gray)',
		width: '20px',
		height: '20px',
		size: '20px',
		viewBox: '0 0 24 24'
	};
</script>

<input name={id} {id} type="checkbox" bind:checked={toggled} />
<label
	for={id}
	class={toggled ? 'on' : 'off'}
	on:mouseenter={() => (hovered = true)}
	on:mouseleave={() => (hovered = false)}
>
{#if !!iconVisible && !!iconHidden}
	<span class="icon">
		{#if (toggled && hovered) || (!toggled && !hovered)}
			<span transition:fade>
        <svelte:component this={iconHidden} {...iconHiddenProps} />
			</span>
      {:else}
			<span transition:fade>
        <svelte:component this={iconVisible} {...iconVisibleProps} />
			</span>
		{/if}
	</span>
  {/if}
	<span class="text">as
		{text}
	</span>
</label>

<style lang="scss">
	input {
		@include visuallyHidden;

		& + label {
			display: inline-flex;
			flex-flow: row nowrap;
			align-items: center;
			justify-content: center;
			gap: 5px;
			background: var(--c-p-light);
			border-radius: 5px;
			padding: 0.1rem 0.5rem;
			transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
			cursor: pointer;

			@include respond('sm') {
				min-height: 44px;
				justify-content: center;
			}

			&.off {
				background: var(--c-gray-light);
				color: var(--c-gray-darker);
			}

			.text {
				color: var(--c-gray-darkest);
				display: inline-flex;
				align-items: center;
				font-size: 15px;
				letter-spacing: 1.05;
			}

			.icon {
				display: inline-grid;
				place-items: center center;
				position: relative;
				height: 20px;
				width: 20px;

				span {
					position: absolute;
					left: 0;
					top: 0;
				}
			}
		}
	}
</style>

<script>
	import BtnIcon from '$icons/matdes/Eye.svelte';

	export let btnDisabled = true;

	const iconProps = {
		width: '24px',
		height: '24px',
		size: '24px',
		viewBox: '0 0 24 24'
	};
</script>

<button on:click disabled={btnDisabled}>
	<span class="icon">
		<BtnIcon {...iconProps} color={'var(--c-gray-lighter)'} />
	</span>
	<span class="text">
		<slot />
	</span>
</button>

<style lang="scss">
	button {
		display: inline-flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: center;
		gap: 0.35rem;
		background: var(--c-p-light);
		border-color: transparent;
		border-style: solid;
		border-width: 2px;
		border-radius: 5px;
		box-sizing: border-box;
		cursor: pointer;
		font-size: 15px;
		letter-spacing: 1.05;
		transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
			border-color 0.3s ease-in-out;
		@include respond('sm') {
			min-height: 44px;
			min-width: 44px;
			justify-content: center;
		}

		.text {
			color: var(--c-gray-darkest);
			display: inline-flex;
			align-items: center;
			font-size: 15px;
			letter-spacing: 1.05;
		}

		span.icon {
			display: inline-grid;
		}

		&:hover {
			border-color: var(--c-p-lighter);
		}

		&:disabled {
			background: var(--c-gray-light);
			color: var(--c-gray-darker);
			&:hover {
				border-color: transparent;
				cursor: not-allowed;
			}
		}
	}
</style>

<script>
	import CloseIcon from '$icons/matdes/Close.svelte';
	import { blur } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';
	import { dataError } from '$stores/errors.js';

	const setAutoClose = () => {
		//we only want auto-close on non-fatal errors.
		if ($dataError.visible && !$dataError.fatal) {
			if (!!$dataError.code) console.log(`==code==`, $dataError.code);
			if (!!$dataError.message) console.log(`==message==`, $dataError.message);
			setTimeout(() => {
				dataError.reset();
			}, 5000);
		}
	};
	const iconProps = {
		color: 'var(--c-gray-lighter)',
		width: '20px',
		height: '20px',
		size: '20px',
		viewBox: '0 0 24 24'
	};
</script>

<div class="screenBlur">
	<div
		class="container"
		transition:blur={{ easing: expoInOut, duration: 400 }}
		on:introend={setAutoClose}
		on:outroend={dataError.reset}
	>
		<div class="topBar">
			<h3>
				Uh oh! {#if !!$dataError?.code}A {$dataError.code} error...{/if}
			</h3>
			<button
				aria-label="close error"
				class="closeButton"
				on:click|preventDefault={() => dataError.reset()}
			>
				<CloseIcon {...iconProps} />
			</button>
		</div>
		{#if !!$dataError?.message}
			<p>
				{$dataError.message}
			</p>
		{:else}
			<p>Oof...an error we didn't plan for. Sorry about that.</p>
		{/if}
	</div>
</div>

<style lang="scss">
	.screenBlur {
		position: absolute;
		display: grid;
		place-items: flex-start center;
		background: hsla(135deg, 0%, 100%, 50%);
		height: 100vh;
		overflow: hidden;
		padding: 10%;
		width: 100vw;
		z-index: 6666;
	}
	.container {
		position: relative;
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-between;
		align-items: flex-start;
		background: #333;
		border-radius: 0.4rem;
		color: #fefefe;
		padding: 0.5rem;
		width: 30%;
		min-width: 200px;
	}
	.topBar {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: flex-start;
		padding: 0.25rem;
		width: 100%;
	}
	h3 {
		align-self: center;
		flex: 1 1 100%;
		padding: 0;
		margin: 0;
	}
	button {
		flex: 0 0 36px;
		display: grid;
		place-items: center center;
		background: var(--c-p-light);
		border-color: transparent;
		border-radius: 50%;
		border-style: solid;
		border-width: 2px;
		color: white;
		height: 36px;
		outline: none;
		padding: 0;
		transition: border-color 0.4s ease-in-out;
		&:hover {
			border-color: var(--c-gray-lighter);
		}
	}

	p {
		padding: 0.75rem;
	}
</style>

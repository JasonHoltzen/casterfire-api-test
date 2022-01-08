<script>
	import ClipboardIcon from '$icons/matdes/ClipboardOutline.svelte';
	import Clippy from '$components/ui/basic/_clippy.svelte';

	export let copyText;

	const copy = () => {
		if (!copyText) {
			alert('No text attached to button');
			return;
		}
		const clip = new Clippy({
			target: document.getElementById('clipboard'),
			props: { copyText }
		});
		clip.$destroy();
	};

	let iconProps = {
		color: 'var(--c-gray-lighter)',
		width: '10px',
		height: '10px',
		size: '10px',
		viewBox: '0 0 24 24'
	};
</script>

<button on:click|preventDefault={copy}>
	<ClipboardIcon {...iconProps} />
</button>

<style lang="scss">
	button {
		display: grid;
		place-items: center center;
		background: var(--c-gray-darkest);
		border: none;
		border-radius: 100px;
		height: 16px;
		margin: 0;
		outline: none;
		padding: 0;
		width: 16px;
	}
</style>

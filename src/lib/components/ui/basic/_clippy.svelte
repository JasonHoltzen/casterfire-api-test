<script>
	import { onMount } from 'svelte';

	export let copyText;
	let textarea;

	$: textString = JSON.stringify(copyText, null, 2);

	onMount(() => {
		textarea.select('#clipboard');
		document.execCommand('copy');
	});
</script>

<textarea bind:value={textString} bind:this={textarea} />

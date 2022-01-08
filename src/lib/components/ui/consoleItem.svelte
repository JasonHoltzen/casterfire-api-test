<script>
	import CopyButton from '$components/ui/basic/copyButton.svelte';
	export let json = {};
	export let label = '';
</script>

<details>
	<summary>
		<span class="text">
			{label}
		</span>
		<span class="button">
			<CopyButton bind:copyText={json} />
		</span>
	</summary>
	<pre>
		<code>
    	{JSON.stringify(json,null, 2)}
		</code>
  </pre>
</details>

<style lang="scss">
	details,
	summary {
		font-size: 12px;
	}
	summary {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		width: 100%;
		span {
			display: inline-block;
		}
		.text {
			margin-right: auto;
		}
	}
	pre {
		font-family: 'CaskaydiaCove Nerd Font', monospace !important;
		font-size: 10px;
		white-space: pre-wrap;
	}
</style>

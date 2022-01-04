<script context="module">
	let isCon = '';
	export const load = async ({ session }) => {
		isCon = session.isConnected ? 'yay' : 'nay';
		return {};
	};
</script>

<pre>
  {isCon}
</pre>

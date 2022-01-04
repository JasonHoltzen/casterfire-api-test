<script context="module">
	let data = '';
	export const load = async ({ session }) => {
		data = session;
		return {};
	};
</script>

<script>
	import Authform from '$lib/components/auth/authform.svelte';
</script>

<Authform />

<pre>
  {JSON.stringify(data, null, 2)}
</pre>

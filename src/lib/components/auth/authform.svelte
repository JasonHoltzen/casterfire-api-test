<script>
	import { browser } from '$app/env';
	import Login from '$components/auth/login.svelte';
	import Register from '$components/auth/register.svelte';

	let register = false;

	const reload = () => {
		if (browser) {
			window.location.reload();
		}
	};
</script>

<form action="submit" on:submit|preventDefault>
	{#if register}
		<Register on:success={reload} />
	{:else}
		<Login on:success={reload} />
	{/if}
	<label for="registerCheckbox">
		<input id="registerCheckbox" type="checkbox" bind:checked={register} />
		Register?
	</label>
</form>

<style lang="scss">
	form {
		display: flex;
		flex-flow: column nowrap;
		padding-top: 10px;
	}
</style>

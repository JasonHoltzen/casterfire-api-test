<script>
	import Action1 from '$icons/custom/action1.svelte';
	import Action2 from '$icons/custom/action2.svelte';
	import Action3 from '$icons/custom/action3.svelte';
	import Reaction from '$icons/custom/reaction.svelte';
	import Free from '$icons/custom/free.svelte';
	export let action;
</script>

{#if action === '1'}
	<Action1 />
{:else if action === '2'}
	<Action2 />
{:else if action === '3'}
	<Action3 />
{:else if action === 'reaction'}
	<Reaction />
{:else}
	<Free />
{/if}

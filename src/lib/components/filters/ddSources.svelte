<script>
	import FilterDropdown from '$components/filters/filterDropdown.svelte';
	import FilterCheckbox from '$components/filters/filterCheckButton.svelte';
	import { filters } from '$stores/filters.js';
	import { selectedCharacter } from '$stores/character.js';

	export let labelText = 'No Label Text';
	export let id = 'sources';
</script>

<FilterDropdown {labelText} {id}>
	<ul slot="content">
		<FilterCheckbox bind:toggled={$filters.showRulebook} text="Rulebook" />
		<FilterCheckbox bind:toggled={$filters.showCustom} text="Custom" />
		{#if $selectedCharacter._id}
			<FilterCheckbox
				bind:toggled={$filters.characterSpells.isolate}
				text="Only {$selectedCharacter.characterName}'s"
			/>
		{/if}
	</ul>
</FilterDropdown>

<style lang="scss">
	ul {
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 0.5rem;
	}
</style>

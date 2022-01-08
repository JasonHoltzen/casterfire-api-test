<script>
	import FilterDropdown from '$components/filters/filterDropdown.svelte';
	import ButtonShowAll from '$components/filters/buttonShowAll.svelte';
	import { filters } from '$stores/filters.js';
	import { const_traditions as _traditions } from '$stores/fieldConstants.js';

	export let labelText = 'Traditions';
	export let id = 'traditions';

	const iconProps = {
		width: '24px',
		height: '24px',
		size: '24px',
		viewBox: '0 0 24 24'
	};

	const showAll = () => {
		$filters.traditions = [];
	};
	$: btnDisabled = $filters.traditions.length === 0;
</script>

<FilterDropdown {labelText} {id} ddBgColor="var(--c-s-dark)">
	<fieldset slot="content">
		<legend>Show matching all</legend>
		<div class="buttonContainer">
			<ButtonShowAll on:click={showAll} bind:btnDisabled>Show All</ButtonShowAll>
		</div>
		{#each _traditions as t}
			<div>
				<input id={t} type="checkbox" bind:group={$filters.traditions} value={t} />
				<label style="--tColor: var(--{t})" for={t}>{t}</label>
			</div>
		{/each}
	</fieldset>
</FilterDropdown>

<style lang="scss">
	fieldset {
		display: flex;
		flex-flow: row wrap;
		gap: 0.5rem;
		justify-content: center;
	}
	legend {
		white-space: nowrap;
	}
	div {
		&.buttonContainer {
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			width: 100%;
		}
	}
	label {
		background-color: var(--c-gray-darker);
		border-color: var(--tColor);
		border-radius: 0.3rem;
		border-style: solid;
		border-width: 2px;
		color: var(--tColor);
		box-sizing: border-box;
		padding: 0.1rem 0.2rem;
		transition: text-decoration 0.2s ease-in-out, color 0.2s ease-in-out,
			background-color 0.2s ease-in-out;
		&:hover {
			text-decoration: underline;
		}
		@include respond('md') {
			min-height: 44px;
			min-width: 44px;
			height: 44px;
			padding: 0.2rem 0.4rem;
		}
	}
	input {
		@include visuallyHidden;
		&:checked + label {
			color: var(--c-gray-darker);
			background-color: var(--tColor);
		}
	}
</style>

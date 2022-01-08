<script>
	import ActionsDD from '$lib/components/filters/ddActions.svelte';
	import ComponentsDD from '$lib/components/filters/ddComponents.svelte';
	import FiltersApplied from '$components/filters/filtersApplied.svelte';
	import LevelDD from '$lib/components/filters/ddLevel.svelte';
	import SearchBar from '$components/filters/searchBar.svelte';
	import SourcesDD from '$lib/components/filters/ddSources.svelte';
	import TraitsDD from '$lib/components/filters/ddTraits.svelte';
	import TraditionsDD from '$lib/components/filters/ddTraditions.svelte';
	import { selectedCharacter } from '$stores/character.js';
	import { filters, appliedFilters } from '$stores/filters.js';
	import { slide, fade } from 'svelte/transition';
	import ExpandIcon from '$lib/icons/matdes/ChevronDown.svelte';
	import FilterMenuIcon from '$lib/icons/matdes/FilterMenu.svelte';
	import FilterMenuOutlineIcon from '$lib/icons/matdes/FilterMenuOutline.svelte';

	const iconButtonProps = {
		color: '#fff',
		width: '22px',
		height: '22px',
		size: '22px',
		viewBox: '0 0 24 24'
	};

	let filterBarOpen = true;
	let appliedOpen = true;
	let previousFilterLength = 0;
	const toggleFilterBar = () => (filterBarOpen = !filterBarOpen);
	const toggleApplied = () => {
		appliedOpen = !appliedOpen;
		previousFilterLength = $appliedFilters.length;
	};

	$: filtersActive = $appliedFilters.length > 0;

	// The next two reactive functions handle state management
	// for showing/hiding the applied filters & the button for them.
	$: {
		if (previousFilterLength === 0 && filtersActive) {
			appliedOpen = true;
		}
		previousFilterLength = $appliedFilters.length;
	}

	$: {
		if ($filters.characterSpells.isolate && $selectedCharacter?._id) {
			$filters.characterSpells.spellbook = [...$selectedCharacter.spellbook];
		} else {
			$filters.characterSpells.spellbook = [];
		}
	}
</script>

<menu>
	<div class="filterHeader">
		<button class="iconButton filter" on:click={toggleFilterBar} transition:fade>
			{#if filterBarOpen}
				<span transition:fade>
					<FilterMenuIcon {...iconButtonProps} />
				</span>
			{:else}
				<span transition:fade>
					<FilterMenuOutlineIcon {...iconButtonProps} />
				</span>
			{/if}
		</button>
		<div class="appliedfilters">
			<h2 transition:slide>
				Spell Filters
				<button
					class={appliedOpen ? 'iconButton chevron rotate' : 'iconButton chevron'}
					on:click={toggleApplied}
					disabled={!filtersActive}
				>
					<span>
						<ExpandIcon {...iconButtonProps} />
					</span>
				</button>
			</h2>
			{#if appliedOpen}
				<FiltersApplied />
			{/if}
		</div>
		<div class="search">
			<SearchBar />
		</div>
	</div>
	{#if filterBarOpen}
		<hr transition:slide />
		<div class="filterBox" transition:slide>
			<SourcesDD labelText="Sources" />
			<span class="separator" />
			<ActionsDD labelText="Actions" />
			<ComponentsDD labelText="Components" />
			<LevelDD labelText="Spell Level" />
			<TraitsDD labelText="Traits" />
			<TraditionsDD labelText="Traditions" />
		</div>
	{/if}
</menu>

<style lang="scss">
	menu {
		grid-column: 1 / -1;
		grid-row: 2 / 2;
		border-radius: var(--bdrs);
		display: flex;
		flex: 0 0 auto;
		flex-flow: row wrap;
		align-items: flex-start;
		justify-content: flex-start;
		background: var(--c-gray-darker);
		color: var(--c-gray-lighter);
		padding: 0.5rem 0.75rem;
		z-index: 10;
		@include respond('md') {
			flex-flow: column nowrap;
		}
		@include respond('sm') {
			flex-flow: column nowrap;
			overflow: auto;
		}
	}

	.filterHeader {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: flex-start;
		gap: 1rem;
		width: 100%;

		@include respond('md') {
			flex-flow: row wrap;
			gap: 1rem;
			align-items: flex-start;
			justify-content: space-between;
		}
	}

	.appliedfilters {
		display: flex;
		flex: 1 1 auto;
		align-self: center;
		flex-flow: row nowrap;
		gap: 0.5rem;
		@include respond('md') {
			align-self: flex-start;
			justify-self: center;
			flex-flow: column nowrap;
		}
		@include respond('xs') {
			order: 3;
			flex: 1 1 100%;
			border-top: 2px solid var(--c-gray-light);
			padding-top: 0.5rem;
		}
	}

	h2 {
		flex: 0 0 auto;
		display: inline-flex;
		align-self: center;
		gap: 5px;
		text-align: center;
		margin: 0;
		padding: 0;
		@include respond('md') {
			width: 100%;
			align-self: flex-start;
		}
	}

	.search {
		align-self: top;
		justify-self: flex-end;
		display: flex;
		flex-flow: row nowrap;
		flex: 0 0 auto;
		justify-content: flex-end;
		@include respond('sm') {
			justify-content: flex-start;
			width: auto;
		}
		@include respond('xs') {
			order: 2;
		}
	}

	button.iconButton {
		display: grid;
		place-items: center center;
		border: none;
		border-radius: 100px;
		box-sizing: border-box;
		cursor: pointer;
		font-size: 1rem;
		outline: none;
		position: relative;
		transition: border-color 0.3s ease-in-out;

		&.filter {
			flex: 0 0 36px;
			border-radius: 36px;
			height: 36px;
			width: 36px;
			align-self: center;
			background-color: var(--c-s-light);
			border: 2px solid transparent;
			color: white;

			&:hover {
				border-color: var(--c-s-lighter);
			}

			@include respond('md') {
				align-self: flex-start;
			}
		}

		&.chevron {
			flex: 0 0 26px;
			display: grid;
			place-items: center center;
			align-self: center;
			background: var(--c-gray);
			border: 2px solid var(--c-p);
			opacity: 1;
			height: 26px;
			transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
			width: 26px;

			&:disabled {
				border: 2px solid transparent;
				opacity: 0;
			}

			&.rotate {
				border: 2px solid transparent;
				transform: rotate(-90deg);
			}
		}
		span {
			display: grid;
			place-items: center center;
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
			width: 100%;
		}

		&:only-child {
			align-self: center;
		}
	}

	hr {
		display: block;
		border: 1px solid var(--c-s-light);
		margin: 0.6rem 0;
		width: 100%;
	}
	.filterBox {
		flex: 1 1 auto;
		display: flex;
		flex-flow: row wrap;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 10px;

		@include respond('sm') {
			flex-flow: column nowrap;
			width: 100%;
		}
	}
	.separator {
		display: block;
		border: 1px solid var(--c-gray-light);
		margin: auto 0;
		height: 20px;

		@include respond('sm') {
			margin: 0 auto;
			height: auto;
			width: 90%;
		}
	}
</style>

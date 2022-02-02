<script>
	import FilterDropdown from '$components/filters/filterDropdown.svelte';
	import ButtonShowAll from '$components/filters/buttonShowAll.svelte';
	import SpellAction from '$components/spells/spellAction.svelte';
	import { filters } from '$stores/filters.js';
	import { const_actions as _actions } from '$stores/fieldConstants.js';

	export let labelText = 'No label text';
	export let id = 'actions';

	const showAll = () => {
		$filters.actions = [];
	};
	$: btnDisabled = $filters.actions.length === 0;
</script>

<FilterDropdown {labelText} {id}>
	<fieldset slot="content">
		<legend>Show with any of</legend>
		<ul class="options">
			{#each _actions as act}
				<li class="action">
					<input
						type="checkbox"
						bind:group={$filters.actions}
						id="action{act}"
						name={act}
						value={act}
					/>
					<label for="action{act}" class={act}>
						<SpellAction action={act} />
					</label>
				</li>
			{/each}
			<li class="showAll">
				<ButtonShowAll on:click={showAll} bind:btnDisabled>Show All</ButtonShowAll>
			</li>
		</ul>
	</fieldset>
</FilterDropdown>

<style lang="scss">
	fieldset {
		display: flex;
		flex-flow: column nowrap;
		min-width: 150px;
		@include respond('sm') {
			min-width: 100%;
		}
	}
	ul {
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 0.5rem;
	}

	li {
		&.showAll {
			display: flex;
			justify-content: center;
			width: 100%;
			@include respond('sm') {
				justify-self: right;
				margin-left: auto;
				width: auto;
			}
		}
	}

	.text {
		color: var(--c-gray-darkest);
		display: inline-flex;
		align-items: center;
		font-size: 15px;
		letter-spacing: 1.05;
	}

	input {
		@include visuallyHidden;

		&:checked {
			& + label {
				background-color: var(--c-p);
				fill: var(--c-p);
			}
		}
	}
	label {
		background-color: var(--c-gray);
		display: grid;
		place-items: center center;
		border-color: transparent;
		border-style: solid;
		border-width: 2px;
		border-radius: 0.25rem;
		fill: var(--c-gray);
		padding: 0.25rem;
		transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out,
			fill 0.3s ease-in-out;

		@include respond('sm') {
			min-height: 44px;
			min-width: 44px;
			justify-content: center;
		}

		&:hover {
			border-color: var(--c-p-light);
		}
	}
</style>

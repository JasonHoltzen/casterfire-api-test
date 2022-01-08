<script>
	import FilterDropdown from '$components/filters/filterDropdown.svelte';
	import ButtonShowAll from '$components/filters/buttonShowAll.svelte';
	import { filters } from '$stores/filters.js';
	import { const_traits as _traits } from '$stores/fieldConstants.js';

	export let labelText = 'Traits';
	export let id = 'traits';

	const showAll = () => {
		$filters.traits = [];
	};
	$: btnDisabled = $filters.traits.length === 0;
</script>

<FilterDropdown {labelText} {id} ddBgColor="var(--c-s-dark)">
	<fieldset slot="content">
		<div class="header">
			<legend>Show spells matching all</legend>
			<ButtonShowAll on:click={showAll} bind:btnDisabled>Show All</ButtonShowAll>
		</div>
		<ul class="categories">
			{#each _traits as t}
				<li>
					<h4>{t.category}</h4>
					<ul class="options">
						{#each t.traits.sort() as t}
							<li class="trait">
								<input
									type="checkbox"
									bind:group={$filters.traits}
									id="trait{t}"
									name={t}
									value={t}
								/>
								<label for="trait{t}" class={t}>
									{t}
								</label>
							</li>
						{/each}
					</ul>
				</li>{/each}
		</ul>
	</fieldset>
</FilterDropdown>

<style lang="scss">
	fieldset {
		display: flex;
		flex-flow: column nowrap;
		min-width: 200px;
		max-width: 50vw;
		max-height: 50vh;
		width: 50vw;
		position: relative;

		@include respond('sm') {
			min-width: 100%;
			max-height: fit-content;
		}
	}

	.header {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		background-color: var(--c-gray-darkest);
		padding-bottom: 0.5rem;
		position: sticky;
		top: 0;

		&::before {
			position: absolute;
			content: '';
			background: var(--c-gray-darkest);
			height: 0.7rem;
			width: 100%;
			bottom: 100%;
		}
	}

	ul.categories {
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		gap: 0.5rem;
	}
	h4 {
		display: inline-flex;
		flex-flow: row nowrap;
		font-size: 1rem;
		align-items: center;
		justify-content: flex-start;
		background-color: var(--c-s);
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
		letter-spacing: 0.1rem;
		margin: 0;
		padding: 0;
		padding-left: 0.5rem;
		text-transform: uppercase;
		width: 100%;
	}

	ul.options {
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 0.5rem;
		background-color: var(--c-s-lighter);
		border-bottom-left-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
		border-color: var(--c-s);
		border-style: solid;
		border-width: 2px;
		padding: 0.5rem;

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
			padding: 0rem 0.1rem;
			fill: var(--c-gray);
			font-size: 0.9rem;
			transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out,
				fill 0.3s ease-in-out;

			@include respond('sm') {
				min-height: 44px;
				padding: 0 0.3rem;
				min-width: 44px;
				justify-content: center;
			}

			&:hover {
				border-color: var(--c-p-light);
			}
		}
	}
</style>

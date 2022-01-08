<script>
	import FilterDropdown from '$components/filters/filterDropdown.svelte';
	import Incrementer from '$components/ui/basic/incrementer.svelte';
	import { filters } from '$stores/filters.js';
	import LTE from '$icons/matdes/LessThanOrEqual.svelte';
	import GTE from '$icons/matdes/GreaterThanOrEqual.svelte';
	import EQ from '$icons/matdes/Equal.svelte';
	import Cancel from '$icons/matdes/Cancel.svelte';

	export let labelText = 'No Label Text';
	export let id = 'level';

	const iconButtonProps = {
		width: '24px',
		height: '24px',
		size: '24px',
		viewBox: '0 0 24 24'
	};

	const levelOptions = [
		{ value: '<=', icon: LTE },
		{ value: '=', icon: EQ },
		{ value: '>=', icon: GTE }
	];
</script>

<FilterDropdown {labelText} {id}>
	<svelte:fragment slot="content">
		<ul>
			<li>
				<fieldset>
					<legend>Spell level is</legend>
					<input
						type="radio"
						name="notFiltered"
						id="notFiltered"
						bind:group={$filters.level.equality}
						checked={!$filters.level.equality}
						value=""
					/>
					<label for="notFiltered" class="cancel">
						<span class="icon">
							<svelte:component this={Cancel} {...iconButtonProps} color="var(--c-gray-light)" />
						</span>
					</label>

					{#each levelOptions as _opt}
						<input
							type="radio"
							bind:group={$filters.level.equality}
							value={_opt.value}
							id={_opt.value}
							name={_opt.value}
							checked={$filters.level.equality === _opt.value}
						/>
						<label for={_opt.value}>
							<span class="icon">
								<svelte:component
									this={_opt.icon}
									{...iconButtonProps}
									color="var(--c-gray-lighter)"
								/>
							</span>
						</label>
					{/each}
				</fieldset>
			</li>
			<li>
				<label class="hidden" for="levelNumber"> Level number: </label>
				<Incrementer
					id="levelNumber"
					name="levelNumber"
					min="1"
					max="10"
					placeholder="level"
					bind:number={$filters.level.number}
					disabled={!$filters.level.equality}
				/>
			</li>
		</ul>
	</svelte:fragment>
</FilterDropdown>

<style lang="scss">
	ul {
		display: flex;
		flex-flow: column nowrap;
		gap: 10px;

		li {
			width: 100%;
		}
	}
	fieldset {
		display: grid;
		grid-template-columns: repeat(2, minmax(44px, 1fr));
		grid-template-rows: repeat(2, minmax(44px, 1fr));
		gap: 3px;
	}
	legend {
		font-weight: 700;
		padding-bottom: 0.25em;
		white-space: nowrap;
	}

	input[type='radio'] {
		@include visuallyHidden;

		& + label {
			display: grid;
			place-items: center center;
			background-color: var(--c-gray-dark);
			border-color: transparent;
			border-radius: 0.5rem;
			border-style: solid;
			border-width: 2px;
			cursor: pointer;
			transition: border-color 0.3s ease-in-out, background 0.3s ease-in-out;

			&.cancel {
				background: var(--c-gray);
			}

			.icon {
				display: grid;
				place-items: center center;
			}
		}

		&:checked + label {
			background: var(--c-p);
			border-color: var(--c-p-light);

			&.cancel {
				border-color: var(--c-p-lighter);
				background: var(--c-gray-darker);
			}
		}
	}

	.hidden {
		@include visuallyHidden;
	}
</style>

<script>
	import FilterDropdown from '$components/filters/filterDropdown.svelte';
	import { filters } from '$stores/filters.js';
	import BtnIcon from '$icons/matdes/Eye.svelte';
	import { const_components as _comps } from '$stores/fieldConstants.js';

	export let labelText = 'Components';
	export let id = 'Components';

	const iconProps = {
		width: '24px',
		height: '24px',
		size: '24px',
		viewBox: '0 0 24 24'
	};

	const showAll = () => {
		$filters.components = [];
	};

	$: btnDisabled = $filters.components.length === 0;
</script>

<FilterDropdown {labelText} {id} ddBgColor="var(--c-s-dark)">
	<fieldset slot="content">
		<div class="header">
			<legend>Show spells matching all</legend>
			<div class="showAll">
				<button on:click|preventDefault={showAll} disabled={btnDisabled}>
					<span class="icon">
						<BtnIcon {...iconProps} color={'var(--c-gray-lighter)'} />
					</span>
					<span class="text">Show All</span>
				</button>
			</div>
		</div>
		<ul class="categories">
			<li>
				<h4>Cast times</h4>
				<ul class="options">
					{#each _comps.times as t}
						<li class="trait">
							<input
								type="checkbox"
								bind:group={$filters.components}
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
			</li>
			<li>
				<h4>Cast requirements</h4>
				<ul class="options">
					{#each _comps.requirements as r}
						<li class="trait">
							<input
								type="checkbox"
								bind:group={$filters.components}
								id="trait{r.replace(/\s+/g, '')}"
								name={r.replace(/\s+/g, '')}
								value={r.replace(/\s+/g, '')}
							/>
							<label for="trait{r.replace(/\s+/g, '')}" class={r}>
								{r}
							</label>
						</li>
					{/each}
				</ul>
			</li>
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
		width: auto;
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
		max-width: unset;
		margin: 0;
		min-width: 100%;
		padding: 0;
		padding-left: 0.5rem;
		text-transform: uppercase;
		width: 100%;
	}

	ul.options {
		display: flex;
		flex-flow: row nowrap;
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
		display: flex;
		flex-flow: row nowrap;
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
		white-space: nowrap;
		&:hover {
			border-color: var(--c-p-light);
		}

		@include respond('sm') {
			min-height: 44px;
			min-width: 44px;
			justify-content: center;
		}
	}

	.showAll {
		display: flex;
		justify-content: center;
		width: fit-content;
	}
	button {
		display: inline-flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: center;
		gap: 0.35rem;
		background: var(--c-p-light);
		border-color: transparent;
		border-style: solid;
		border-width: 2px;
		border-radius: 5px;
		box-sizing: border-box;
		cursor: pointer;
		font-size: 16px; // font-size: 14px;
		letter-spacing: 1.05;
		transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
			border-color 0.3s ease-in-out;

		@include respond('sm') {
			min-height: 44px;
			min-width: 44px;
			justify-content: center;
		}

		.text {
			color: var(--c-gray-darkest);
			display: inline-flex;
			align-items: center;
			font-size: 15px;
			letter-spacing: 1.05;
		}

		span.icon {
			display: inline-grid;
		}

		&:hover {
			border-color: var(--c-p-lighter);
		}

		&:disabled {
			background: var(--c-gray-light);
			color: var(--c-gray-darker);
			&:hover {
				border-color: transparent;
				cursor: not-allowed;
			}
		}
	}
</style>

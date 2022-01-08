<script>
	import { selectedCharacter } from '$stores/character.js';
	import { filters } from '$stores/filters.js';
	import { expoInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import LTE from '$icons/matdes/LessThanOrEqual.svelte';
	import GTE from '$icons/matdes/GreaterThanOrEqual.svelte';
	import EQ from '$icons/matdes/Equal.svelte';

	export const iconButtonProps = {
		color: '#fff',
		width: '30px',
		height: '30px',
		size: '30px',
		viewBox: '0 0 24 24'
	};

	$: classesChecked = $filters.classes.filter((_class) => _class.checked).length;
	$: if ($filters.classes.filter((_class) => _class.checked).length > 0) {
		$filters.level = '';
	}
	$: if ($selectedCharacter?.spellbook.length > 0) {
		$filters.character = [...$selectedCharacter.spellbook];
	}

	function selectAllClasses() {
		for (const index in $filters.classes) {
			$filters.classes[index].checked = true;
		}
	}
	function unselectAllClasses() {
		for (const index in $filters.classes) {
			$filters.classes[index].checked = false;
			$filters.classes[index].level = '';
		}
	}
	function clearLevels() {
		for (const index in $filters.classes) {
			$filters.classes[index].level = '';
		}
	}

	const switchEquality = () => {
		if ($filters.equality === '<=') {
			$filters.equality = '=';
		} else if ($filters.equality === '=') {
			$filters.equality = '>=';
		} else if ($filters.equality === '>=') {
			$filters.equality = '<=';
		}
	};
</script>

<menu>
	<h2>Filters</h2>
	<div class="checkMenus">
		<div class="dropdown" aria-haspopup="true">
			Lists
			<ul class="dropdown__menu">
				<li>
					<input
						id="checkbox__rulebook"
						type="checkbox"
						class="toggleCheckbox"
						bind:checked={$filters.lists.rulebook}
					/>
					<label for="checkbox__rulebook">Rulebook</label>
				</li>
				<li>
					<input
						id="checkbox__custom"
						type="checkbox"
						class="toggleCheckbox"
						bind:checked={$filters.lists.custom}
					/>
					<label for="checkbox__custom">Custom</label>
				</li>
				<li>
					<input
						id="checkbox__myspellbook"
						type="checkbox"
						class="toggleCheckbox"
						bind:checked={$filters.lists.personal}
					/>
					<label for="checkbox__myspellbook">My Spellbook</label>
				</li>
			</ul>
		</div>
		<div class="dropdown" aria-haspopup="true">
			Class
			<ul
				class="dropdown__menu"
				transition:slide={{
					delay: 0,
					duration: 500,
					easing: expoInOut
				}}
			>
				<li class="dropdown__menu-buttons">
					<button class="button" on:click|preventDefault={selectAllClasses}>All</button>
					<button class="button" on:click|preventDefault={unselectAllClasses}>None</button>
				</li>

				{#each $filters.classes as _class}
					<li>
						<input
							id="{_class.label}Checkbox"
							type="checkbox"
							class="toggleCheckbox"
							bind:checked={_class.checked}
						/>
						<label for="{_class.label}Checkbox">
							{_class.label}
						</label>
					</li>
				{/each}
			</ul>
		</div>
		<div class="dropdown dropdown--levels" aria-haspopup="true">
			{#if classesChecked < 1}
				Level
				<ul class="dropdown__menu">
					<li class="dropdown__menu-buttons">
						<button class="button button--icon" on:click|preventDefault={switchEquality}>
							{#if $filters.equality === '<='}
								<LTE {...iconButtonProps} />
							{:else if $filters.equality === '>='}
								<GTE {...iconButtonProps} />
							{:else}
								<EQ {...iconButtonProps} />
							{/if}
						</button>
					</li>

					<li>
						<label>
							Level:
							<input type="number" bind:value={$filters.level} />
						</label>
					</li>
				</ul>
			{:else}
				Levels
				<ul class="dropdown__menu">
					<li class="dropdown__menu-buttons">
						<button
							aria-label="Level is {$filters.equality}"
							class="button button--icon"
							on:click|preventDefault={switchEquality}
						>
							{#if $filters.equality === '<='}
								<LTE {...iconButtonProps} />
							{:else if $filters.equality === '>='}
								<GTE {...iconButtonProps} />
							{:else}
								<EQ {...iconButtonProps} />
							{/if}
						</button>
						<button class="button" on:click|preventDefault={clearLevels}>Clear All</button>
					</li>

					{#each $filters.classes as _class}
						{#if _class.checked}
							<li>
								<label>
									{_class.label}:
									<input type="number" bind:value={_class.level} />
								</label>
							</li>
						{/if}
					{/each}
				</ul>
			{/if}
		</div>
	</div>
	<div class="searchBar">
		<label class="search">
			Search:
			<input type="text" bind:value={$filters.search} />
		</label>
	</div>
</menu>

<style lang="scss">
	menu {
		grid-column: 1 / -1;
		grid-row: 2 / 2;
		border-radius: var(--bdrs);
		display: flex;
		flex: 1 1 auto;
		flex-flow: row wrap;
		align-items: center;
		justify-content: space-between;
		color: var(--c-gray-lighter);
		background: var(--c-gray-darker);
		padding: 20px;
		z-index: 10;

		h2 {
			padding: 0;
			margin: 0;
			flex: 1 1 auto;

			@include respond('sm') {
				flex: 1 0 100%;
			}
		}

		.checkMenus {
			display: flex;
			flex: 0 1 auto;
			flex-flow: row;
			justify-content: flex-start;

			@include respond('sm') {
				flex: 1 0 100%;
				justify-content: center;
				margin-bottom: 10px;
			}

			& > * {
				margin: 0px 10px;
			}
		}
		.searchBar {
			display: flex;
			flex-flow: row nowrap;
			flex: 1 1 auto;
			justify-content: flex-end;
			@include respond('sm') {
				flex: 1 0 100%;
				justify-content: center;
			}
		}
	}

	.dropdown {
		align-self: center;
		background-image: linear-gradient(75deg, var(--c-s-dark) 50%, var(--c-s) 100%);
		border-radius: 5px;
		color: var(--c-gray-lighter);
		font-weight: 700;
		letter-spacing: 2px;
		position: relative;
		padding: 5px 10px;

		&:hover,
		&:focus {
			box-shadow: 0 0 5px 2px var(--c-p-light);
		}

		&:hover &__menu,
		&:focus &__menu {
			transform: scale(1, 1) translateX(-50%);
		}

		&__menu {
			display: inline-block;
			background: var(--c-gray-dark);
			border-radius: 10px;
			box-shadow: 0 1px 5px 1px var(--c-s-dark);
			color: var(--c-gray-lighter);
			font-weight: normal;
			letter-spacing: normal;
			left: 50%;
			list-style-type: none;
			min-width: 200px;
			padding: 10px;
			position: absolute;
			top: 100%;
			transition: all 0.2s ease-in-out;
			transform: scale(0, 0) translateX(-50%);
			transform-origin: top left;

			li {
				display: flex;
				flex: 1 0 100%;
				flex-flow: row nowrap;
				justify-content: space-between;
				z-index: 5;

				&:not(:last-child) {
					margin-bottom: 5px;
				}
			}

			&-buttons {
				display: flex;
				flex-flow: row nowrap;
				align-items: center;
				justify-content: space-around;
				padding-bottom: 10px;
				border-bottom: 2px solid var(--c-s-light);
			}
		}

		&--levels {
			li {
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
			}
			label {
				display: flex;
				flex-flow: row nowrap;
				align-items: center;
				justify-content: space-between;
				flex: 1 1 100%;
				text-align: right;
			}
			input {
				flex: 1 1 44px;
				background: var(--c-gray-lighter);
				border-radius: 50px;
				color: var(--c-gray-darkest);
				font-size: 14px;
				line-height: 14px;
				min-height: 33px;
				min-width: 44px;
				max-width: 50%;
				margin-left: 10px;
				padding: 0 10px;
			}
		}
	}

	.toggleCheckbox {
		@include visuallyHidden;

		& + label {
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			justify-content: center;
			background-color: var(--c-gray-dark);
			background-image: linear-gradient(45deg, var(--c-p-darker) 50%, var(--c-p-dark) 100%);
			border-radius: 10px;
			color: white;
			font-size: 1rem;
			padding: 5px 10px;
			min-height: 44px;
			min-width: 44px;
		}

		&[type='checkbox']:not(:checked) + label {
			background-color: var(--c-gray-dark);
			background-image: linear-gradient(
				45deg,
				var(--c-gray-darkest) 50%,
				var(--c-gray-darker) 100%
			);
		}

		&[type='checkbox']:checked + label {
			background-color: var(--c-p-dark);
			background-image: linear-gradient(45deg, var(--c-p-dark) 50%, var(--c-p-light) 100%);
		}
	}

	.button {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: center;
		background-color: var(--c-p-dark);
		background-image: linear-gradient(45deg, var(--c-p-dark) 60%, var(--c-p-light) 100%);
		border: none;
		border-radius: 10px;
		color: white;
		font-size: 1rem;
		min-width: 44px;
		min-height: 44px;
		padding: 10px;

		&:only-child {
			align-self: center;
		}

		&--icon {
			padding: 5px;
		}
	}

	.search {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: stretch;
		font-weight: bold;
		letter-spacing: 0.5px;

		input {
			background: var(--c-gray-lighter);
			border-radius: 100px;
			color: var(--c-gray-darkest);
			font-size: 16px;
			margin-left: 10px;
			line-height: 16px;
			min-height: 44px;
			min-width: 44px;
			padding: 10px;
		}
	}
</style>

<script>
	import { modal } from '$stores/ui.js';
	import { user } from '$stores/user.js';
	import { selectedSpell } from '$stores/spells.js';
	import { filteredSpells } from '$stores/filters.js';
	import { spellFormValues } from '$stores/spellForm.js';
	import SpellEditForm from '$components/spells/spellEditModal.svelte';

	const createNewCustomSpell = () => {
		$modal.component = SpellEditForm;
		selectedSpell.reset();
		spellFormValues.newSpell();
		$modal.show = true;
	};

	$: hideMobile = Object.keys($selectedSpell).length > 0;
</script>

<aside class:hideMobile>
	<ul>
		{#if $user?.name}
			<li class="stickyButtonContainer">
				<button class="newSpellButton" on:click|preventDefault={createNewCustomSpell}>
					New Custom Spell
				</button>
			</li>
			<li aria-hidden />
		{/if}
		{#if !$filteredSpells}
			<li>
				<label for="noop">
					<input type="radio" name="noop" value="null" />
					<div>
						<span>No spell data</span>
						<span>...waiting</span>
					</div>
				</label>
			</li>
		{:else}
			{#each $filteredSpells as _spell}
				<li>
					<label for={_spell.id}>
						<input type="radio" name={_spell.id} value={_spell} bind:group={$selectedSpell} />
						<div>
							<span>
								{_spell.name}
								{#if _spell.custom}
									<sup>custom</sup>
								{/if}
							</span>
							<span class="typeInfo">
								{_spell.type ? _spell.type.charAt(0).toLowerCase() : ''}-{_spell.level}
							</span>
						</div>
					</label>
				</li>
			{/each}
		{/if}
	</ul>
</aside>

<style lang="scss">
	aside {
		display: flex;
		flex-flow: column nowrap;
		align-items: flex-start;
		justify-content: flex-start;
		grid-column: 1 / 1;
		grid-row: 3 / -1;
		background: var(--c-gray-dark);
		border-radius: var(--bdrs);
		height: auto;
		max-height: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		padding: 10px;
		z-index: 0;
		&::-webkit-scrollbar {
			padding-top: 1rem;
			padding-bottom: 1rem;
			scroll-behavior: smooth !important;
			width: 1rem;
		}
		&::-webkit-scrollbar-thumb {
			background-color: var(--c-p-light);
			border-radius: 0.5rem !important;
			box-sizing: border-box;
			border: 3px solid transparent;
			background-clip: padding-box;
			min-height: 44px;
		}
		&::-webkit-scrollbar-track {
			background-color: var(--c-gray-dark) !important;
			box-shadow: inset 0 0 0.4rem var(--c-gray-lighter) !important;
			border-radius: 0.5rem;
		}
		@include respond('md') {
			overflow: unset;
			&.hideMobile {
				@include visuallyHidden;
			}
		}
	}

	ul {
		width: 100%;
		position: relative;
	}

	li {
		font-family: inherit;
		font-size: inherit;
		margin-bottom: 5px;

		sup {
			color: var(--c-p-lighter);
			vertical-align: super;
			font-size: small;
			text-transform: lowercase;
		}
	}

	li.stickyButtonContainer {
		position: sticky;
		top: 0;
		font-weight: 900;
		z-index: 3;
	}

	button.newSpellButton {
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		align-items: center;
		background: var(--c-s-lighter);
		border-color: transparent;
		border-radius: var(--bdrs);
		border-style: solid;
		border-width: 2px;
		color: var(--c-s-dark);
		cursor: pointer;
		font-size: inherit;
		font-family: inherit;
		padding: 10px 5px;
		min-height: 40px;
		width: 100%;
		&:hover {
			border-color: var(--c-gray-lighter);
		}
	}

	label {
		cursor: pointer;
		width: 100%;
		padding-bottom: 3px;
		position: relative;

		input[type='radio'] {
			@include visuallyHidden;

			&:checked + div {
				background: var(--c-s-dark);
			}
		}

		div {
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			background: rgba(#000, 0.1);
			border-color: transparent;
			border-radius: var(--bdrs);
			border-style: solid;
			border-width: 2px;
			box-sizing: border-box;
			color: var(--c-gray-lighter);
			padding: 10px 5px;
			min-height: 40px;
			transition: border-color 0.3s ease-in-out;
			&:hover {
				border-color: var(--c-s-lighter);
			}

			span:last-of-type {
				flex: 0 0 35px;
				text-align: right;
				margin-right: 5px;
			}
		}
	}
</style>

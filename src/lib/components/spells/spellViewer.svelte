<script>
	import { user } from '$stores/user.js';
	import { selectedSpell } from '$stores/spells.js';
	import { selectedCharacter } from '$stores/character.js';
	import { characters } from '$stores/character.js';
	import SpellDetails from '$components/spells/spellDetails.svelte';
	import ArrowLeftThick from '$icons/matdes/ArrowLeftThick.svelte';
	import AddSpellIcon from '$icons/matdes/BookmarkPlusOutline.svelte';
	import RemoveSpellIcon from '$icons/matdes/BookmarkMinusOutline.svelte';
	import CloseIcon from '$icons/matdes/Close.svelte';
	import { fade } from 'svelte/transition';

	const arrowIconProps = {
		color: 'var(--c-s-lighter)',
		width: '24px',
		height: '24px',
		size: '24px',
		viewBox: '0 0 24 24'
	};
	const addRemoveIconProps = {
		color: 'var(--c-gray-lighter)',
		width: '20px',
		height: '20px',
		size: '20px',
		viewBox: '0 0 24 24'
	};

	const unselectSpell = () => {
		$selectedSpell = {};
	};

	const updateCharacterList = (newCharacter) => {
		return $characters.map((_char) => {
			if (_char._id === newCharacter._id) {
				_char.spellbook = [..._char.spellbook];
			}
			return _char;
		});
	};

	const addSpellToBook = async () => {
		try {
			const res = await fetch('/api/characters/selected/addSpell', {
				method: 'POST',
				body: JSON.stringify({
					spellId: $selectedSpell._id,
					character: $selectedCharacter._id
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			if (res.ok) {
				const updatedCharacter = await res.json();
				$selectedCharacter.spellbook = [...$selectedCharacter.spellbook, $selectedSpell._id];
				updateCharacterList(updatedCharacter);
			}
		} catch (error) {
			console.log(error);
		}
	};
	const removeSpellFromBook = async () => {
		try {
			const res = await fetch('/api/characters/selected/removeSpell', {
				method: 'POST',
				body: JSON.stringify({
					spellId: $selectedSpell._id,
					character: $selectedCharacter._id
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			if (res.ok) {
				const updatedCharacter = await res.json();
				$selectedCharacter.spellbook = $selectedCharacter.spellbook.filter(
					(s) => s !== $selectedSpell._id
				);
				updateCharacterList(await updatedCharacter);
				selectedSpell.reset();
			}
		} catch (error) {
			console.log(error);
		}
	};
</script>

{#if Object.keys($selectedSpell).length > 0}
	<main transition:fade>
		<div class="controls">
			{#if $selectedCharacter?.characterName && $selectedCharacter?._id}
				{#if $selectedCharacter.spellbook.includes($selectedSpell._id)}
					<button
						aria-label="Remove spell from character"
						class="spellAddDelButton"
						on:click|preventDefault={removeSpellFromBook}
						in:fade={{ delay: 1 }}
					>
						<RemoveSpellIcon {...addRemoveIconProps} />
						<span class="text"> Remove from spellbook </span>
					</button>
				{:else}
					<button
						aria-label="Add spell to character"
						class="spellAddDelButton"
						on:click|preventDefault={addSpellToBook}
					>
						<AddSpellIcon {...addRemoveIconProps} />
						<span class="text"> Add to spellbook </span>
					</button>
				{/if}
			{:else}
				<span in:fade={{ delay: 1 }}>
					{#if !$user?.name}Log in to save spells and create characters{/if}
				</span>
				<span in:fade={{ delay: 1 }}>
					{#if !!$user?.name && !$selectedCharacter._id}
						Select a character to add spells to a spellbook.
					{/if}
				</span>
			{/if}
			<button aria-label="close spell" class="closeButton" on:click={unselectSpell}>
				<CloseIcon {...addRemoveIconProps} />
			</button>
		</div>
		<SpellDetails {...$selectedSpell} />
	</main>
{:else}
	<main class="nospell">
		<div class="message">
			<p class="xl">Well, that's bold, trying to cast a spell before you pick one.</p>
			<p class="xl">Try over there</p>
			<ArrowLeftThick {...arrowIconProps} />
		</div>
	</main>
{/if}

<style lang="scss">
	main {
		grid-column: 2 / 2;
		grid-row: 3 / -1;
		background: var(--c-gray-dark);
		border-radius: 10px;
		color: var(--c-gray-lighter);
		padding: 10px;
		position: relative;
		overflow-x: hidden;
		overflow-y: auto;
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
		&.nospell {
			background: rgba(244, 244, 244, 0.1);
			display: grid;
			place-items: center;
		}
		@include respond('sm') {
			grid-column: 1 / -1;
			grid-row: 3 / -1;
			overflow: auto;
			height: fit-content;
			&.nospell {
				@include visuallyHidden;
			}
		}
	}
	.controls {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-between;
		position: relative;
		background: var(--c-s-lighter);
		color: var(--c-gray-darkest);
		border-radius: 5px;
		padding: 10px;
		margin-bottom: 10px;
	}
	.message {
		color: var(--c-gray-lighter);
		font-size: 20px;
		max-width: 50%;
		text-align: center;
		width: 300px;
		@include respond('sm') {
			@include visuallyHidden;
		}
	}
	button.spellAddDelButton {
		display: flex;
		justify-content: center;
		background: var(--c-p-dark);
		background-image: linear-gradient(45deg, var(--c-s) 25%, var(--c-s-dark) 75%);
		color: white;
		border: none;
		border-radius: 100px;
		box-sizing: content-box;
		font-size: 16px;
		padding: 7px 12px;
		text-align: center;
		text-transform: uppercase;
		transition: all 0.2s ease-in-out;
		&:hover {
			transform: translateY(-2px);
			box-shadow: 0px 5px 3px var(--c-s-light);
		}
		.text {
			padding: 2px 0px 0px 5px;
		}
	}
	.closeButton {
		background: var(--c-s-light);
		border: 2px solid var(--c-gray-dark);
		border-radius: 50%;
		color: white;
		display: grid;
		place-items: center;
		height: 36px;
		margin-left: auto;
		outline: none;
		padding: 0;
		transition: all 0.2s ease-in-out;
		width: 36px;
		&:hover {
			transform: translateY(-2px);
			box-shadow: 0px 5px 2px var(--c-gray-lighter);
		}
	}
</style>

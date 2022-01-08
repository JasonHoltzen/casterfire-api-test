<script>
	import { modal } from '$stores/ui.js';
	import {
		characterFormValues,
		dropdownValues,
		characterFormErrors
	} from '$stores/characterForm.js';
	import Confirmation from '$components/ui/confirmation.svelte';
	import { characters, selectedCharacter } from '$stores/character.js';
	import { slide } from 'svelte/transition';
	import LevelUp from '$icons/matdes/AccountPlus.svelte';
	import LevelDown from '$icons/matdes/AccountMinus.svelte';
	import CharacterDeleteIcon from '$icons/matdes/DeleteForeverOutline.svelte';
	import CloseBtn from '$icons/matdes/Close.svelte';
	import SaveBtn from '$icons/matdes/ContentSave.svelte';
	import { dataError } from '$stores/errors';

	let blockClose = false;

	// Icon Props
	const levelIconProps = {
		color: 'var(--c-p)',
		width: '20px',
		height: '20px',
		size: '20px',
		viewBox: '0 0 20 20'
	};
	const closeIconProps = {
		color: 'var(--c-s-lighter)',
		width: '20px',
		height: '20px',
		size: '20px',
		viewBox: '0 0 24 24'
	};
	const saveIconProps = {
		color: 'var(--c-gray-lighter)',
		width: '20px',
		height: '20px',
		size: '20px',
		viewBox: '0 0 24 24'
	};
	const delIconProps = {
		color: 'var(--c-gray-lighter)',
		width: '28px',
		height: '28px',
		size: '28px',
		viewBox: '0 0 24 24'
	};

	const hideModal = () => {
		$modal.show = false;
		characterFormValues.reset();
	};

	$: hasErrors = !!$characterFormErrors && $characterFormErrors.length > 0;

	let showConfirmation = false;
	let isConfirmed;

	let confirmationProps = {
		header: 'Deleting a character cannot be undone!',
		message: 'This will delete the character and any spellbook information.  Are you sure?'
	};

	const handleConfirmation = async () => {
		if (isConfirmed) {
			await fetch('/api/characters/', {
				method: 'DELETE',
				body: JSON.stringify({
					id: $selectedCharacter._id
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then((r) => r.json())
				.then(characters.deleteCharacter($selectedCharacter._id))
				.then(() => {
					console.log('form reset and hideModal() both commented out');
					// selectedCharacter.reset();
					// hideModal();
				})
				.catch((err) => {
					console.log(err);
					dataError.showFatal(err);
				});
		}
	};

	const deleteCharacter = () => {
		//shows the delete confirmation window
		//delete confirmation window contains
		//dispatcher, which calls
		// handleConfirmation(), above
		showConfirmation = true;
	};

	const handleSubmit = () => {
		let newCharacter;

		if (!hasErrors) {
			success = fetch('/api/characters', {
				method: 'POST',
				body: JSON.stringify({ character: { ...$characterFormValues } }),
				headers: { 'content-type': 'application/json' }
			})
				.then((res) => res.json())
				.then((r) => {
					newCharacter = r.character;
					let isFound = false;

					$characters = $characters.map((c) => {
						if (c._id === newCharacter._id) {
							isFound = true;
							return { ...newCharacter };
						} else {
							return c;
						}
					});

					if (!isFound) {
						$characters = [...$characters, newCharacter];
						$selectedCharacter = newCharacter;
					}
				})
				.finally(() => {
					hideModal();
				});
		}
	};
</script>

<!-- ============================== -->
<!-- =========== HTML ============= -->
<!-- ============================== -->
<div class="modalContainer" transition:slide={{ duration: 300 }}>
	{#if showConfirmation}
		<Confirmation
			bind:isConfirmed
			bind:showConfirmation
			{...confirmationProps}
			on:submit={handleConfirmation}
		/>
	{/if}
	<button
		class="closeButton"
		name="closeModalButton"
		disabled={blockClose}
		on:click|preventDefault={hideModal}
	>
		<CloseBtn {...closeIconProps} />
	</button>
	<div class="titleBlock">
		<h2>Character Edit/Create</h2>
	</div>
	{#if hasErrors}
		<ul class="errors">
			{#each $characterFormErrors as error}
				<li>
					<small>{error}</small>
				</li>
			{/each}
		</ul>
	{/if}
	<form on:submit={handleSubmit}>
		<label for="name">Name:</label>
		<input id="name" name="name" bind:value={$characterFormValues.characterName} />

		<label for="characterClass">Class:</label>
		<select
			id="characterClass"
			name="characterClass"
			bind:value={$characterFormValues.characterClass}
		>
			<option value="" disabled>Choose a class</option>
			{#each $dropdownValues.classes as _class}
				<option value={_class}>{_class}</option>
			{/each}
		</select>

		<label for="focus">Focus: </label>
		<select
			id="focus"
			name="focus"
			bind:value={$characterFormValues.focus}
			disabled={$dropdownValues.focuses.length < 1}
		>
			<option value="" selected={!$characterFormValues?.focus} disabled>
				Choose a {!!$characterFormValues?.characterClass ? 'focus' : 'class first'}
			</option>
			{#if $dropdownValues.focuses.length > 0}
				{#each $dropdownValues.focuses as _focus}
					<option value={_focus}>{_focus}</option>
				{/each}
			{/if}
		</select>

		<label for="level">Level:</label>
		<div class="levelIncrementer">
			<input id="level" name="level" bind:value={$characterFormValues.level} />
			<div class="buttonPill">
				<button
					class="level levelDown"
					on:click|preventDefault={() => $characterFormValues.level--}
				>
					<LevelDown {...levelIconProps} />
				</button>
				<button class="level levelUp" on:click|preventDefault={() => $characterFormValues.level++}>
					<LevelUp {...levelIconProps} />
				</button>
			</div>
		</div>

		<label for="ancestry">Ancestry:</label>
		<select id="focus" bind:value={$characterFormValues.ancestry}>
			<option value="" selected disabled>Choose an ancestry</option>
			{#each $dropdownValues.ancestries as _ancestry}
				<option>{_ancestry}</option>
			{/each}
		</select>

		<label for="archetype">Archetype:</label>
		<select id="archetype" name="archetype" bind:value={$characterFormValues.archetype}>
			<option value="" selected>Choose an archetype</option>
			{#each $dropdownValues.archetypes as _archetype}
				<option>{_archetype}</option>
			{/each}
		</select>

		<label for="alignment">Alignment:</label>
		<select id="alignment" name="alignment" bind:value={$characterFormValues.alignment}>
			<option value="" selected disabled>Choose an alignment</option>
			{#each $dropdownValues.alignments as _alignment}
				<option>{_alignment}</option>
			{/each}
		</select>

		<label for="active">Alive? </label>
		<input type="checkbox" id="active" name="active" bind:checked={$characterFormValues.active} />

		<div class="bottomButtons">
			{#if !!$selectedCharacter?._id}
				<button on:click|preventDefault={deleteCharacter} class="delete">
					<CharacterDeleteIcon {...delIconProps} />
				</button>
			{/if}
		</div>
		<div class="bottomButtons">
			<button class="button saveButton" disabled={hasErrors} type="submit">
				<SaveBtn {...saveIconProps} />
				<span class="text"> Save </span>
			</button>
			<button class="cancelButton" on:click|preventDefault={hideModal}> Cancel </button>
		</div>
	</form>
</div>

<!-- ============================= -->
<!-- ========== STYLES =========== -->

<!-- ============================= -->
<style lang="scss">
	.modalContainer {
		display: flex;
		flex: 1 1 80%;
		flex-flow: column nowrap;
		border-radius: 10px;
		background: var(--c-gray-dark);
		color: var(--c-gray-lighter);
		box-shadow: 0 3px 5px 2px var(--c-s);
		min-width: 350px;
		max-width: 800px;
		padding: 15px;
		position: relative;
	}

	.titleBlock {
		position: relative;
		padding-bottom: 10px;
		h2 {
			margin: 0;
		}
	}

	ul.errors {
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		align-items: flex-start;
		color: var(--c-p-light);
		width: 100%;

		li {
			min-width: 100%;
			small {
				width: 100%;
			}
		}
	}

	form {
		display: grid;
		grid-template-columns: minmax(100px, 1fr) minmax(150px, 3fr);
		gap: 15px;
		max-width: 400px;

		label {
			align-self: center;
			text-align: right;
		}

		input:not([type]),
		select {
			background: var(--c-gray-lighter);
			border-radius: 100px;
			color: var(--c-gray-darkest);
			font-size: 16px;
			margin-left: 10px;
			line-height: 16px;
			min-height: 44px;
			min-width: 44px;
			padding: 10px;
			padding-right: 20px;
		}
	}

	.closeButton {
		background: var(--c-gray-darkest);
		border: 2px solid var(--c-gray-light);
		border-radius: 50%;
		top: 10px;
		right: 10px;
		color: white;
		display: grid;
		place-items: center;
		height: 44px;
		outline: none;
		position: absolute;
		transition: all 0.2s ease-in-out;
		width: 44px;
		z-index: 9999;

		&:hover {
			transform: translateY(-3px);
			box-shadow: 0px 5px 3px var(--c-s-light);
		}
	}

	.levelIncrementer {
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;

		input {
			margin-right: 10px;
			text-align: center;
			width: 66px;
		}
	}
	.buttonPill {
		$height: 44px;
		$gap: 1px;
		background-color: var(--c-gray-dark);
		border-radius: calc(#{$height}/ 2);
		box-shadow: 0px 0px 0px 2px var(--c-p);
		box-sizing: border-box;
		height: $height;
		width: calc(#{$height} * 2);
		position: relative;
		.level {
			position: absolute;
			background-color: var(--c-gray);
			border: 0;
			border-radius: 0%;
			box-sizing: border-box;
			height: calc(#{$height} - #{$gap});
			outline: none;
			top: $gap;
			width: calc(#{$height} - #{$gap});
			&Up {
				border-radius: 0% calc(#{$height}/ 2) calc(#{$height}/ 2) 0%;
				right: $gap;
			}
			&Down {
				border-radius: calc(#{$height}/ 2) 0% 0% calc(#{$height}/ 2);
				left: $gap;
			}
		}
	}

	.bottomButtons {
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-end;
		align-items: flex-end;
		width: 100%;

		button {
			display: flex;
			justify-content: center;
			border: none;
			border-radius: 100px;
			box-sizing: content-box;
			font-size: 16px;
			letter-spacing: 0.1em;
			margin-left: 15px;
			outline: none;
			padding: 7px 12px;
			text-align: center;
			text-transform: uppercase;
			transition: all 0.2s ease-in-out;
			&:hover {
				transform: translateY(-3px);
				box-shadow: 0px 5px 3px var(--c-gray-light);
			}

			&.delete {
				display: grid;
				place-items: center center;
				align-self: start;
				background: var(--c-danger);
				color: var(--c-gray-lighter);
				height: 44px;
				width: 44px;
				padding: 0;
				margin: 0 auto 0 0;
			}
		}
	}

	button[disabled] {
		background: var(--c-gray);
		background-image: unset;
		color: var(--c-gray-light);
		&:hover {
			transform: unset;
			box-shadow: unset;
		}
	}

	.saveButton {
		background: var(--c-p-dark);
		background-image: linear-gradient(45deg, var(--c-p-dark) 25%, var(--c-p-light) 75%);
		color: white;

		.text {
			padding: 2px 0px 0px 5px;
		}
	}

	.cancelButton {
		background: var(--c-p-dark);
		background-image: linear-gradient(45deg, var(--c-gray-lighter) 30%, var(--c-gray-light) 90%);
		color: var(--c-gray-darkest);
	}
</style>

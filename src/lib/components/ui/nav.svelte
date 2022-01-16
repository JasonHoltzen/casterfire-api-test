<script>
	import { tick } from 'svelte';
	import MenuButtonIcon from '$icons/matdes/Menu.svelte';
	import EditButtonIcon from '$icons/matdes/AccountEditOutline.svelte';
	import ClearButtonIcon from '$icons/matdes/AccountOffOutline.svelte';
	import CloseButtonIcon from '$icons/matdes/Close.svelte';
	import { outClick } from '$utils/customActions';
	import { modal } from '$stores/ui.js';
	import { characters, selectedCharacter } from '$stores/character.js';
	import { characterFormValues } from '$stores/characterForm.js';
	import { user } from '$stores/user.js';
	import { expoInOut } from 'svelte/easing';
	import { slide, fade } from 'svelte/transition';
	import AuthForm from '$components/auth/authform.svelte';
	import LogoutButton from '$components/auth/logoutButton.svelte';
	import CharacterEditForm from '$components/characters/characterEditModal.svelte';

	//@ Menu open & close
	let isOpen = true;
	// const toggleOpen = () => (isOpen = !isOpen);
	const toggleOpen = () => (isOpen = true);

	const showCharacterForm = async () => {
		$modal.component = CharacterEditForm;
		if (!!$selectedCharacter?._id) {
			$characterFormValues = $selectedCharacter;
		}
		await tick();
		$modal.show = true;
	};

	//@ Props for the hamburger icon
	let menuIconProps = {
		color: 'var(--c-gray-lighter)',
		width: '30px',
		height: '30px',
		size: '30px',
		viewBox: '0 0 24 24'
	};

	//@ Props for the New/Save and Clear icons
	let characterIconProps = {
		color: 'var(--c-gray-lighter)',
		width: '20px',
		height: '20px',
		size: '20px',
		viewBox: '0 0 24 24'
	};

	const clearSelected = () => {
		selectedCharacter.reset();
		characterFormValues.reset();
	};
</script>

<nav class="navMenu" use:outClick on:clickout={() => (isOpen = false)}>
	<button
		on:click|preventDefault={toggleOpen}
		class="menuButton"
		aria-label="Show site menu"
		aria-haspopup="true"
	>
		{#if isOpen}
			<span transition:fade>
				<CloseButtonIcon {...menuIconProps} />
			</span>
		{:else}
			<span transition:fade>
				<MenuButtonIcon {...menuIconProps} />
			</span>
		{/if}
	</button>

	{#if isOpen}
		<div
			class="menuOptions"
			transition:slide={{
				delay: 0,
				duration: 300,
				easing: expoInOut
			}}
		>
			{#if $user?.name}
				<h3>{$user.name}'s Characters</h3>
			{/if}
			<ul class="navPoints">
				{#if $user?.name}
					<li class="buttonRow buttonRow__top">
						<button class="editButton" on:click|preventDefault={() => showCharacterForm()}>
							<EditButtonIcon {...characterIconProps} />
							<span class="text">
								{#if !!$selectedCharacter._id}
									Edit Character
								{:else}
									New Character
								{/if}
							</span>
						</button>
						{#if !!$selectedCharacter._id}
							<button
								transition:slide={{ duration: 300 }}
								class="clearButton"
								on:click|preventDefault={clearSelected}
							>
								<ClearButtonIcon {...characterIconProps} />
								<span class="text"> Clear Selected </span>
							</button>
						{/if}
					</li>
					<li>
						<ul class="characterList">
							{#if $characters.length > 0}
								{#each $characters as _char}
									<li class="characterList__item">
										<label>
											<input type="radio" value={_char} bind:group={$selectedCharacter} />
											<span class="characterName">
												<span class="text">
													{_char.characterName} ({_char.level})
												</span>
											</span>
										</label>
									</li>
								{/each}
							{:else}
								<li class="characterList__item">No characters!</li>
							{/if}
						</ul>
					</li>
					<li>
						<div class="buttonRow buttonRow-bottom">
							<a sveltekit:prefetch href="all-users" class="userReport" target="_blank">
								User Report
							</a>
							<LogoutButton />
						</div>
					</li>
				{:else}
					<li>
						<AuthForm />
					</li>
				{/if}
			</ul>
		</div>
	{/if}
</nav>

<style lang="scss">
	button {
		cursor: pointer;
	}
	h3 {
		margin: 0.5rem 0rem 1rem auto;
		text-align: left;
		color: var(--c-p-light);
		text-transform: uppercase;
		width: clamp(100px, 200px, 80%);
	}
	.navMenu {
		position: relative;
		flex: 0 0 auto;
	}
	.menuButton {
		display: flex;
		position: relative;
		background: var(--c-p-dark);
		background-image: linear-gradient(45deg, var(--c-p-dark) 25%, var(--c-p-light) 75%);
		border-radius: 50%;
		box-sizing: border-box;
		border: none;
		transition: all 0.2s ease-in-out;
		height: 40px;
		width: 40px;
		z-index: 100;
		&:hover {
			transform: translateY(-3px);
			box-shadow: 0px 5px 3px var(--c-s-light);
		}

		@include respond('md') {
			height: 44px;
			width: 44px;
		}

		span {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	.menuOptions {
		position: absolute;
		background: var(--c-gray-dark);
		border: 2px solid var(--c-gray-darkest);
		border-radius: 10px;
		border-top-left-radius: 22px;
		box-shadow: 2px 2px 5px var(--c-s-dark);
		color: var(--c-gray-lighter);
		list-style-type: none;
		min-width: 220px;
		top: 0;
		padding: 0rem 10px 10px 10px;
		width: 20vw;
		max-width: 300px;
		z-index: -1;
	}

	.buttonRow {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		width: 100%;

		&.buttonRow__top {
			flex-flow: column nowrap;

			button {
				margin-bottom: 8px;
			}
		}

		button {
			display: flex;
			background: var(--c-p-dark);
			background-image: linear-gradient(45deg, var(--c-p-dark) 25%, var(--c-p-light) 75%);
			border: none;
			border-radius: 10px;
			box-sizing: content-box;
			color: white;
			cursor: pointer;
			height: 34px;
			padding: 5px 10px;
			place-items: center center;
			transition: all 0.2s ease-in-out;

			.text {
				font-size: 16px;
				padding-top: 2px;
				padding-left: 5px;
			}
		}
	}

	ul.navPoints {
		display: flex;
		flex-flow: column nowrap;
	}

	.characterList {
		border-top: 2px solid var(--c-s-light);
		border-bottom: 2px solid var(--c-s-light);
		margin: 10px 0px;
		padding: 10px 0px;
		width: 100%;

		.characterName {
			display: block;
			background: var(--c-gray-dark);
			border-radius: 10px;
			height: 44px;
			margin-bottom: 5px;
			padding: 2px;
			text-decoration: underline;
			transition: all 0.2s ease-in-out;
			width: 100%;
			&:hover {
				background: var(--c-gray-darker);
			}

			.text {
				display: flex;
				place-items: center start;
				background: var(--c-gray-dark);
				border-radius: 10px;
				height: 100%;
				padding-left: 5px;
				transition: all 0.2s ease-in-out;
				width: 100%;
				&:hover {
					background: var(--c-gray-darker);
				}
			}
		}

		input {
			@include visuallyHidden;

			&:checked {
				& + .characterName {
					background: var(--c-p-dark);
					background-image: linear-gradient(45deg, var(--c-p-dark) 25%, var(--c-p-light) 75%);

					.text {
						background: var(--c-gray-dark);
					}
				}
			}
		}
	}
	a.userReport {
		font-size: 14px;
		max-width: 35%;
		text-align: center;
		transition: color 0.2s ease-in-out;

		&,
		&:visited {
			color: var(--c-p-light);
		}
		&:hover,
		&:focus {
			color: var(--c-p-lighter);
		}
	}
</style>

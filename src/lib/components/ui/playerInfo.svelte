<script>
	import { selectedCharacter } from '$stores/character.js';
	import { user } from '$stores/user.js';
	import { filters } from '$stores/filters.js';
	import { slide } from 'svelte/transition';
	import UserIcon from '$icons/matdes/Account.svelte';
	import CharacterIcon from '$icons/matdes/NotebookOutline.svelte';
	import CharacterAltIcon from '$icons/matdes/BookOpenVariant.svelte';

	const iconProps = {
		color: 'var(--c-gray-lighter)',
		width: '20px',
		height: '20px',
		size: '20px',
		viewBox: '0 0 24 24'
	};

	$: myBookIsOpen = true;
	$: ({ characterName, level, ancestry, characterClass } = $selectedCharacter);
</script>

{#if $user?.name}
	<div class="playerInfo" transition:slide={{ duration: 200, x: -400 }}>
		<div class="user">
			<span class="icon">
				<UserIcon {...iconProps} />
			</span>
			<span class="text">
				{$user.name}
			</span>
		</div>
		{#if characterName}
			<div class="character" transition:slide={{ duration: 200 }}>
				<span class="icon">
					{#if !$filters.characterSpells.isolate}
						<CharacterIcon {...iconProps} />
					{:else}
						<CharacterAltIcon {...iconProps} />
					{/if}
				</span>
				<span class="text">
					{characterName} ({level})
					{ancestry}
					{characterClass}
				</span>
			</div>
		{/if}
	</div>
{:else}
	<div class="playerInfo" />
{/if}

<!-- 
	TODO: Looks terribad on mobile.
	Will need to update after Vite bug is resolved in svelte/kit package.
	Re-enable include below for fix.
-->
<style lang="scss">
	.playerInfo {
		display: flex;
		flex-flow: column nowrap;
		align-items: flex-end;
		color: white;
		gap: 0.25rem;
		margin-left: auto;

		@include respond('sm') {
			justify-content: space-between;
			width: 100%;
			flex-flow: row wrap;
		}
	}

	span {
		display: inline-flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
	}

	.user,
	.character {
		display: flex;
		flex-flow: row nowrap;
		gap: 10px;

		.icon {
			display: grid;
			place-items: center center;
		}

		.text {
			font-weight: 700;
			text-transform: uppercase;
		}
	}
</style>

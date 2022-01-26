<script>
	import Item from '$components/ui/consoleItem.svelte';
	import { user } from '$stores/user.js';
	import { selectedSpell } from '$stores/spells.js';
	import { filters, appliedFilters } from '$stores/filters.js';
	import { customSpells } from '$stores/customSpells.js';
	import { selectedCharacter } from '$stores/character.js';
	import { filteredSpells } from '$stores/filters.js';
	import { spellFormValues } from '$stores/spellForm.js';
	import { modal } from '$stores/ui.js';
	import { characterFormErrors } from '$stores/characterForm.js';
	import { dataError } from '$stores/errors.js';

	const getUniqueSpellInfo = (arr, fieldName) => {
		return arr.reduce((valueList, obj) => {
			const val = obj[fieldName];
			if (typeof val === 'string' && !valueList.includes(val)) {
				return [...valueList, val];
			}
			if (Array.isArray(val)) {
				val.forEach((v) => {
					if (!valueList.includes(v)) {
						valueList = [...valueList, v];
					}
				});
			}
			return valueList;
		}, []);
	};

	$: un_comp = getUniqueSpellInfo($filteredSpells, 'components');

	let show = false;
</script>

<div
	class="button"
	on:click={() => {
		show = !show;
	}}
>
	&lt;/&gt;
</div>
{#if show}
	<div class="console">
		<Item label="appliedFilters" json={$appliedFilters} />
		<Item label="characterFormErrors" json={$characterFormErrors} />
		<Item label="customSpells" json={$customSpells} />
		<Item label="dataErrors" json={$dataError} />
		<Item label="filteredSpells" json={$filteredSpells} />
		<Item label="filters" json={$filters} />
		<Item label="modal" json={$modal} />
		<Item label="selectedCharacter" json={$selectedCharacter} />
		<Item label="selectedSpell" json={$selectedSpell} />
		<Item label="spellEditValues" json={$spellFormValues} />
		<Item label="uniqueComponents" json={un_comp} />
		<Item label="user" json={$user} />
		<div
			class="button close"
			on:click={() => {
				show = false;
			}}
		>
			x
		</div>
	</div>
{/if}

<style lang="scss">
	.button {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: -22px;
		border: 2px solid #fff;
		background: hsla(270deg, 70%, 40%, 100%);
		border-radius: 50%;
		color: #fff;
		height: 44px;
		padding: 5px;
		right: -22px;
		transition: transform 0.2s ease-in-out;
		width: 44px;
		z-index: 9999;
		&:hover {
			cursor: pointer;
			transform: translate(-16px, -16px);
		}

		&.close {
			position: absolute;
			background: var(--c-p);
			bottom: auto;
			height: 20px;
			padding: 0;
			right: -8px;
			top: -8px;
			transition: transform 0.2s ease-in-out;
			width: 20px;
			z-index: 9999;
			&:hover {
				cursor: pointer;
				transform: translate(-6px, 6px);
			}
		}
	}

	.console {
		color: white;
		background: hsla(270deg, 50%, 50%, 80%);
		border: 2px solid #fff;
		border-radius: 5px;
		bottom: 1%;
		overflow-y: auto;
		overflow-x: clip;
		padding: 5px;
		position: absolute;
		right: 1%;
		max-height: 60%;
		max-width: 50%;
		z-index: 9998;
	}
</style>

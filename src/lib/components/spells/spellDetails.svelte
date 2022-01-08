<script>
	import { marked } from 'marked';
	import SpellAction from '$components/spells/spellAction.svelte';
	import SpellCopyEditIcon from '$icons/matdes/ApplicationImport.svelte';
	import SpellEditExistingIcon from '$icons/matdes/SquareEditOutline.svelte';
	import SpellDeleteIcon from '$icons/matdes/DeleteForeverOutline.svelte';
	import Confirmation from '$components/ui/confirmation.svelte';
	import SpellEditForm from '$components/spells/spellEditModal.svelte';
	import { selectedSpell } from '$stores/spells.js';
	import { customSpells } from '$stores/customSpells.js';
	import { spellFormValues } from '$stores/spellForm.js';
	import { const_components as _comps } from '$stores/fieldConstants.js';
	import { modal } from '$stores/ui.js';
	import { user } from '$stores/user.js';

	export let name = '';
	export let type = '';
	export let level = '';
	export let traits = [];
	export let action = [];
	export let range = '';
	export let area = '';
	export let duration = '';
	export let targets = '';
	export let description = '';
	export let source = '';
	export let savingThrow = '';
	export let components = [];
	export let traditions = [];
	export let custom = false;

	$: md_description = marked(description);

	$: c_times = components.filter((c) => _comps.times.includes(c));
	$: c_reqs = components.filter((c) => _comps.requirements.includes(c));
	$: hasOr = components.includes('or') && c_reqs.length > 1;

	const copyNewSpell = () => {
		spellFormValues.copySpell($selectedSpell);
		$modal.component = SpellEditForm;
		$modal.show = true;
	};

	const editExistingSpell = () => {
		spellFormValues.editSpell($selectedSpell);
		$modal.component = SpellEditForm;
		$modal.show = true;
	};

	let showConfirmation = false;
	let isConfirmed;

	let confirmationProps = {
		header: 'Deleting Custom Spell from User and Characters',
		message:
			'No matter how hard you cry, this cannot be undone.  It will be removed from your account and each character on it.  Are you sure you want to delete the spell?'
	};

	const handleConfirmation = async () => {
		if (isConfirmed) {
			await fetch('/api/spells/custom', {
				method: 'DELETE',
				body: JSON.stringify({
					customSpell: { ...$selectedSpell }
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then((r) => r.json())
				.then(customSpells.deleteSpell({ ...$selectedSpell }))
				.then(selectedSpell.reset())
				.catch((err) => console.log(err));
		}
	};

	const deleteCustomSpell = () => {
		//shows the delete confirmation window
		//delete confirmation window contains
		//dispatcher, which calls
		// handleConfirmation(), above
		showConfirmation = true;
	};
</script>

<!--============-->
<!--|  MARKUP  |-->
<!--============-->

{#if showConfirmation}
	<Confirmation
		bind:isConfirmed
		bind:showConfirmation
		{...confirmationProps}
		on:submit={handleConfirmation}
	/>
{/if}
<div class="headerRow">
	<h2>
		{name}{#if custom}<sup>**</sup>{/if}
	</h2>
	<span class="typeLevel">
		{type}&nbsp;{level}
	</span>
	{#if !!$user.name}
		<div class="buttonGroup">
			{#if custom}
				<button on:click|preventDefault={editExistingSpell} class="edit">
					<SpellEditExistingIcon />
					<span class="text">Edit</span>
				</button>
			{/if}
			<button on:click|preventDefault={copyNewSpell} class="copy">
				<SpellCopyEditIcon />
				<span class="text"> Copy &amp; Edit </span>
			</button>
			{#if custom}
				<button on:click|preventDefault={deleteCustomSpell} class="delete">
					<SpellDeleteIcon />
					<span class="text">Delete spell</span>
				</button>
			{/if}
		</div>
	{/if}
</div>
<hr />
{#if traits}
	<ul class="traits">
		{#if traits}
			{#each traits as _trait}
				<li name={_trait.toLowerCase()} class={_trait.toLowerCase()}>
					{_trait}
				</li>
			{/each}
		{/if}
	</ul>
{/if}
{#if !!traditions && traditions.length > 0}
	<span class="spellProperty">
		<strong>Traditions:&nbsp;</strong>
		<ul class="traditions">
			{#each traditions as _tradition}
				<li name={_tradition.toLowerCase()} class={_tradition.toLowerCase()}>
					{_tradition}
				</li>
			{/each}
		</ul>
	</span>
{/if}

{#if components || action || range || area || duration || targets || savingThrow}
	{#if components || action}
		<span class="spellProperty">
			<strong>Cast:&nbsp;</strong>
			{#if !!action && action.length > 0}
				{#each action as item, index}
					<SpellAction action={item} />
					{#if action.length === 2 && index !== action.length - 1}&nbsp;to{/if}
					&nbsp;
				{/each}
				{#if action.length > 0 && c_times.length > 0} to {/if}
			{/if}
			{#if c_times.length > 0}
				{#each c_times as item}
					{item}
				{/each}
			{/if}
			{#if c_reqs.length > 0}
				(
				{#each c_reqs as item, index}
					{item}{#if index < c_reqs.length - 1},{/if}
					{#if index === c_reqs.length - 2 && hasOr}or&nbsp;{/if}
				{/each}
			{/if})
		</span>
	{/if}
	{#if range || area || duration || targets || savingThrow}
		<ul>
			{#if range}
				<li class="spellProperty">
					<strong>Range:&nbsp;</strong>
					{range}
				</li>
			{/if}
			{#if area}
				<li class="spellProperty">
					<strong>Area:&nbsp;</strong>
					{area}
				</li>
			{/if}
			{#if duration}
				<li class="spellProperty">
					<strong>Duration:&nbsp;</strong>
					{duration}
				</li>
			{/if}
			{#if targets}
				<li class="spellProperty">
					<strong>Targets:&nbsp;</strong>
					{targets}
				</li>
			{/if}
			{#if savingThrow}
				<li class="spellProperty">
					<strong>Saving Throw:&nbsp;</strong>
					{savingThrow}
				</li>
			{/if}
		</ul>
	{/if}
{/if}
<hr />
<p>{@html md_description}</p>
<footer>
	{#if custom}<span class="custom">** denotes a custom spell</span>{/if}
	{#if source}<span class="source">{source}</span>{/if}
</footer>

<!--=============-->
<!--|  STYLING  |-->

<!--=============-->
<style lang="scss">
	strong {
		font-weight: bold;
	}

	hr {
		height: 1px;
		background-color: var(--c-p);
		border: none;
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

	.headerRow {
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		align-items: center;
		gap: 15px;
		margin: 0;
		text-transform: uppercase;

		h2 {
			flex: 0 1 auto;
			margin: 0;
			order: 2;

			sup {
				color: var(--c-p-lighter);
			}
		}

		.typeLevel {
			flex: 1 1 auto;
			order: 2;
			text-transform: uppercase;
			font-weight: 700;
			font-size: 18px;
		}

		.buttonGroup {
			align-self: flex-end;
			display: flex;
			flex: 1 1 auto;
			flex-flow: row wrap;
			justify-content: flex-end;
			justify-self: flex-end;
			gap: 10px;
			order: 2;

			@include respond('md') {
				order: 1;
				justify-content: center;
				gap: 20px;
				flex: 0 0 100%;
			}

			button {
				align-items: center;
				background: var(--c-s-light);
				border: none;
				border-radius: 100px;
				box-sizing: border-box;
				color: var(--c-gray-lighter);
				display: flex;
				font-size: 16px;
				justify-content: center;
				padding: 5px 10px;
				text-align: center;
				transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
				&:hover {
					transform: translateY(-3px);
					box-shadow: 0px 5px 3px var(--c-gray-light);
				}
				.text {
					margin-left: 5px;
				}
				&.edit {
					align-self: flex-end;
					background: var(--c-s-lighter);
					color: var(--c-s-dark);
				}

				&.delete {
					background: var(--c-danger);
					color: var(--c-gray-lighter);
				}
			}
		}
	}

	.spellProperty {
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		align-items: center;
		fill: var(--c-gray-dark);
		margin-bottom: 0.2rem;
	}

	.traits {
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		max-width: 500px;
		width: 100%;
		list-style-type: none;
		margin: 0;
		padding: 0;
		margin-bottom: 0.5em;

		li {
			color: #fff;
			background-color: darkred;
			border: 2px solid var(--c-p-lighter);
			border-radius: 4px;
			font-size: 12px;
			font-weight: bold;
			margin-right: 1px;
			padding: 0 5px;
			text-transform: uppercase;
		}
	}

	ul.traditions {
		display: flex;
		flex-flow: row wrap;
		width: 100%;

		li {
			color: #fff;
			border-radius: 4px;
			font-size: 14px;
			margin-right: 0.2rem;
			padding: 0 5px;
			text-transform: lowercase;
		}
	}
	p {
		white-space: pre-line;
	}

	footer {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		font-size: 13px;
		text-transform: lowercase;

		.custom {
			color: var(--c-p-lighter);
		}
	}
</style>

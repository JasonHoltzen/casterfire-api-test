<script>
	import { onMount, tick } from 'svelte';
	import { modal, spellEditUi } from '$stores/ui.js';
	import {
		const_actions as _actions,
		const_traditions as _traditions,
		const_components as _components
	} from '$stores/fieldConstants.js';
	import { spellFormValues, spellFormErrors } from '$stores/spellForm.js';
	import { selectedSpell } from '$stores/spells.js';
	import { customSpells } from '$stores/customSpells.js';
	import { dataError } from '$stores/errors.js';
	import FlexSlider from '$components/ui/flexSlider.svelte';
	import SpellAction from '$components/spells/spellAction.svelte';
	import PlusBoxIcon from '$icons/matdes/PlusBox.svelte';
	import MinusBoxIcon from '$icons/matdes/MinusBox.svelte';
	import SaveBtn from '$icons/matdes/ContentSave.svelte';
	import CloseBtn from '$icons/matdes/Close.svelte';

	let blockClose = false;

	onMount(() => {
		$spellFormValues.traditions = $spellFormValues.traditions || [];
		if (!$spellFormValues.action) {
			$spellFormValues.action = [];
		} else {
			$spellFormValues.action =
				(typeof $spellFormValues.action === 'string'
					? [$spellFormValues.action]
					: [...$spellFormValues.action]) || [];
		}
		$spellFormValues.components = $spellFormValues.components || [];
		$spellFormValues.traits = $spellFormValues.traits || [];
	});

	$: traditionsEnabled = $spellFormValues.type.toLowerCase() === 'spell';
	$: hasErrors = !!$spellFormErrors && $spellFormErrors.length > 0;
	// $: console.log($selectedSpell);

	const toLower = (_val) => _val.toLowerCase();

	const addTrait = () => {
		$spellFormValues.traits = [...$spellFormValues.traits, ''];
	};

	const removeTrait = (value) => {
		$spellFormValues.traits = $spellFormValues.traits.filter((t) => t !== value);
	};

	const getFocus = (node) => {
		node = getPlaceholder(node);
		node.focus();
		return node;
	};

	const getPlaceholder = (node) => {
		const placeholder = node.ariaPlaceholder;
		node.style.setProperty('--placeholderValue', `"${placeholder}"`);
		return node;
	};

	const hideModal = () => {
		spellFormValues.reset();
		spellEditUi.hide();
		$modal.show = false;
		$modal.component = '';
	};

	const saveCustomSpell = async () => {
		try {
			const res = await fetch('/api/spells/custom', {
				method: 'POST',
				body: JSON.stringify({
					customSpell: { ...$spellFormValues }
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			if (res.ok) {
				const response = await res.json();
				if (response.success) {
					const newSpell = { ...response.customSpell };
					customSpells.addOrUpdate(newSpell);
					await tick();
					$selectedSpell = newSpell;
					hideModal();
				}
			}
		} catch (err) {
			console.log(err);
			dataError.showFatal(err);
		}
	};

	const lightIcon = {
		color: 'var(--c-gray-lighter)',
		width: '16px',
		height: '16px',
		size: '16px',
		viewBox: '0 0 24 24'
	};
	const darkIcon = {
		color: 'var(--c-gray-lighter)',
		width: '16px',
		height: '16px',
		size: '16px',
		viewBox: '0 0 24 24'
	};
	const saveIconProps = {
		color: 'var(--c-gray-lighter)',
		width: '20px',
		height: '20px',
		size: '20px',
		viewBox: '0 0 24 24'
	};
	const closeIconProps = {
		color: 'var(--c-s-lighter)',
		width: '20px',
		height: '20px',
		size: '20px',
		viewBox: '0 0 24 24'
	};
</script>

<div class="modalContainer">
	<button
		class="closeButton"
		name="closeModalButton"
		disabled={blockClose}
		on:click|preventDefault={hideModal}
	>
		<CloseBtn {...closeIconProps} />
	</button>
	<div class="form">
		{#if !!$spellFormValues}
			<div class="form__top">
				<h2 class="spellProperty">
					<label class="label" for="name">Name:</label>
					<span
						id="name"
						class="name"
						contenteditable="true"
						aria-placeholder="Name"
						use:getFocus
						bind:textContent={$spellFormValues.name}
					/>
				</h2>
				<h3 class="spellProperty">
					<label class="label" for="type">Type:</label>
					<span
						id="type"
						contenteditable="true"
						bind:textContent={$spellFormValues.type}
						aria-placeholder="spell type"
						use:getPlaceholder
					/>
				</h3>
				<h3 class="spellProperty">
					<label class="label" for="level">Level:</label>
					<span
						id="level"
						contenteditable="true"
						bind:textContent={$spellFormValues.level}
						aria-placeholder="Spell Level"
						use:getPlaceholder
					/>
				</h3>
			</div>
			<hr />
			{#if !!$spellFormValues?.traits}
				<fieldset>
					<legend class="label" for="traitsGroup">Spell Traits:</legend>
					<ul id="traitsGroup" class="traits">
						<li class="addBox" on:click={addTrait}>
							<PlusBoxIcon {...lightIcon} />
						</li>
						{#if $spellFormValues.traits.length > 0}
							{#each $spellFormValues.traits as _trait}
								<li id={`traitsGroup_${_trait}`}>
									<span
										class="center"
										contenteditable
										bind:textContent={_trait}
										aria-placeholder="Trait Name"
										use:getPlaceholder
									/>
									<span
										class="removeIcon"
										on:click={removeTrait(_trait)}
										on:blur={(_trait) => toLower(_trait)}
									>
										<MinusBoxIcon {...lightIcon} />
									</span>
								</li>
							{/each}
						{/if}
					</ul>
				</fieldset>
			{/if}
			{#if traditionsEnabled}
				<fieldset class="spellProperty">
					<legend for="traditionsGroup" class="label">Traditions:</legend>
					<div id="traditionsGroup" class="toggleContainer">
						{#each _traditions as _opt}
							<input
								class="itemToggle"
								type="checkbox"
								bind:group={$spellFormValues.traditions}
								value={_opt}
								name={_opt}
								id={`traditionsGroup_${_opt}`}
							/>
							<label for={`traditionsGroup_${_opt}`}>
								<span>{_opt}</span>
								<span class="iconBox checked">
									<MinusBoxIcon {...lightIcon} />
								</span>
								<span class="iconBox unchecked">
									<PlusBoxIcon {...lightIcon} />
								</span>
							</label>
						{/each}
					</div>
				</fieldset>
			{/if}
			{#if !!$spellFormValues?.action}
				<fieldset class="spellProperty">
					<legend for="actionsGroup" class="label">Cast actions:</legend>
					<div id="actionsGroup" class="toggleContainer">
						{#each _actions as _opt}
							<input
								class="itemToggle"
								type="checkbox"
								bind:group={$spellFormValues.action}
								value={_opt}
								name={_opt}
								id={`actionsGroup_${_opt}`}
							/>
							<label for={`actionsGroup_${_opt}`}>
								<SpellAction action={_opt} />
								<span class="iconBox checked">
									<MinusBoxIcon {...lightIcon} />
								</span>
								<span class="iconBox unchecked">
									<PlusBoxIcon {...lightIcon} />
								</span>
							</label>
						{/each}
					</div>
				</fieldset>
			{/if}
			{#if !!$spellFormValues?.components}
				<fieldset class="spellProperty">
					<legend for="componentsGroup" class="label">Components:</legend>
					<fieldset id="componentsGroup" class="toggleContainer">
						<legend class="label">Times</legend>
						{#each _components.times as _opt}
							<input
								class="itemToggle"
								type="checkbox"
								bind:group={$spellFormValues.components}
								value={_opt}
								name={_opt}
								id={`componentsGroup_${_opt}`}
							/>
							<label for={`componentsGroup_${_opt}`}>
								<span>{_opt}</span>
								<span class="iconBox checked">
									<MinusBoxIcon {...lightIcon} />
								</span>
								<span class="iconBox unchecked">
									<PlusBoxIcon {...lightIcon} />
								</span>
							</label>
						{/each}
					</fieldset>
					<fieldset id="componentsGroup" class="toggleContainer">
						<legend class="label">Requirements</legend>
						{#each _components.requirements as _opt}
							<input
								class="itemToggle"
								type="checkbox"
								bind:group={$spellFormValues.components}
								value={_opt}
								name={_opt}
								id={`componentsGroup_${_opt}`}
							/>
							<label for={`componentsGroup_${_opt}`}>
								<span>{_opt}</span>
								<span class="iconBox checked">
									<MinusBoxIcon {...lightIcon} />
								</span>
								<span class="iconBox unchecked">
									<PlusBoxIcon {...lightIcon} />
								</span>
							</label>
						{/each}
						<input
							class="itemToggle"
							type="checkbox"
							bind:group={$spellFormValues.components}
							value={_components.separator}
							name="{_components.separator} separator"
							id="componentsGroup_or"
						/>
						<label for="componentsGroup_or">
							<span>"or" option</span>
							<span class="iconBox checked">
								<MinusBoxIcon {...lightIcon} />
							</span>
							<span class="iconBox unchecked">
								<PlusBoxIcon {...lightIcon} />
							</span>
						</label>
					</fieldset>
				</fieldset>
			{/if}
			<ul class="inputContainer">
				<li class="spellProperty">
					<label class="label" for="range">Range:</label>
					<span
						id="name"
						contenteditable="true"
						bind:textContent={$spellFormValues.range}
						aria-placeholder="range"
						use:getPlaceholder
					/>
				</li>
				<li class="spellProperty">
					<label class="label" for="area">Area:</label>
					<span
						id="area"
						contenteditable="true"
						bind:textContent={$spellFormValues.area}
						aria-placeholder="area"
						use:getPlaceholder
					/>
				</li>
				<li class="spellProperty">
					<label class="label" for="duration">Duration:</label>
					<span
						id="duration"
						contenteditable="true"
						bind:textContent={$spellFormValues.duration}
						aria-placeholder="duration"
						use:getPlaceholder
					/>
				</li>
				<li class="spellProperty">
					<label class="label" for="target">Target:</label>
					<span
						id="target"
						contenteditable="true"
						bind:textContent={$spellFormValues.targets}
						aria-placeholder="target"
						use:getPlaceholder
					/>
				</li>
				<li class="spellProperty">
					<label class="label" for="savingThrow">Saving Throw:</label>
					<span
						id="target"
						contenteditable="true"
						bind:textContent={$spellFormValues.savingThrow}
						aria-placeholder="saving throw"
						use:getPlaceholder
					/>
				</li>
			</ul>
			<hr />

			<FlexSlider visible={hasErrors}>
				<div class="editor" slot="left">
					<label for="description">Description:</label>
					<textarea id="description" bind:value={$spellFormValues.description} />
				</div>
				<div class="errorBox" slot="right">
					<h3>Form Errors:</h3>
					<ul class="errors">
						{#each $spellFormErrors as error}
							<li>
								<small>{error}</small>
							</li>
						{/each}
					</ul>
				</div>
			</FlexSlider>
			<footer>
				Source:&nbsp;
				<span contenteditable="true" bind:innerHTML={$spellFormValues.source} />
				<div class="buttonContainer">
					<button
						class="button saveButton"
						disabled={hasErrors}
						on:click|preventDefault={saveCustomSpell}
					>
						<SaveBtn {...saveIconProps} />
						<span class="text"> Save </span>
					</button>
					<button class="button cancelButton" on:click|preventDefault={hideModal}> Cancel </button>
				</div>
			</footer>
		{:else}
			<p>Spell data is missing</p>
		{/if}
	</div>
</div>

<style lang="scss">
	.modalContainer {
		display: flex;
		flex-flow: column nowrap;
		border-radius: 10px;
		background: var(--c-gray-dark);
		color: var(--c-gray-lighter);
		box-shadow: 0 3px 5px 2px var(--c-s);
		padding: 15px;
		position: relative;
		width: clamp(350px, 50%, 700px);
		min-width: 350px;
		max-width: 1000px;

		@include respond('md') {
			max-width: unset;
			width: 95%;
		}
	}

	fieldSet {
		border: 2px solid var(--c-s-lighter);
		padding: 5px 10px;
		margin-bottom: 1rem;
		display: flex;
		flex-flow: row wrap;
		gap: 0.5rem;
		legend {
			padding-left: 5px;
			margin-left: -5px;
		}
		fieldSet {
			display: flex;
			flex-flow: row wrap;
			gap: 0.5rem;
			border: 1px solid var(--c-s-light);
		}

		&.spellProperty {
			margin-bottom: 1rem;
		}
	}

	.inputContainer {
		border: 2px solid var(--c-s-lighter);
		padding: 5px 10px;
		margin-bottom: 1rem;
	}

	h2.spellProperty {
		text-transform: none;
	}

	.button {
		display: flex;
		justify-content: center;
		border: none;
		border-radius: 100px;
		box-sizing: content-box;
		font-size: 16px;
		letter-spacing: 0.1em;
		margin-left: 15px;
		padding: 7px 12px;
		text-align: center;
		text-transform: uppercase;
		transition: all 0.2s ease-in-out;
		&:hover {
			transform: translateY(-3px);
			box-shadow: 0px 5px 3px var(--c-gray-light);
		}
	}
	.saveButton {
		background: var(--c-p-dark);
		background-image: linear-gradient(45deg, var(--c-p-dark) 25%, var(--c-p-light) 75%);
		color: white;
		&:disabled {
			background: var(--c-gray-light);
			background-image: unset;
			position: relative;
			&:hover {
				transform: unset;
				box-shadow: unset;
				&::before {
					text-transform: none;
					position: absolute;
					content: 'Save disabled due to form errors.';
					bottom: 110%;
					height: auto;
					width: 10em;
				}
			}
			.text {
				color: var(--c-gray);
			}
		}
		.text {
			padding: 2px 0px 0px 5px;
		}
	}
	.cancelButton {
		background: var(--c-p-dark);
		background-image: linear-gradient(45deg, var(--c-gray-lighter) 30%, var(--c-gray-light) 90%);
		color: var(--c-gray-darkest);
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

	hr {
		height: 1px;
		background-color: var(--c-p);
		border: none;
	}
	h2 {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		text-transform: uppercase;
		margin: 0;
		span[contenteditable] {
			text-transform: none;
		}
	}

	h3 {
		margin: 0;
		display: inline-block;
	}

	.form {
		&__top {
			display: flex;
			flex-flow: column nowrap;

			.spellProperty {
				display: flex;
				flex-flow: row nowrap;
				margin-bottom: 5px;

				& .label {
					flex: 0 0 auto;
					width: clamp(75px, 30%, 125px);
					padding-right: 15px;
				}
			}
		}
	}

	ul.inputContainer {
		break-inside: avoid-column;
		column-count: 2;
		column-width: 48%;
		width: 100%;

		li.spellProperty {
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			align-items: center;
			break-inside: avoid-column;
			width: 50%;
			min-width: 200px;

			.label {
				flex: 1 1 auto;
				align-self: flex-start;
				max-width: 50%;
				break-inside: avoid-column;
				// width: 50%;
			}
			span[contenteditable] {
				flex: 1 1 auto;
				break-inside: avoid-column;
				margin-left: 0.8rem;
				max-width: 48%;
			}
		}
	}

	.spellProperty {
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		align-items: top;
		margin-bottom: 5px;
	}
	.label {
		font-weight: 700;
		width: auto;
	}
	.traits {
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		align-items: center;
		max-width: 500px;
		width: 100%;
		list-style-type: none;
		margin: 0;
		padding: 0 0 0 10px;

		li {
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			align-items: center;
			color: #fff;
			background-color: darkred;
			border: 2px solid var(--c-p-lighter);
			border-radius: 4px;
			font-size: 12px;
			font-weight: bold;
			margin-right: 3px;
			margin-bottom: 3px;
			padding: 0 5px;
			text-transform: uppercase;

			span[contenteditable] {
				margin-right: 5px;
				min-width: 75px;
				&:empty:not(:focus)::before {
					content: var(--placeholderValue);
					color: var(--c-gray-lighter);
					font-size: 14px !important;
					padding: 0;
					text-align: center;
					width: 100%;
				}
			}

			span.removeIcon {
				margin-right: 0;
				padding-top: 3px;
			}

			&.addBox {
				padding: 4px;
			}
		}
	}
	.toggleContainer {
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 0.5rem;
	}
	input.itemToggle + label {
		border-radius: 3px;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid transparent;
		padding: 0px 0px 0px 5px;
		width: auto;

		&:first-of-type {
			margin-left: 0;
		}
		&:last-of-type {
			margin-right: 0;
		}
	}
	input.itemToggle {
		display: none;
		position: relative;
		&:not(:checked) + label {
			background: var(--c-gray-dark);
			color: #fff;
			border: 1px solid var(--c-gray-lighter);
			fill: var(--c-gray-dark);

			.iconBox {
				&.unchecked {
					display: none;
				}
			}
		}
		&:checked + label {
			background: var(--c-s-light);
			color: white;
			fill: var(--c-s-light);

			.iconBox {
				&.checked {
					display: none;
				}
			}
		}
	}
	.iconBox {
		display: grid;
		place-items: center center;
		height: 100%;
		min-width: 24px;
	}

	p {
		white-space: pre-line;
	}

	.center {
		text-align: center;
	}

	[contenteditable] {
		--placeholderValue: '';
		min-width: 120px;
		border: 1px solid var(--c-gray-lighter);
		border-radius: 3px;
		padding: 2px 5px;
		position: relative;
		&:empty:not(:focus)::before {
			content: var(--placeholderValue);
			color: var(--c-p-lighter);
			pointer-events: none;
			position: absolute;
			font-weight: normal;
			text-transform: lowercase;
			font-size: 16px;
			padding-left: 10px;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 100%;
		}
		&:active,
		&:focus {
			background: var(--c-gray-lighter);
			color: var(--c-gray-darkest);
		}
	}

	.editor {
		flex: 1 1 auto;
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		align-items: flex-start;
		margin-right: 10px;
		label {
			font-weight: 700;
		}
		textarea {
			height: auto;
			min-height: 250px;
			width: 100%;
		}
	}

	.errorBox {
		flex: 0 0 auto;
		ul {
			color: var(--c-p-light);
		}
	}

	footer {
		align-items: space-between;
		display: flex;
		flex-flow: row nowrap;
		font-size: 12px;
		margin-top: 10px;
		text-transform: lowercase;
		width: 100%;

		.buttonContainer {
			display: flex;
			flex-flow: row nowrap;
			justify-content: flex-end;
			align-items: flex-end;
			margin-left: auto;
		}
	}
</style>

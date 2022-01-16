<script>
	import { outClick } from '$utils/customActions.js';
	import ChevronDown from '$icons/matdes/ChevronDown.svelte';
	import DropdownRevealContent from '$components/ui/basic/dropdownRevealContent.svelte';

	export let id = '';
	export let labelText;
	export let Icon = ChevronDown;
	export let btnIconColor = 'var(--c-gray-lighter)';
	export let btnIconColorTog = 'var(--c-gray)';
	export let btnTextColor = 'var(--c-gray-lighter)';
	export let btnTextColorTog = 'var(--c-gray)';
	export let btnBgColor = 'transparent';
	export let btnBgColorTog = 'transparent';
	export let btnBorderColor = 'transparent';
	export let btnBorderColorTog = 'transparent';
	export let ddBorderColor = 'transparent';
	export let ddBgColor = 'var(--c-gray-darkest)';
	export let buttonSize = '24px';
	export let iconSize = '24px';

	const toggledVars = `--btnBgClr: ${btnBgColorTog};--btnBdrClr: ${btnBorderColorTog};--size: ${buttonSize};--btnTxtClr: ${btnTextColorTog};--ddBdrClr: ${ddBorderColor};--ddBgClr: ${ddBgColor};`;

	const defaultVars = `--btnBgClr: ${btnBgColor};--btnBdrClr: ${btnBorderColor};--size: ${buttonSize};--btnTxtClr: ${btnTextColor};--ddBdrClr: ${ddBorderColor};--ddBgClr: ${ddBgColor};`;

	let viewBox = '0 0 24 24';
	let checked = false;

	$: iconProps = {
		width: iconSize,
		height: iconSize,
		size: iconSize,
		viewBox
	};
</script>

<div
	class="dropdown"
	style={checked ? toggledVars : defaultVars}
	use:outClick
	on:clickout={() => (checked = false)}
>
	<label class:checked>
		<input type="checkbox" bind:checked {id} />
		{#if labelText}
			<span class="text">
				{labelText}
			</span>
		{/if}
		<span class={checked ? 'icon checked' : 'icon'}>
			<svelte:component
				this={Icon}
				{...iconProps}
				color={checked ? btnIconColorTog : btnIconColor}
			/>
		</span>
	</label>
	{#if checked}
		<DropdownRevealContent>
			<slot name="content" slot="content">No content provided in dropdownReveal.</slot>
		</DropdownRevealContent>
	{/if}
</div>

<style lang="scss">
	.dropdown {
		position: relative;
		cursor: pointer;

		@include respond('sm') {
			width: 100%;
		}

		input[type='checkbox'] {
			@include visuallyHidden;
		}

		label {
			display: flex;
			flex: 0 0 auto;
			flex-flow: row nowrap;
			align-items: center;
			justify-content: center;
			position: relative;
			gap: 0.25rem;
			background: var(--btnBgClr);
			border: 2px solid var(--btnBdrClr);
			border-top-left-radius: 0.5rem;
			border-top-right-radius: 0.5rem;
			border-bottom-left-radius: 0.5rem;
			border-bottom-right-radius: 0.5rem;
			box-sizing: border-box;
			border: 0.5rem;
			padding: 0.2rem 0.1rem 0.2rem 0.5rem;

			@include respond('sm') {
				width: 100%;
				min-height: 44px;
			}

			&.checked {
				border-bottom-left-radius: 0rem;
				border-bottom-right-radius: 0rem;
			}

			.text {
				color: var(--btnTxtClr);
				transition: color 0.2s ease-in-out;
				z-index: 10;
			}

			.icon {
				display: grid;
				place-items: center center;
				transition: transform 0.2s ease-in-out;
			}

			&.checked {
				.icon {
					transform: rotate(90deg);
				}
			}
		}
	}
</style>

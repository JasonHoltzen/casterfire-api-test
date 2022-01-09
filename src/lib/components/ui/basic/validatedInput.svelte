<script>
	import { fade } from 'svelte/transition';
	export let label = '';
	export let id = '';
	export let value = '';
	export let error;
	// Because type cannot be dynamic for 2-way binding
	export let type = 'text';
	let hasFocus = false;

	const onFocus = () => (hasFocus = true);
	const onBlur = () => (hasFocus = false);
</script>

<div class="inputWrapper">
	<label for={id}>{label}</label>
	{#if type === 'password'}
		<input
			type="password"
			{id}
			name={id}
			bind:value
			class:invalid={error}
			on:focus={onFocus}
			on:blur={onBlur}
		/>
	{:else}
		<input
			type="text"
			{id}
			name={id}
			bind:value
			class:invalid={error}
			on:focus={onFocus}
			on:blur={onBlur}
		/>
	{/if}
	{#if error && hasFocus}
		<div class="tooltip" transition:fade>{error}</div>
	{/if}
</div>

<style lang="scss">
	.inputWrapper {
		position: relative;
		margin-bottom: 0.5rem;
	}
	label,
	input {
		width: 100%;
	}
	label {
		margin-top: 10px;

		&:first-of-type {
			margin-top: 0;
		}
	}
	input {
		background: var(--c-gray-lighter);
		border-radius: 100px;
		color: var(--c-gray-darkest);
		font-size: 16px;
		line-height: 16px;
		padding: 10px;
		height: 2.3rem;
		min-height: 30px;
		min-width: auto;

		@include respond('md') {
			min-height: 44px;
			min-width: 44px;
		}

		&:active + .tooltip,
		&:focus + .tooltip {
			display: block;
		}
		&.invalid {
			border-bottom: 3px solid var(--c-alert);
			border-left: 3px solid var(--c-danger);
			border-right: 3px solid var(--c-alert);
			border-top: 3px solid var(--c-danger);
		}
	}
	.tooltip {
		display: none;
		position: absolute;
		left: 100%;
		bottom: 0%;
		background: var(--c-s-lighter);
		border: 3px solid var(--c-alert);
		border-radius: 5px;
		box-shadow: 3px 3px 5px hsla(0deg, 45%, 100%, 0.5);
		color: var(--c-s-dark);
		padding: 5px;
		width: clamp(100px, 100%, 150px);
		z-index: 10;
		&:empty {
			display: none !important;
		}

		&::before,
		&::after {
			content: '';
			position: absolute;
			display: block;
			border-style: solid;
			width: 0px;
		}
		&::before {
			bottom: 8px;
			left: -13px;
			border-width: 9px 13px 9px 0px;
			border-color: transparent var(--c-alert);
		}
		&::after {
			bottom: 11px;
			left: -8px;
			border-color: transparent var(--c-s-lighter);
			border-width: 6px 8px 6px 0px;
		}
	}
</style>

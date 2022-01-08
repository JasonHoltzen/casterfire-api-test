<script>
	import Arrow from '$lib/icons/matdes/ArrowDownThick.svelte';
	import { fade } from 'svelte/transition';
	export let id;
	export let placeholder;
	export let number;
	export let min;
	export let max;
	export let disabled = false;

	const iconProps = {
		width: '36px',
		height: '70%',
		viewBox: '0 0 24 24'
	};

	let prevNumber = number;
	let blink = 'test';

	const checkBlink = () => {
		if (prevNumber < number) {
			blink = 'up';
		} else if (prevNumber > number) {
			blink = 'down';
		} else {
			blink = 'bah';
		}
		prevNumber = number;
	};

	const increment = () => {
		if (!number) {
			number = 1;
		} else if (number === 10) {
			number = 10;
		} else {
			number++;
		}
	};

	const decrement = () => {
		if (!number) {
			number = 10;
		} else if (number === 1) {
			number = 1;
		} else {
			number--;
		}
	};

	const checkNumber = () => {
		if (number > max) number = max;
		if (number < min) number = min;
	};
</script>

<div class="wrapper">
	<input
		type="number"
		{min}
		{max}
		{disabled}
		{placeholder}
		{id}
		bind:value={number}
		name={id}
		on:change={checkBlink}
		on:blur={checkNumber}
	/>
	<button
		aria-label="decrement {placeholder}"
		class="minus"
		on:click|preventDefault={decrement}
		disabled={disabled || number === min}
	>
		<span class="icon">
			<Arrow {...iconProps} color="var(--c-gray-lighter" />
		</span>
		{#if blink === 'down'}
			<span
				class="icon blink"
				in:fade={{ duration: 50 }}
				out:fade={{ duration: 150 }}
				on:introend={() => (blink = '')}
			>
				<Arrow {...iconProps} color="var(--c-gray-darkest)" />
			</span>
		{/if}
	</button>

	<button
		aria-label="increment {placeholder}"
		class="plus"
		on:click|preventDefault={increment}
		{disabled}
	>
		<span class="icon">
			<Arrow {...iconProps} color="var(--c-gray-lighter)" />
		</span>
		{#if blink === 'up'}
			<span
				class="icon blink"
				in:fade={{ duration: 50 }}
				out:fade={{ duration: 150 }}
				on:introend={() => (blink = '')}
			>
				<Arrow {...iconProps} color="var(--c-gray-darkest)" />
			</span>
		{/if}
	</button>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		margin: 0 auto;
		justify-content: center;
		width: 88px;
		height: 88px;

		input {
			flex: 1 1 100%;
			border-color: var(--c-p-light);
			border-style: solid;
			border-width: 2px;
			border-bottom: 1px;
			border-top-right-radius: 44px;
			border-top-left-radius: 44px;
			box-sizing: border-box;
			font-family: var(--font-normal);
			font-size: 1.2rem;
			height: 44px;
			text-align: center;
			transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out,
				color 0.3s ease-in-out;

			&:active,
			&:focus {
				outline: none;
			}

			&:disabled {
				border-color: var(--c-gray);
				color: var(--c-s);
				cursor: not-allowed;
			}
		}
		button {
			flex: 1 1 50%;
			display: grid;
			place-items: center center;
			position: relative;
			background: var(--c-p);
			border-color: var(--c-p-light);
			border-style: solid;
			border-width: 2px;
			box-sizing: border-box;
			cursor: pointer;
			height: 44px;
			outline: none;
			transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out,
				color 0.3s ease-in-out;

			&:disabled {
				border-color: var(--c-gray);
				background: var(--c-gray-light);
				cursor: not-allowed;
			}

			&:first-of-type {
				border-bottom-left-radius: 44px;
				border-right-width: 1px;
				// border-right-color: var(--c-p);

				&:disabled {
					border-right-color: var(--c-gray);
				}

				span.icon {
					right: 0;
					top: 0;
				}
			}
			&:last-of-type {
				border-bottom-right-radius: 44px;
				border-left-width: 1px;
				// border-left-color: var(--c-p);

				&:disabled {
					border-left-color: var(--c-gray);
				}

				span.icon {
					left: 0;
					top: 0;
				}
			}

			span.icon {
				display: grid;
				place-items: center center;
				position: absolute;
				z-index: 1;

				&.blink {
					z-index: 100;
				}
			}
			&.plus {
				span.icon {
					transform: rotate(180deg);
				}
			}
		}
	}
	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
</style>

<script>
	import { createEventDispatcher } from 'svelte';

	export let isConfirmed = false;
	export let showConfirmation = false;
	export let header = 'Confirm...';
	export let message = 'Are you sure?';

	const dispatch = createEventDispatcher();

	const confirm = () => {
		isConfirmed = true;
		showConfirmation = false;
		dispatch('submit');
	};
	const deny = () => {
		isConfirmed = false;
		showConfirmation = false;
		dispatch('submit');
	};
</script>

<div class="bg-wrapper">
	<div class="confirmBox">
		<h3>{header}</h3>
		<p>{message}</p>
		<p>Please confirm...</p>
		<div class="options">
			<button class="yes" on:click={confirm}>Yes, I'm sure</button>
			<button on:click={deny}>NO, don't do it!</button>
		</div>
	</div>
</div>

<style lang="scss">
	.bg-wrapper {
		display: grid;
		place-items: center center;
		position: absolute;
		background: transparent;
		height: 60%;
		width: 100%;
		z-index: 9999;
	}

	.confirmBox {
		position: absolute;
		display: flex;
		flex-flow: column nowrap;
		background: var(--c-gray-darkest);
		border: 5px solid var(--c-danger);
		box-shadow: 10px 5px 20px 5px var(--c-gray-light);
		border-radius: 15px;
		margin-top: minmax(5%, 10%);
		padding: 60px 30px;
		width: clamp(250px, 50%, 600px);

		h3,
		p,
		.options {
			display: flex;
			flex-flow: row wrap;
			justify-content: center;
			align-items: center;
			text-align: center;
			width: 100%;
		}

		.options {
			margin-top: 20px;
			justify-content: space-evenly;

			button {
				display: flex;
				justify-content: center;
				align-items: center;
				background: var(--c-safety);
				border: none;
				border-radius: 100px;
				box-sizing: border-box;
				font-size: 16px;
				margin: 4px 0px 4px 15px;
				padding: 5px 10px;
				text-align: center;
				transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
				&:hover {
					transform: translateY(-3px);
					box-shadow: 0px 5px 3px var(--c-gray-light);
				}
				&.yes {
					background: var(--c-danger);
					color: var(--c-gray-lighter);
					&:hover {
						box-shadow: 0px 5px 3px var(--c-gray-lighter);
					}
				}
			}
		}
	}
</style>

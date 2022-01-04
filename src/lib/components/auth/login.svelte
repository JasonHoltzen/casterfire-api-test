<script>
	import { createEventDispatcher } from 'svelte';
	import { dataError } from '$stores/errors.js';
	import { getText } from '$utils/erroh.js';

	let email = 'j@a.com';
	let password = 'shenanigans';

	const dispatch = createEventDispatcher();

	const login = async () => {
		try {
			const res = await fetch('/auth/login', {
				method: 'POST',
				body: JSON.stringify({ email, password }),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			if (res.ok) {
				dispatch('success');
			} else {
				const { statusText } = res;
				dataError.showFatal(getText(statusText));
			}
		} catch (err) {
			console.log(err);
		}
	};
</script>

<label for="uid">User: </label>
<input type="text" name="uid" id="uid" bind:value={email} />
<label for="pw">Password: </label>
<input type="password" name="pw" id="pw" bind:value={password} />
<button on:click|preventDefault={login}>Login</button>

<style lang="scss">
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
		min-height: 44px;
		min-width: 44px;
		padding: 10px;
	}

	button {
		background: var(--c-p-dark);
		background-image: linear-gradient(45deg, var(--c-p-dark) 25%, var(--c-p-light) 75%);
		color: white;
		display: flex;
		justify-content: center;
		border: none;
		border-radius: 100px;
		box-sizing: content-box;
		font-size: 16px;
		letter-spacing: 0.1em;
		margin: 15px 0 0 auto;
		max-width: 50%;
		padding: 7px 12px;
		text-align: center;
		text-transform: uppercase;
		transition: all 0.2s ease-in-out;
		&:hover {
			transform: translateY(-3px);
			box-shadow: 0px 5px 3px var(--c-gray-light);
		}
	}
</style>

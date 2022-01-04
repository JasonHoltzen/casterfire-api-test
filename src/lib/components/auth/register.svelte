<script>
	import { createEventDispatcher } from 'svelte';
	import { dataError } from '$stores/errors.js';
	import { getText } from '$utils/erroh.js';

	let name = '';
	let email = '';
	let password = '';

	const dispatch = createEventDispatcher();

	const register = async () => {
		try {
			const res = await fetch('/auth/register', {
				method: 'POST',
				body: JSON.stringify({
					email,
					password,
					name
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			if (res.ok) {
				dispatch('success');
			} else {
				const { statusText } = res;

				if (statusText === 'Conflict') {
					dataError.showFatal(
						getText(
							statusText,
							'An account with that email already exists.  Did you mean to log in?  Or maybe you need a password reset (if so, email jason@holtzen.rocks'
						)
					);
				} else if (statusText === 'Validation Error') {
					dataError.showFatal('');
				} else {
					dataError.showFatal(getText(statusText));
				}
			}
		} catch (err) {
			console.log(err);
		}
	};
</script>

<label for="name">Name: </label>
<input type="text" id="name" name="name" bind:value={name} />
<label for="uid">User: </label>
<input type="email" name="uid" id="uid" bind:value={email} />
<label for="pw">Password: </label>
<input type="password" name="pw" id="pw" bind:value={password} />
<button on:click|preventDefault={register}>Register</button>

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

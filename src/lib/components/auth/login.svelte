<script>
	import Input from '$components/ui/basic/validatedInput.svelte';
	import { createEventDispatcher } from 'svelte';
	import { dataError } from '$stores/errors.js';
	import { validate } from '$schemas/_validate.js';
	import { authSchema } from '$schemas/Auth.js';

	let values = {
		email: '',
		password: ''
	};

	const dispatch = createEventDispatcher();

	$: errors = validate(authSchema, values) || {};
	$: hasErrors = Object.keys(errors).length !== 0;

	const login = async () => {
		try {
			const res = await fetch('/auth/login', {
				method: 'POST',
				body: JSON.stringify(values),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			if (res.ok) {
				dispatch('success');
			} else {
				dataError.show('Invalid username or password');
			}
		} catch (err) {
			dataError.showFatal(err);
		}
	};
</script>

<h3>Login</h3>

<Input label="Email:" id="email" bind:value={values.email} bind:error={errors.email} />
<Input
	label="Password:"
	type="password"
	id="password"
	bind:value={values.password}
	bind:error={errors.password}
/>

<button on:click|preventDefault={login} disabled={hasErrors}>Login</button>

<style lang="scss">
	h3 {
		margin: 0.5rem 0rem 1rem auto;
		text-align: left;
		color: var(--c-p-light);
		text-transform: uppercase;
		width: clamp(100px, 200px, 80%);
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
		&:disabled {
			background: var(--c-gray-light);
			color: var(--c-gray-darker);
		}
		&:disabled:hover {
			transform: none;
			box-shadow: none;
		}
	}
</style>

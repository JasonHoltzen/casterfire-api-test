<script>
	import { createEventDispatcher } from 'svelte';
	import { dataError } from '$stores/errors.js';
	import { getText } from '$utils/erroh.js';
	import { validate } from '$schemas/_validate.js';
	import { authSchema } from '$schemas/Auth.js';
	import Input from '$components/ui/basic/validatedInput.svelte';

	let values = { name: '', email: '', password: '', repeat_password: '' };

	const dispatch = createEventDispatcher();

	$: errors = validate(authSchema, values) || {};
	$: hasErrors = Object.keys(errors).length !== 0;

	const register = async () => {
		try {
			delete values.repeat_password;

			const res = await fetch('/auth/register', {
				method: 'POST',
				body: JSON.stringify(values),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			if (res.ok) {
				dispatch('success');
			} else {
				const { statusText } = res;
				console.log(statusText);

				if (statusText === 'Conflict') {
					dataError.showFatal(
						getText(
							statusText,
							'An account with that email already exists.  Did you mean to log in?  Or maybe you need a password reset (if so, email jason@holtzen.rocks'
						)
					);
				} else if (statusText === 'Validation Error') {
					dataError.showFatal('One or more form inputs was invalid');
				} else {
					dataError.showFatal(getText(statusText));
				}
			}
		} catch (err) {
			dataError.showFatal(err);
		}
	};
</script>

<h3>Register</h3>

<Input label="Name:" id="name" bind:value={values.name} bind:error={errors.name} />
<Input label="Email:" id="email" bind:value={values.email} bind:error={errors.email} />
<Input
	label="Password:"
	type="password"
	id="password"
	bind:value={values.password}
	bind:error={errors.password}
/>
<Input
	label="Confirm Password:"
	id="repeat_password"
	type="password"
	bind:value={values.repeat_password}
	error={!!errors?.repeat_password ? 'Passwords must match' : undefined}
/>

<button on:click|preventDefault={register} disabled={hasErrors}>Register</button>

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

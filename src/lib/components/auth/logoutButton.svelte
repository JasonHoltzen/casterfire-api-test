<script>
	import { browser } from '$app/env';
	import LogoutIcon from '$icons/matdes/Logout.svelte';

	const logout = async () => {
		try {
			const res = await fetch('/auth/logout', {
				method: 'DELETE'
			});
			if (res.ok && browser) {
				document.location.href = '/';
			}
		} catch (err) {
			console.log(err);
		}
	};

	//@ Props for the New/Save and Clear icons
	let characterIconProps = {
		color: 'var(--c-gray-lighter)',
		width: '20px',
		height: '20px',
		size: '20px',
		viewBox: '0 0 24 24'
	};
</script>

<button on:click|preventDefault={logout}>
	<LogoutIcon {...characterIconProps} />
	<span class="text"> Logout </span>
</button>

<style lang="scss">
	button {
		display: flex;
		background: var(--c-p-dark);
		background-image: linear-gradient(45deg, var(--c-s-dark) 25%, var(--c-s) 75%);
		border: none;
		border-radius: 10px;
		box-sizing: content-box;
		color: white;
		height: 34px;
		margin-left: auto;
		padding: 5px 10px;
		place-items: center center;
		transition: all 0.2s ease-in-out;
		&:hover {
			transform: translateY(-3px);
			box-shadow: 0px 5px 3px var(--c-s-lighter);
		}

		.text {
			font-size: 16px;
			padding-top: 2px;
			padding-left: 5px;
		}
	}
</style>

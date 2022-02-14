<script context="module">
	import { user } from '$stores/user.js';
	import { dataError } from '$stores/errors.js';
	import { dev } from '$app/env';

	export async function load({ session, fetch }) {
		if (session.userId) {
			try {
				let currentUser = await fetch('/api/user').then((r) => r.json());

				if (currentUser) {
					user.set(currentUser);
				} else {
					dataError.showFatal('User not found');
					return {};
				}
			} catch (err) {
				if (dev) console.log(err);
				dataError.showFatal('Error connecting to database');
				return {};
			}
		}
		return {};
	}
</script>

<script>
	import '../app.css';
	import '../app.scss';
	import Logo from '$lib/assets/logo.svg';
	import LockupText from '$lib/assets/lockuptext.svg';
	import Nav from '$lib/components/ui/nav.svelte';
	import PlayerInfo from '$lib/components/ui/playerInfo.svelte';
	import C from '$lib/components/console.svelte';
	import Modal from '$lib/components/ui/modal.svelte';
	import ErrorToast from '$lib/components/ui/errorToast.svelte';
	import { onMount } from 'svelte';
	import { pf_spells } from '$stores/spells.js';
	import { customSpells } from '$stores/customSpells.js';
	import { characters } from '$stores/character.js';

	onMount(() => {
		if ($user?._id) {
			customSpells.populate();
			characters.populate();
		}
		pf_spells.populate();
	});
</script>

<svelte:head>
	<title>CasterFire</title>
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Raleway:wght@400;700;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Modal />
{#if $dataError.visible}
	<ErrorToast />
{/if}
<div class="container">
	<header>
		<Nav />
		<!-- <button on:click|preventDefault={() => dataError.showFull('testing', 504)}>Toast!</button> -->
		<div class="lockup">
			<img src={Logo} alt="CasterFire Logo" class="logo" />
			<img src={LockupText} alt="CasterFire Lockup Text" class="logoText" />
			<h1>CasterFire</h1>
		</div>
		<PlayerInfo />
	</header>
	<slot />
	{#if dev}
		<C />
		<!-- Used by clippy to copy things to user clipboard -->
		<div id="clipboard" />
	{/if}
	<footer>
		Default spell data &copy;Paizo Inc., is available via the <a
			href="https://paizo.com/pathfinder/compatibility/ogl">Open Game License.</a
		>
	</footer>
</div>

<style lang="scss">
	.container {
		flex: 1 1 auto;
		position: relative;
		display: grid;
		gap: 3px;
		grid-template-columns: minmax(250px, 1fr) minmax(200px, 3fr);
		grid-template-rows: min-content min-content 1fr;
		height: 100%;
		max-height: 100%;
		max-width: 1280px;
		margin: 0 auto;
		position: relative;

		@include respond('sm') {
			grid-template-columns: 100%;
			max-height: auto;
			height: auto;

			& > * {
				grid-column: 1 / -1 !important;
				grid-row: auto !important;
			}
		}
	}

	header {
		grid-column: 1 / -1;
		grid-row: 1 / 1;
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: space-between;
		background: var(--c-gray-darkest);
		border-radius: var(--bdrs);
		color: varl(--c-gray-lighter);
		padding: 10px;
		gap: 1rem;
		z-index: 20;

		@include respond('sm') {
			justify-content: flex-start;
		}
	}
	.lockup {
		flex: 1 1 auto;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		max-width: 70%;
		margin: 0 auto;
	}
	.logo {
		min-height: 20px;
		width: clamp(20px, 10vw, 50px);
	}
	.logoText {
		max-height: 60px;
		min-height: 20px;
		width: clamp(80px, 60vw, 250px);
	}

	h1 {
		@include visuallyHidden;
	}
	footer {
		font-size: 10px;
	}
</style>

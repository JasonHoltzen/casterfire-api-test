<script>
	import Logo from '$lib/assets/logo.svg';
	import LockupText from '$lib/assets/lockuptext.svg';
</script>

<svelte:head>
	<title>CasterFire</title>
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Raleway:wght@400;700;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="container">
	<header>
		<a href="/" class="back">&larr;&nbsp;Back</a>
		<div class="lockup">
			<img src={Logo} alt="CasterFire Logo" class="logo" />
			<img src={LockupText} alt="CasterFire Lockup Text" class="logo" />
			<h1>CasterFire</h1>
		</div>
	</header>
	<main>
		<slot />
	</main>
</div>

<!-- <Console></Console> -->
<style lang="scss">
	.container {
		--header-height: 80px;
		display: flex;
		flex-flow: column nowrap;
		flex: 1 1 auto;
		position: relative;
		height: 100%;
		max-height: 100%;
		max-width: 1280px;
		margin: 0 auto;
		position: relative;
	}

	header {
		display: flex;
		flex-flow: row nowrap;
		position: relative;
		align-items: center;
		background: var(--c-gray-darkest);
		border-radius: var(--bdrs);
		color: var(--c-gray-lighter);
		justify-content: space-between;
		max-height: var(--header-height);
		padding: 10px;
		width: 100%;
		z-index: 20;

		a.back {
			position: absolute;
			border-top: 1px solid transparent;
			border-bottom: 1px solid transparent;
			padding: 0px 5px;
			text-decoration: none;
			text-transform: uppercase;
			transition: border-color 0.2s ease-in-out;
			&,
			&:visited {
				color: var(--c-p-light);
			}
			&:hover,
			&:active {
				border-color: 1px solid var(--c-p-lighter);
			}
		}

		.lockup {
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			justify-content: center;
			align-self: center;
			margin: 0 auto;

			h1 {
				@include visuallyHidden;
			}
			.logo {
				width: auto;
				height: 60px;
				margin: 0px 10px;
			}
		}
	}
	main {
		flex: 1 1 auto;
		border-radius: 10px;
		margin: 10px auto;
		overflow: auto;
		position: relative;
		width: clamp(200px, 40%, 600px);
	}
</style>

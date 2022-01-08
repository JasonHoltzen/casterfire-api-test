<script context="module">
	export async function load({ fetch }) {
		let errors = [];
		let playerList = await fetch('/api/user/all-users')
			.then((r) => r.json().then((r) => r.playerList))
			.catch((err) => errors.push(err));

		return {
			props: {
				errors,
				playerList
			}
		};
	}
</script>

<script>
	export let playerList;
</script>

<h2>User List</h2>
{#if playerList}
	<ul>
		{#each playerList as player}
			<li>
				<div class="name">
					{player.name}
				</div>
				<div class="date">
					{player.date}
				</div>
			</li>
		{/each}
	</ul>
{/if}

<style lang="scss">
	h2 {
		background: var(--c-gray-darker);
		border-radius: 10px;
		color: var(--c-gray-lighter);
		margin: 0px 0px 3px;
		padding: 10px;
		position: sticky;
		top: 0px;
	}
	ul {
		display: flex;
		flex-flow: column nowrap;
		background: var(--c-gray-dark);
		border-radius: 10px;
		color: var(--c-gray-lighter);
		padding: 10px;

		li {
			display: flex;
			flex-flow: row nowrap;
			border-bottom: 1px solid var(--c-p-light);
			padding: 3px;
			&:last-of-type {
				border-bottom: none;
			}
			&:hover {
				background: hsla(200deg, 50%, 50%, 0.1);
			}

			.name {
				width: 40%;
			}
			.date {
				flex: 1 0 auto;
			}
		}
	}
</style>

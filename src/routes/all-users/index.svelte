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
	<table class="columnLabel">
		<thead>
			<tr>
				<th>Name</th>
				<th>Date Joined</th>
			</tr>
		</thead>
		<tbody>
			{#each playerList as player}
				<tr>
					<td class="name">
						{player.name}
					</td>
					<td class="date">
						{player.date}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
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

	table {
		background: var(--c-gray-dark);
		border-radius: 10px;
		color: var(--c-gray-lighter);
		padding: 10px;
		width: 100%;

		thead {
			border-bottom: 3px solid hsla(200deg, 50%, 80%, 0.2);
		}

		thead,
		tbody {
			display: flex;
			flex-flow: column nowrap;
			gap: 5px;
			padding: 0.5rem;
			width: 100%;
		}

		tr {
			display: grid;
			grid-template-columns: 1fr 2fr;
			border-bottom: 1px solid var(--c-p-light);
			width: 100%;
			gap: 0.5rem;

			&:last-of-type {
				border-bottom: none;
			}
			&:hover {
				background: hsla(200deg, 50%, 50%, 0.1);
			}
		}
		th {
			color: 1px solid var(--c-p-light);
			text-align: left;
			font-size: 1.05em;
			font-weight: bold;
		}
	}
</style>

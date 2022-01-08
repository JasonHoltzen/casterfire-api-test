<script>
	import { filters } from '$stores/filters.js';
</script>

<label>
	Search
	<input type="text" bind:value={$filters.search} placeholder="name or description" />
</label>

<style lang="scss">
	label {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: stretch;
		font-weight: bold;
		letter-spacing: 0.5px;
	}

	input {
		background: var(--c-gray-lighter);
		border-radius: 100px;
		color: var(--c-gray-darkest);
		font-size: 16px;
		margin-left: 10px;
		line-height: 16px;
		min-height: 44px;
		min-width: 44px;
		padding: 10px;

		&::placeholder {
			color: var(--c-gray-light);
		}
	}
</style>

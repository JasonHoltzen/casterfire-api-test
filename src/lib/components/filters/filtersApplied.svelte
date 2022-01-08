<script>
	import { appliedFilters, filters } from '$stores/filters.js';
	import { getUiFilterText } from '$stores/filter_utils.js';
	import RemoveFilterButton from '$components/filters/removeFilterButton.svelte';
	import RemoveIconHover from '$icons/matdes/CloseCircle.svelte';
	import RemoveIcon from '$icons/matdes/CloseCircleOutline.svelte';
	import ClearAllHoverIcon from '$icons/matdes/FilterRemove.svelte';
	import ClearAllIcon from '$icons/matdes/FilterRemoveOutline.svelte';
	import { slide, fade } from 'svelte/transition';

	const RemoveIconProps = {
		color: 'var(--c-gray-dark)',
		width: '20px',
		height: '20px',
		size: '20px',
		viewBox: '0 0 24 24'
	};
	const removeIconHoverProps = {
		color: 'var(--c-gray-dark)',
		width: '20px',
		height: '20px',
		size: '20px',
		viewBox: '0 0 24 24'
	};

	const clearIconProps = {
		color: 'var(--c-p-dark)',
		width: '20px',
		height: '20px',
		size: '20px',
		viewBox: '0 0 24 24'
	};
	const clearIconHoverProps = {
		color: 'var(--c-gray-dark)',
		width: '20px',
		height: '20px',
		size: '20px',
		viewBox: '0 0 24 24'
	};
</script>

{#if $appliedFilters.length > 0}
	<ul transition:slide>
		<li transition:fade|local>
			<RemoveFilterButton on:clicked={() => filters.clearAll()}>
				<svelte:fragment slot="buttonText">Clear All</svelte:fragment>
				<ClearAllIcon {...clearIconProps} slot="defaultIcon" />
				<ClearAllHoverIcon {...clearIconHoverProps} slot="hoveredIcon" />
			</RemoveFilterButton>
		</li>
		{#each $appliedFilters as _filter}
			<li transition:fade|local>
				<RemoveFilterButton on:clicked={() => filters.remove(_filter.key)}>
					<svelte:fragment slot="buttonText">
						{getUiFilterText(_filter)}
					</svelte:fragment>
					<RemoveIcon {...RemoveIconProps} slot="defaultIcon" />
					<RemoveIconHover {...removeIconHoverProps} slot="hoveredIcon" />
				</RemoveFilterButton>
			</li>
		{/each}
	</ul>
{/if}

<style lang="scss">
	ul {
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 5px;
		width: 100%;

		@include respond('sm') {
			flex-flow: column nowrap;
			flex: 1 1 auto;
		}

		li {
			flex: 0 0 auto;
			display: inline-flex;
			max-width: 40%;

			@include respond('sm') {
				max-width: 100%;
				flex: 1 0 100%;
				width: 100%;
			}
		}
	}
</style>

<script>
	import Dropdown from '$components/ui/basic/dropdownReveal.svelte';
	export let labelText = 'No LabelText';
	export let id = '';
	export let ddBgColor = 'var(--c-s-dark)';

	let staticProps = {
		btnIconColor: 'var(--c-gray-lighter)',
		btnIconColorTog: 'var(--c-gray)',
		btnTextColor: 'var(--gray-lighter)',
		btnTextColorTog: 'var(--c-s-dark)',
		btnBgColor: 'var(--c-s-dark)',
		btnBgColorTog: 'var(--c-s-lighter)',
		btnBorderColor: 'var(--c-s-lighter)',
		btnBorderColorTog: 'var(--c-s-lighter)',
		ddBorderColor: 'var(--c-s-lighter)'
	};
</script>

<Dropdown {...staticProps} {labelText} {id} {ddBgColor}>
	<slot name="content" slot="content">
		<ul>
			<li>No</li>
			<li>Content</li>
			<li>Provided</li>
			<li><br /></li>
			<li>Hey there!</li>
			<li>Oof, our dev must have messed something up somewhere</li>
			<li>Please let him know:</li>
			<li><a href="mailto:jason@holtzen.rocks">Jason@Holtzen.Rocks</a></li>
		</ul>
	</slot>
</Dropdown>

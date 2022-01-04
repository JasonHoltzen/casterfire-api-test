export function outClick(node) {
	const handleClick = (event) => {
		if (!node.contains(event.target)) {
			node.dispatchEvent(new CustomEvent('clickout'));
		}
	};

	const handleKey = (event) => {
		if (event.key === 'Escape') {
			node.dispatchEvent(new CustomEvent('clickout'));
		}
	};

	document.addEventListener('click', handleClick, true);
	document.addEventListener('keydown', handleKey, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
			document.removeEventListener('keydown', handleKey, true);
		}
	};
}

export function clickOutside(node) {
	const handleClick = (event) => {
		if (!node.contains(event.target)) {
			node.dispatchEvent(new CustomEvent("outclick"));
		}
	};

	document.addEventListener("mousedown", handleClick, true);

	return {
		destroy() {
			document.removeEventListener("mousedown", handleClick, true);
		}
	};
}

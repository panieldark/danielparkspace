// Dark Theme button toggling
function toggleDarkTheme() {
	var element = document.body;

	element.classList.toggle("dark-mode");

	$(".toggle").toggleClass(["list-group-item", "list-group-item-modified"]);
}

// Dark Theme button toggling
function toggleDarkTheme() {
	var element = document.body;

	element.classList.toggle("dark-mode");

	$(".toggle").toggleClass(["list-group-item", "list-group-item-modified"]);

	// Normal to dark: peach text
	$(".mr14, .mr145b, h1, h2, h3, h4, h5").toggleClass(["peach"]);

	// Normal to dark: white text
	$(".summary-text").toggleClass(["white"]);
}

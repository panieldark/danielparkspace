// Dark Theme button toggling
function toggleDarkTheme() {
	$("body").addClass("init");
	$("body").toggleClass(["dark-mode", "light-mode"]);

	// toggle peach text
	$(".mr14, .mr145b, h1, h2, h3, h4, h5").addClass(["peach-init"]);
	$(".mr14, .mr145b, h1, h2, h3, h4, h5").toggleClass(["peach", "non-peach"]);

	// toggle white text
	$(".summary-text").toggleClass(["white", "gray"]);
	$(".tooltips").addClass(["tt-init"]);
	$(".tooltips").toggleClass(["white-tooltips", "gray-tooltips"]);
}

// Dark Theme button toggling
if (localStorage.getItem("dark") == "on") {
	toggleDarkTheme(false);
}

function toggleDarkTheme(toggle) {
	// param toggle: if user just clicked, or not
	if (toggle == false) {
		manuallyToggleSlider();
	}
	// Toggle dark theme storage setting
	else if (localStorage.getItem("dark") == "on") {
		localStorage.setItem("dark", "off");
	} else {
		localStorage.setItem("dark", "on");
	}

	$(".switch").css("pointer-events", "none");
	$("body").addClass("init");
	$("body").toggleClass(["dark-mode", "light-mode"]);

	// toggle peach text
	$(".mr14, .mr145b, h1, h2, h3, h4, h5").addClass(["peach-init"]);
	$(".mr14, .mr145b, h1, h2, h3, h4, h5").toggleClass(["peach", "non-peach"]);

	// toggle white text
	$(".summary-text").toggleClass(["white", "gray"]);
	$(".tooltips").addClass(["tt-init"]);
	$(".tooltips").toggleClass(["white-tooltips", "gray-tooltips"]);

	// Add animation to sun
	$(".sun").addClass("animate__animated");

	setTimeout(function () {
		$(".switch").css("pointer-events", "auto");
	}, 1250);
}

function manuallyToggleSlider() {
	// if loading dark theme from localstorage
	setTimeout(function () {
		$("#slider-checkbox").prop("checked", true);
	}, 200);
}

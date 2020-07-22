btn_start.addEventListener("click", function () {
	routeView("quiz");
});
btn_submit.addEventListener("click", function () {
	getAnswer();
});
btn_previous.addEventListener("click", function () {
	decrementQuestion();
});
btn_hint.addEventListener("click", function () {
	getHint();
});
btn_next.addEventListener("click", function () {
	incrementQuestion();
});
document.addEventListener("DOMContentLoaded", function () {
	routeView("landing");
});
btn_help.addEventListener("click", function () {
	getHelp();
});

/* JavaScript code for the website */
const colorInput = document.getElementById("color-input");
const colorButton = document.getElementById("color-button");

colorButton.addEventListener("click", () => {
	const color = colorInput.value;
	changeBackgroundColor(color);
});

function changeBackgroundColor(color) {
	document.body.style.backgroundColor = color;
}

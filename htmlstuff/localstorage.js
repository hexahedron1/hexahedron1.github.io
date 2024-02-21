let input = document.getElementById("input");
let savebtn = document.getElementById("savebtn");
let output = document.getElementById("output");

function save() {
	localStorage.setItem("localstorage-test", input.value);
	input.value = "";
	savebtn.InnerHTML = "Saved!";
}

function remember() {
	let item = localStorage.getItem("localstorage-test");
	output.innerHTML = item == '' ? "I forgor" : `I remember ${item}`;
}
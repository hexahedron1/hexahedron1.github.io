let label = document.getElementById("random message");

let messages = [
	"no framework involved 👍",
	"made in 2024",
	"this is a random message",
	"<label style=\"color: #00aaff\">int</label> <label style=\"color: #cccccc\">qwertyuiop</label>[]",
	`you are looking at ~${window.location.pathname}`,
	`let random = Math.floor(Math.random() * messages.length);
label.innerHTML = messages[random];`,
	"not a number!",
	"not educational!"
]

let random = Math.floor(Math.random() * messages.length);
label.innerHTML = messages[random];
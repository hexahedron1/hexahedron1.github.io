let label = document.getElementById("random message");

let messages = [
	"no framework involved 👍",
	"made in 2024",
	"this is a random message",
	"int qwertyuiop[]",
	`you are looking at ${window.location.pathname.substring(1)} //this actually depends on the page filename`,
	"you are looking at ${window.location.pathname.substring(1)}",
	`let random = Math.floor(Math.random() * messages.length);
label.innerHTML = messages[random];`,
	"not a number!",
	"not educational!",
	"Fun fact: this random message picker uses only 5 lines of code (excluding the message array)",
	"Welcome to Gboard clipboard, any text you copy will be saved here.",
	"i rember ❗",
  "i forgor ❓",
	"i know your ip address",
	"Fun fact: the largest file on this website is style.css, which has 123 lines of code"
]
function randomize() {
	let random = Math.floor(Math.random() * messages.length);
	label.innerHTML = messages[random].split("//")[0];
}
function sendAllMessages() {
	let h = ""
	for (let i = 0; i < messages.length; i++) {
		h += messages[i] + "\n"
	}
	alert(h)
}
randomize()
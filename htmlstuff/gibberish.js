let label = document.getElementById("output");
let charCheck = document.getElementById("special chars");
let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345678~!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/";
let alnum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
function gibberish(length) {
	let array = charCheck.checked ? chars : alnum;
	let out = "";
	for (let i = 0; i < length; i++) {
		out += array[Math.floor(Math.random() * (array.length))];
	}
	return out;
}

function generate(l) {
	try {
		let a = gibberish(l);
		label.innerHTML = a;
		console.log(a);
	} catch (e) {
		console.error(e);
		alert(`An error occured. If this persists, please open an issue on the github page.
${e}`);
	}
}
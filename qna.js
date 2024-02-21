let button = document.getElementById("ip button");
function checkIp() {
	try {
	button.disabled = true;
		fetch('https://api64.ipify.org?format=json')
		.then(response => response.json())
		.then(data => alert(`${data.ip}
PS: this is not stored anywhere`))
		.catch(error => console.error(error));
		button.disabled = false;
	} catch (e) {
		console.error(e);
		alert(`An error occured. If this persists, please open an issue on the github page.
	${e}`);
	}
}
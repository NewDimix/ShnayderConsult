function mondaySale() {
	let dataSale = document.getElementById("dataSale");

	let date = new Date();
	let monday = new Date();
	if (date.getDay()) {
		monday.setDate(date.getDate() + 8 - date.getDay());
	} else {
		monday.setDate(date.getDate() + 1);
	}

	dataSale.textContent = ("0" + monday.getDate()).slice(-2) + "." + ("0" + (monday.getMonth() + 1)).slice(-2) + "." + ("0" + monday.getFullYear()).slice(-2);
}

mondaySale();

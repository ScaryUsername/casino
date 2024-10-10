function gamble() {
	let number = Math.random(1,10);
	document.getElementById("button").disabled = true;
	alert("Let's go gambling!!");
	let input = prompt("Enter a number between 1 and 10:");
	if (input == number) {
		alert("i cant stop winning!");
    document.getElementById("button").disabled = false;
	} else {
		alert("aw dang it!")
    document.getElementById("button").disabled = false;
	}
}

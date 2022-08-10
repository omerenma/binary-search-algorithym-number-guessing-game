window.addEventListener("DOMContentLoaded", () => {
	let submit = document.querySelector(".submit");
	let input_value = document.querySelector("#input_value");
	let answer = document.querySelector(".answer");

	const guesNumber = (arr, val) => {
		let start = 0;
		let end = arr.length - 1;

		while (start <= end) {
			let middle = Math.floor((end + start) / 2);
			console.log(arr[middle] < val, "miarr[middle] < valddle");
			if (arr[middle] < val) {
				start = middle + 1;
			} else if (arr[middle] > val) {
				end = middle - 1;
			} else {
				alert(`Your guess was correct at ${middle}`);
				`Your answer is : ${(answer.innerHTML = arr[middle])}`;
				return;
			}
		}
		return alert("Your guess was wrong!");
	};

	let data = [
		// 2, 4, 6, 8, 9, 10, 20, 22, 30, 35, 36, 37, 38, 39, 40, 55, 56, 60, 67, 68,
		"abuja",
		"benue",
		"calaba",
		"delta",
		"edo",
	];

	submit.addEventListener("click", () => {
		let num = parseInt(input_value.value);
		let str = input_value.value;
		guesNumber(data, str);
		num = "";
	});
});

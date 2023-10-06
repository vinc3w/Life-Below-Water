const submitBtn = document.getElementById("submit-btn");
const btnContainers = document.getElementsByClassName("btn-container");

for (const btnContainer of btnContainers) {

	const unselectAllBtn = () => {
		for (const btn of btnContainer.children)
			btn.classList.remove("selected");
	}

	for (const btn of btnContainer.children) {
		btn.addEventListener("click", () => {
			unselectAllBtn();
			btn.classList.add("selected");
		})
	}

}

submitBtn.addEventListener("click", () => {
	alert("Thank you for your kind donation.");
})

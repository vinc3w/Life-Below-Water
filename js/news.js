import readFile from "../utils/readFile.js";

function insertBoxes(news, updates, filter) {

	const newsContainer = document.getElementById("news-container");
	const updatesContainer = document.getElementById("updates-container");

	newsContainer.innerHTML = "";
	updatesContainer.innerHTML = "";

	news.forEach(n => {
		if (filter && !n.title.toLowerCase().includes(filter.toLowerCase())) return;
		newsContainer.insertAdjacentHTML(
			"beforeend",
			/*html*/`
				<div class="box">
					<div class="image" style="background: url('${n.image_link}')"></div>
					<div class="text" title="${n.title}">
						<p class="title">${n.title}</p>
						<p class="date">${n.date}</p>
					</div>
				</div>
			`
		);
	})

	updates.forEach(u => {
		if (filter && !u.title.toLowerCase().includes(filter.toLowerCase())) return;
		updatesContainer.insertAdjacentHTML(
			"beforeend",
			/*html*/`
				<div class="box">
					<div class="image" style="background: url('${u.image_link}')"></div>
					<div class="text" title="${u.title}">
						<p class="title">${u.title}</p>
						<p class="date">${u.date}</p>
					</div>
				</div>
			`
		);
	})

}

async function main() {
	
	const { news, updates } = await readFile("./../res/data/news.json");

	const urlParams = new URLSearchParams(window.location.search);
	insertBoxes(news, updates, urlParams.get("news"));

}

main();

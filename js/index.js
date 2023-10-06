import readFile from "../utils/readFile.js";

async function main() {

	const newsContainer = document.getElementById("news-container");
	const { news } = await readFile("./../res/data/news.json");

	for (let i = 0; i < 3; i++) {
		newsContainer.insertAdjacentHTML(
			"beforeend",
			/*html*/`
				<div class="box">
					<div class="image" style="background: url('${news[0].image_link}')"></div>
					<div class="text">
						<p class="title">${news[0].title}</p>
						<p class="date">${news[0].date}</p>
					</div>
				</div>
			`
		);
	}

	const imageContainer = document.getElementById("image-container");
	const { images } = await readFile("./../res/data/resources.json");

	images.forEach(image => {
		imageContainer.insertAdjacentHTML(
			"beforeend",
			/*html*/`
				<img src="${image}" alt="" />
			`
		);
	})

}

main();

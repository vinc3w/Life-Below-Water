import readFile from "../utils/readFile.js";

async function main() {
	
	const { images, videos } = await readFile("./../res/data/resources.json");

	const imageContainer = document.getElementById("image-container");
	const videoContainer = document.getElementById("video-container");

	images.forEach(image => {
		imageContainer.insertAdjacentHTML(
			"beforeend",
			/*html*/`
				<img src="${image}" alt="" />
			`
		);
	})

	videos.forEach(video => {
		videoContainer.insertAdjacentHTML(
			"beforeend",
			/*html*/`
			<video controls>
				<source src="${video}" type="video/mp4">
			</video> 
			`
		);
	})

}

main();

async function readFile(url) {
	const res = await fetch(url);
	return await res.json();
}

export default readFile;

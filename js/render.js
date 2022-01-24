const $pageIndicator = document.querySelector(".page-indicator");
const $catContainer = document.querySelector(".cat-container");
let currentPage = 0;

function clearCatContainer() {
	$catContainer.textContent = null;
}

function updateImgs(urls) {
	$catContainer.textContent = null;
	urls.forEach((url) => {
		const img = document.createElement("img");
		img.src = url;
		$catContainer.append(img);
	});
}

function updatePageIndicator(dir) {
	if (dir === "next") {
		currentPage++;
	} else if (dir === "previous") {
		currentPage--;
	}
	$pageIndicator.textContent = currentPage;
}

function renderLoader() {
	clearCatContainer();
	const loadingIndicator = document.createElement("div");
	loadingIndicator.classList.add("loader");
	$catContainer.append(loadingIndicator);
}

function renderError() {
	clearCatContainer();
	const errorMessage = document.createElement("p");
	errorMessage.classList.add("error-message");
	errorMessage.textContent =
		"Something went wrong while fetching data from the server!";
	$catContainer.append(errorMessage);
}

export {
	currentPage,
	updateImgs,
	updatePageIndicator,
	renderLoader,
	renderError,
};

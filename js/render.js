const $pageIndicator = document.querySelector(".page-indicator");
const $catContainer = document.querySelector(".cat-container");
let currentPage = 0;

function clearCatContainer() {
	$catContainer.textContent = null;
}

function renderImgs(urls) {
	$catContainer.textContent = null;
	urls.forEach((url) => {
		const img = document.createElement("img");
		img.src = url;
		$catContainer.append(img);
	});
}

function renderPageIndicator(direction) {
	if (direction === "next") {
		currentPage++;
	} else if (direction === "previous") {
		currentPage--;
	}
	$pageIndicator.textContent = currentPage;
}

function renderSpinner() {
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
	renderImgs,
	renderPageIndicator,
	renderSpinner,
	renderError,
};

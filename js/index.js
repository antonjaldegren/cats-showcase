const $catContainer = document.querySelector(".cat-container");
const $imgs = document.querySelectorAll(".cat-container img");
const $pageIndicator = document.querySelector(".page-indicator");
const $buttons = document.querySelectorAll("button");
const $previousButton = document.querySelector(".previous");
const $nextButton = document.querySelector(".next");
let currentPage = 0;

function clearCatContainer() {
	$catContainer.textContent = null;
}
async function fetchCats(page) {
	$buttons.forEach((button) => (button.disabled = true));

	clearCatContainer();
	const loadingIndicator = document.createElement("div");
	loadingIndicator.classList.add("loader");
	$catContainer.append(loadingIndicator);

	try {
		const response = await fetch(
			`https://api.thecatapi.com/v1/images/search?limit=12&page=${page}&order=ASC`,
			{
				headers: {
					"x-api-key": "2903f1f9-e07e-43eb-95d8-b23b0ea44484",
				},
			}
		);
		const data = await response.json();
		updateImgs(data.map(({ url }) => url));
	} catch {
		clearCatContainer();

		const errorMessage = document.createElement("p");
		errorMessage.classList.add("error-message");
		errorMessage.textContent =
			"Something went wrong while fetching data from the server!";

		$catContainer.append(errorMessage);
	}

	$pageIndicator.textContent = currentPage;
	$nextButton.disabled = false;
	if (currentPage !== 0) $previousButton.disabled = false;
}

function updateImgs(urls) {
	$catContainer.textContent = null;
	urls.forEach((url) => {
		const img = document.createElement("img");
		img.src = url;
		$catContainer.append(img);
	});
}

$buttons.forEach((button) => {
	button.addEventListener("click", () => {
		if (button.classList.contains("next")) {
			currentPage++;
		} else if (button.classList.contains("previous")) {
			currentPage--;
		}
		fetchCats(currentPage);
	});
});

fetchCats(currentPage);

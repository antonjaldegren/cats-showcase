import {
	currentPage,
	updatePageIndicator,
	renderError,
	renderLoader,
	updateImgs,
} from "./render.js";

const $buttons = document.querySelectorAll("button");
const $previousButton = document.querySelector(".previous");
const $nextButton = document.querySelector(".next");

function disableButtons() {
	$buttons.forEach((button) => (button.disabled = true));
}

function enableButtons() {
	$nextButton.disabled = false;
	if (currentPage !== 0) $previousButton.disabled = false;
}

async function fetchCats() {
	disableButtons();
	renderLoader();
	try {
		const response = await fetch(
			`https://api.thecatapi.com/v1/images/search?limit=12&page=${currentPage}&order=ASC`,
			{
				headers: {
					"x-api-key": "2903f1f9-e07e-43eb-95d8-b23b0ea44484",
				},
			}
		);
		const data = await response.json();
		updateImgs(data.map(({ url }) => url));
	} catch {
		renderError();
	}
	enableButtons();
}

$buttons.forEach((button) => {
	button.addEventListener("click", () => {
		updatePageIndicator(button.classList[0]);
		fetchCats();
	});
});

fetchCats();

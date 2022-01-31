import.meta.hot;
import {
	currentPage,
	renderPageIndicator,
	renderError,
	renderSpinner,
	renderImgs,
} from "./render.js";

const { SNOWPACK_PUBLIC_API_KEY } = __SNOWPACK_ENV__;
const $buttons = document.querySelectorAll("button");
const $previousButton = document.querySelector(".previous");
const $nextButton = document.querySelector(".next");

function disableButtons() {
	$buttons.forEach((button) => button.setAttribute("disabled", true));
}

function enableButtons() {
	$nextButton.disabled = false;
	currentPage && $previousButton.removeAttribute("disabled");
}

async function fetchCats() {
	renderSpinner();
	disableButtons();
	try {
		const response = await fetch(
			`https://api.thecatapi.com/v1/images/search?limit=12&page=${currentPage}&order=ASC`,
			{
				headers: {
					"x-api-key": SNOWPACK_PUBLIC_API_KEY,
				},
			}
		);
		const data = await response.json();
		renderImgs(data.map(({ url }) => url));
	} catch {
		renderError();
	} finally {
		enableButtons();
	}
}

$buttons.forEach((button) => {
	button.addEventListener("click", () => {
		renderPageIndicator(button.classList[0]);
		fetchCats();
	});
});

fetchCats();

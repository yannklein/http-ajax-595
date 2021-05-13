// imports
import { fetchMovies, searchMovies } from './movies';
import { initSortable } from './plugins/initSortable';
import { initMarkdownIt } from './plugins/markdownIt';
import { initSelect2 } from './plugins/initSelect2';

// element selection
const button = document.querySelector("#submit");

// function calls
fetchMovies('batman');
initSortable();
initMarkdownIt();
initSelect2();

// event listeners
button.addEventListener("click", searchMovies);
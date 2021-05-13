// ES5 
// const MarkdownIt = require('markdown-it'); 
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const initMarkdownIt = () => {
  const editor = document.querySelector("#editor");
  const preview = document.querySelector("#preview");

  editor.addEventListener("keyup", (event) => {
    const result = md.render(event.currentTarget.value);
    preview.innerHTML = result;
  });
}

export { initMarkdownIt };
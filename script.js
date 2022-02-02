const notesEl = document.querySelector(".notes");
const editBtn = document.querySelector(".edit");
const deleteBtn = document.querySelector(".delete");

const main = notesEl.querySelector(".main");
const textArea = notesEl.querySelector("textarea");

editBtn.addEventListener("click", () => {
  main.classList.toggle("hidden");
  textArea.classList.toggle("hidden");
});

textArea.addEventListener("input", (e) => {
  e.preventDefault();
  const { value } = e.target;
  console.log(marked.parse(value));
  main.innerHTML = marked.parse(value);
});

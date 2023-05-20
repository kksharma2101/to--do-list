const item = document.querySelector("#item");
const todoList = document.querySelector(".to-do-box");

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addList(this.value);
    this.value = "";
  }
  // console.log(this.value);
});

function addList(item) {
  const createLi = document.createElement("li");
  createLi.innerHTML = `${item} <i class="fas fa-times"></i>`;

  createLi.addEventListener("click", function () {
    this.classList.toggle("change");
  });

  createLi.querySelector("i").addEventListener("click", function () {
    createLi.remove();
  });

  todoList.appendChild(createLi);
}
addList();

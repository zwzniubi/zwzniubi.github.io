const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const timerDisplay = document.getElementById("timer");

let minutes = 25;
let seconds = 0;
let interval;

startBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(countdown, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  minutes = 25;
  seconds = 0;
  updateDisplay();
});

function countdown() {
  if (seconds === 0 && minutes === 0) {
    clearInterval(interval);
  } else if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }
  updateDisplay();
}

function updateDisplay() {
  const formattedSeconds = seconds.toString().padStart(2, "0");
  timerDisplay.textContent = `${minutes}:${formattedSeconds}`;
}

// To-Do List
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const clearTasksBtn = document.getElementById("clear-tasks");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});

function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText) {
    const listItem = document.createElement("li");
    listItem.classList.add("flex", "items-center", "my-2", "p-2", "rounded", "shadow", "bg-white");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("mr-2");
    checkbox.addEventListener("change", () => {
      listItem.classList.toggle("line-through");
    });

    listItem.appendChild(checkbox);

    const textNode = document.createTextNode(todoText);
    listItem.appendChild(textNode);

    todoList.appendChild(listItem);
    todoInput.value = "";
  }
}

clearTasksBtn.addEventListener("click", () => {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
});

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
  event.preventDefault();

  var taskNameInput = document.querySelector("input[name = 'task-name']").value;
  var taskTypeInput = document.querySelector(
    "select[name = 'task-type']"
  ).value;
  console.log(taskTypeInput);

  // create list itme - created list item to hold the whole task
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add item to list
  var taskInfoEl = document.createElement("div");
  // give it a class name
  taskInfoEl.className = "task-info";

  // add HTML content to div - once data set into the div, we append to the li
  taskInfoEl.innerHTML =
    "<h3 class='task-name'>" +
    taskNameInput +
    "</h3><span class='take-type'>" +
    taskTypeInput +
    "</span>";

  listItemEl.appendChild(taskInfoEl);

  // then we append the entire li to the parent ul
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);

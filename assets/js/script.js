var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function (event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name = 'task-name']").value;
  var taskTypeInput = document.querySelector(
    "select[name = 'task-type']"
  ).value;

  //package up data as an object
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput,
  };

  //send it as an argument to createTaskEl
  createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {
  // create list item - created list item to hold the whole task
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add item to list
  var taskInfoEl = document.createElement("div");
  // give it a class name
  taskInfoEl.className = "task-info";

  // add HTML content to div - once data set into the div, we append to the li
  taskInfoEl.innerHTML =
    "<h3 class='task-name'>" +
    taskDataObj.name +
    "</h3><span class='take-type'>" +
    taskDataObj.type +
    "</span>";

  listItemEl.appendChild(taskInfoEl);

  // then we append the entire li to the parent ul
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);

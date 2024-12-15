document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
  
    form.addEventListener("submit", function (event) {

      event.preventDefault();

      const taskInput = document.getElementById("new-task-description");
      const taskValue = taskInput.value;
  
      if (taskValue.trim() === "") {
        alert("Task description cannot be empty!");
        return;
      }
  
      const newTask = document.createElement("li");
      newTask.textContent = taskValue;
  
      taskList.appendChild(newTask);
  
      taskInput.value = "";
    });
  });
  
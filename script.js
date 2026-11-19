
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {

    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    const listItem = document.createElement("li");

    listItem.textContent = task;

    listItem.addEventListener("click", function () {
        listItem.remove();
    });

    taskList.appendChild(listItem);

    taskInput.value = "";

});

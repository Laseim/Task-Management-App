let taskNameInput = document.getElementById("taskName");
let categoryInput = document.getElementById("category");
let deadlineInput = document.getElementById("deadline");
let statusInput = document.getElementById("status");
let addTaskButton = document.getElementById("addTask");

let tasks = [];

addTaskButton.addEventListener("click", function() {

    
    let task = {
        taskName: taskNameInput.value,
        category: categoryInput.value,
        deadline: deadlineInput.value,
        status: statusInput.value
    };

    
    tasks.push(task);

    
    console.log(tasks);

    taskNameInput.value = "";
    categoryInput.value = "";
    deadlineInput.value = "";
    statusInput.value = "In Progress";

});


function getTodaysDate() {
    var today = new Date();
    var options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    return today.toLocaleDateString('en-US', options);
}


document.getElementById('todaysDate').textContent = getTodaysDate();

function addTask() {
    var input = document.getElementById("taskInput");
    var priority = document.getElementById("prioritySelect");
    var deadline = document.getElementById("deadlineInput");
    var label = document.getElementById("labelInput");
    var task = input.value;
    var priorityValue = priority.value;
    var deadlineValue = deadline.value;
    var labelValue = label.value;

    if (task !== "") {
        var listItem = document.createElement("li");
        listItem.innerHTML = task + " (Priority: " + priorityValue + ", Deadline: " + deadlineValue + ", Label: " + labelValue + ") <span class='delete-btn' onclick='removeTask(this)'>Delete</span>";
        document.getElementById("taskList").appendChild(listItem);
        input.value = "";
        deadline.value = "";
        label.value = "";
    }
}

function removeTask(element) {
    element.parentNode.remove();
}

document.getElementById("addTaskBtn").addEventListener("click", addTask);

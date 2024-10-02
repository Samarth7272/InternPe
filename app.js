document.getElementById("addTaskBtn").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keydown", function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  
  if (taskText !== "") {
    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function() {
      li.remove();
    });

    li.appendChild(deleteBtn);
    
    li.addEventListener("click", function() {
      li.classList.toggle("completed");
    });

    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}
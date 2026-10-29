 // Get elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

// Basic array
let tasks = [];

// Add Task Function
function addTask() {
  
  // Get input value
  const taskValue = taskInput.value.trim();
  
  // Check if input is empty
  if (taskValue === "") {
    message.textContent = "Please enter a task.";
    return;
  }
  
  // Clear message
  message.textContent = "";
  
  // Add task to array
  tasks.push(taskValue);
  
  // Create li
  const li = document.createElement("li");
  li.className = "task";
  
  // Create task text
  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskValue;
  
  // Create Complete button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.className = "complete-btn";
  
  // Create Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  
  // Complete task
  completeBtn.addEventListener("click", function() {
    span.classList.toggle("completed");
  });
  
  // Delete task
  deleteBtn.addEventListener("click", function() {
    li.remove();
  });
  
  // Add elements to li
  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  
  // Add li to ul
  taskList.appendChild(li);
  
  // Clear input
  taskInput.value = "";
}

// Add button event
addBtn.addEventListener("click", addTask);

// Use querySelector()
const input = document.querySelector("#taskInput");

// Press Enter to add task
input.addEventListener("keydown", function(event) {
  
  if (event.key === "Enter") {
    addTask();
  }
  
});
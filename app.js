 // Select elements
 const taskInput = document.getElementById('taskInput');
 const addTaskButton = document.getElementById('addTaskButton');
 const taskList = document.getElementById('taskList');

 // Function to get the current date in YYYY-MM-DD format
 function getCurrentDate() {
     const now = new Date();
     const year = now.getFullYear();
     const month = (now.getMonth() + 1).toString().padStart(2, '0');
     const day = now.getDate().toString().padStart(2, '0');
     return `${year}-${month}-${day}`;
 }

 // Add event listener to the button
 addTaskButton.addEventListener('click', function() {
     const taskText = taskInput.value.trim(); // Get the task input value and trim whitespace
     if (taskText === '') {
         alert('Task cannot be empty!'); // Show an alert if the input is empty
         return;
     }

     const dueDate = getCurrentDate(); // Get the current date
     const li = document.createElement('li'); // Create a new list item
     li.classList.add('flex', 'items-center', 'mb-2');

     const text = document.createElement('span'); // Create a span for task text
     text.textContent = taskText;

     const date = document.createElement('span'); // Create a span for due date
     date.textContent = ` (${dueDate})`;
     date.classList.add('ml-4', 'text-gray-600');

     const editButton = document.createElement('button'); // Create an edit button
     editButton.textContent = 'Edit';
     editButton.classList.add('ml-4', 'text-yellow-500', 'hover:text-yellow-700');

     const deleteButton = document.createElement('button'); // Create a delete button
     deleteButton.textContent = 'Delete';
     deleteButton.classList.add('ml-4', 'text-red-500', 'hover:text-red-700');

     // Append elements to `li`
     li.appendChild(text);
     li.appendChild(date);
     li.appendChild(editButton);
     li.appendChild(deleteButton);

     // Add the list item to the task list
     taskList.appendChild(li);

     // Clear the input field
     taskInput.value = '';

     // Add event listener to the edit button
     editButton.addEventListener('click', function() {
         const newTaskText = prompt('Edit your task:', text.textContent.replace(' ( ', '').replace(')', ''));
         if (newTaskText !== null && newTaskText.trim() !== '') {
             text.textContent = newTaskText; // Update task text if it's not empty
         } else if (newTaskText === null) {
             // User pressed Cancel, do nothing
         } else {
             alert('Task cannot be empty!'); // Show an alert if the new text is empty
         }
     });

     // Add event listener to the delete button
     deleteButton.addEventListener('click', function() {
         taskList.removeChild(li); // Remove the task item
     });
 });
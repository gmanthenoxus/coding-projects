const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');

        function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText === '') return;

            const taskItem = document.createElement('li');
            taskItem.className = 'taskItem';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', toggleTask);

            const taskLabel = document.createElement('label');
            taskLabel.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.className = 'deleteButton';
            deleteButton.addEventListener('click', deleteTask);

            taskItem.appendChild(checkbox);
            taskItem.appendChild(taskLabel);
            taskItem.appendChild(deleteButton);

            taskList.appendChild(taskItem);

            taskInput.value = ''; 
        }
        
        function toggleTask(event) {
            const taskLabel = event.target.nextSibling;
            taskLabel.style.textDecoration = event.target.checked ? 'line-through' : 'none';
        }

        function deleteTask(event) {
            const taskItem = event.target.parentElement;
            taskList.removeChild(taskItem);
        }

        taskInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                if (taskList.children.length >= 10){
                    taskList.removeChild(taskList.firstChild);
                    addTask();
                    for (let i = 0; i < taskList.children.length; i++) {
                        console.log(taskList.children[i].textContent);
                    }      
                }
                else
                    addTask();
            }
        });
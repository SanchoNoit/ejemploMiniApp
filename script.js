document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.textContent = taskText;

        const completeButton = document.createElement('button');
        completeButton.textContent = '✔';
        completeButton.style.marginLeft = '10px';

        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.appendChild(completeButton);
        taskList.appendChild(li);

        taskInput.value = '';
    });
});

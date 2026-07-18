document.addEventListener('DOMContentLoaded', () => {

    // Task Manager Setup
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    function attachTaskListeners(taskItem) {
        const completeBtn = taskItem.querySelector('.complete-btn');
        const deleteBtn = taskItem.querySelector('.delete-btn');

        if (completeBtn) {
            completeBtn.addEventListener('click', () => {
                taskItem.classList.toggle('completed');
            });
        }

        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => {
                taskItem.remove();
            });
        }
    }

    // Initialize list tracking
    if (taskList) {
        const existingTasks = taskList.querySelectorAll('.task-item');
        existingTasks.forEach(attachTaskListeners);
    }

    if (addTaskBtn && taskInput && taskList) {
        addTaskBtn.addEventListener('click', () => {
            const taskText = taskInput.value.trim();

            if (taskText === '') {
                alert('Please enter a task name first!');
                return;
            }

            const li = document.createElement('li');
            li.className = 'task-item';

            const textSpan = document.createElement('span');
            textSpan.textContent = taskText;
            li.appendChild(textSpan);

            const btnGroup = document.createElement('div');
            btnGroup.className = 'task-buttons';

            const completeBtn = document.createElement('button');
            completeBtn.className = 'complete-btn';
            completeBtn.textContent = '✓';

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = '✗';

            btnGroup.appendChild(completeBtn);
            btnGroup.appendChild(deleteBtn);
            li.appendChild(btnGroup);

            attachTaskListeners(li);
            taskList.appendChild(li);
            taskInput.value = '';
        });

        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addTaskBtn.click();
            }
        });
    }

    // Form Field Validation
    const contactForm = document.getElementById('portfolio-contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('user-name');
            const email = document.getElementById('user-email');
            const phone = document.getElementById('user-phone');
            const message = document.getElementById('user-message');

            const nameError = document.getElementById('name-error');
            const emailError = document.getElementById('email-error');
            const phoneError = document.getElementById('phone-error');
            const messageError = document.getElementById('message-error');

            let isValid = true;
            [nameError, emailError, phoneError, messageError].forEach(err => err.style.display = 'none');

            if (name.value.trim() === '') {
                nameError.style.display = 'block';
                isValid = false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value.trim())) {
                emailError.style.display = 'block';
                isValid = false;
            }

            const phonePattern = /^[0-9]+$/;
            if (!phonePattern.test(phone.value.trim())) {
                phoneError.style.display = 'block';
                isValid = false;
            }

            if (message.value.trim() === '') {
                messageError.style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                alert(`Thank you, ${name.value.trim()}! Your message has been sent successfully.`);
                contactForm.reset();
            }
        });
    }
});

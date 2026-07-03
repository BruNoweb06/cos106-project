document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. ACADEMIC PLANNER INTERACTIVE LOGIC
    // ==========================================
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    if (addTaskBtn && taskInput && taskList) {
        addTaskBtn.addEventListener('click', () => {
            const taskText = taskInput.value.trim();
            
            if (taskText === '') {
                alert('Please enter a task name first!');
                return;
            }

            // Create list element
            const li = document.createElement('li');
            li.className = 'task-item';

            // Create span text
            const textSpan = document.createElement('span');
            textSpan.textContent = taskText;
            li.appendChild(textSpan);

            // Create action button grouping
            const btnGroup = document.createElement('div');
            btnGroup.className = 'task-buttons';

            // Complete button (Toggle checkmark)
            const completeBtn = document.createElement('button');
            completeBtn.className = 'complete-btn';
            completeBtn.textContent = '✓';
            completeBtn.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            // Delete button (Remove element)
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = '✗';
            deleteBtn.addEventListener('click', () => {
                li.remove();
            });

            btnGroup.appendChild(completeBtn);
            btnGroup.appendChild(deleteBtn);
            li.appendChild(btnGroup);
            
            // Append task to the live UI list
            taskList.appendChild(li);
            
            // Reset input bar
            taskInput.value = '';
        });
    }

    // ==========================================
    // 2. CONTACT FORM VALIDATION LOGIC
    // ==========================================
    const contactForm = document.getElementById('portfolio-contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Stop form from broken page reloading

            // Grab individual inputs
            const name = document.getElementById('user-name');
            const email = document.getElementById('user-email');
            const phone = document.getElementById('user-phone');
            const message = document.getElementById('user-message');

            // Grab error display components
            const nameError = document.getElementById('name-error');
            const emailError = document.getElementById('email-error');
            const phoneError = document.getElementById('phone-error');
            const messageError = document.getElementById('message-error');

            // Reset error states
            let isValid = true;
            [nameError, emailError, phoneError, messageError].forEach(err => err.style.display = 'none');

            // Validation Rules
            if (name.value.trim() === '') {
                nameError.style.display = 'block';
                isValid = false;
            }

            // Regex checking for valid email formats
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value.trim())) {
                emailError.style.display = 'block';
                isValid = false;
            }

            // Regex checking if the numbers input contains ONLY digits
            const phonePattern = /^[0-9]+$/;
            if (!phonePattern.test(phone.value.trim())) {
                phoneError.style.display = 'block';
                isValid = false;
            }

            if (message.value.trim() === '') {
                messageError.style.display = 'block';
                isValid = false;
            }

            // Success feedback
            if (isValid) {
                alert(`Thank you, ${name.value.trim()}! Your message has been validated and simulated as sent successfully.`);
                contactForm.reset();
            }
        });
    }
});

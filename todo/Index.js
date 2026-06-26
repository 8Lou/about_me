gsap.to("h1", {
    text: "ToDo List",
    duration: 3, 
    repeat: 1, 
    repeatDelay: .7,
    ease: "power1.in",
    yoyo: false,
    delay: 1,
});


const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');

// Загружаем задачи из localStorage
let tasks = JSON.parse(localStorage.getItem('todoTasks')) || [];

// Отображаем сохранённые задачи
function renderTasks() {
    toDoContainer.innerHTML = '';
    tasks.forEach((task, index) => {
        const item = document.createElement('li');
        item.innerText = task.text;
        item.classList.add('toDoAdded');
        if (task.completed) {
            item.classList.add('toDoCompleted');
        }
        item.dataset.index = index;
        
        item.addEventListener('click', () => {
            task.completed = !task.completed;
            item.classList.toggle('toDoCompleted');
            saveTasks();
        });
        
        item.addEventListener('dblclick', () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });
        
        toDoContainer.appendChild(item);
    });
}

function saveTasks() {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
}

btn.addEventListener('click', () => {
    const text = inputField.value.trim();
    if (!text) return;
    
    tasks.push({ text, completed: false });
    saveTasks();
    renderTasks();
    inputField.value = '';
});

// Добавляем возможность добавлять по Enter
inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        btn.click();
    }
});

// Кнопка очистки всех задач
const clearBtn = document.querySelector('.btn-clear');
if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        if (tasks.length === 0) return;
        if (confirm('Delete all tasks?')) {
            tasks = [];
            saveTasks();
            renderTasks();
        }
    });
}

// Первоначальная отрисовка
renderTasks();

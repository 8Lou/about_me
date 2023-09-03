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

btn.addEventListener('click', ()=> {
    const item = document.createElement('li');
    item.innerText = inputField.value;
    item.classList.add('toDoAdded');
    toDoContainer.appendChild(item);
    inputField.value = '';
    item.addEventListener('click', ()=> {
        item.classList.add('toDoCompleted');
    })
    item.addEventListener('dblclick', ()=> {
        toDoContainer.removeChild(item);
    })
})


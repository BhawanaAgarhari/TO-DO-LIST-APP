const form = document.querySelector('form');
const input = document.querySelector('#new-task');
const ul = document.querySelector('#task-list');

form.addEventListener('submit' , (e) =>{
    e.preventDefault();
    const text =input.value.trim();
    if(text !==''){
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = text;
        const button = document.createElement('button');
        button.textContent ='Delete';
        li.appendChild(span);
        li.appendChild(button);
        ul.appendChild(li);
        input.value ='';
    }
});

ul.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
});
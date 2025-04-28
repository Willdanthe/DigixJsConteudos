let count = 1;
const list = document.querySelector('ol');

function addIem() {
    const item = document.createElement('li');
    item.textContent = `Item ${count++}`;
    list.appendChild(item);
}

function removeItem() {
    const  item = list.querySelector('li:last-child');
    // const  item = list.getElementsByTagName('li:fist-child')[0];
    list.removeChild(item);
    count--;
}

const buttonAdd = document.getElementById('add');
const buttonRemove = document.getElementById('remove');

buttonAdd.addEventListener('click',addIem);
buttonRemove.addEventListener('click',removeItem);
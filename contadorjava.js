const value = document.querySelector('#value');

function onIncrement(){
    value.innerHTML = `${pareseInt(value.innerText) + 1}`;
}

function onDecrement(){
    value.innerHTML = `${pareseInt(value.innerText) - 1}`;
}
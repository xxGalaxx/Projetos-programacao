const container= document.querySelectorAll('.container');
const color = document.querySelector('input');

const defaultcolor = '#fff';
container.style.backgroundcolor = `${defaultcolor}`;

function onechangebg(){
    container.style.backgroundcolor=`${color.value}`;
}
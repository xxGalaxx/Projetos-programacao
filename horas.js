const hour = document.querySelector('#hour');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() =>{
    let date= new date();
    let hour = date.gethours();
    let minutes = date.getminutes();
    let seconds = date.getseconds();

    hour.innerHTML = `${formattime(hour)}`;
    min.innerHTML = `${formattime(minutes)}`;
    sec.innerHTML = `${formattime(seconds)}`;

}, 1000);

function formattime(time){
    return time <10 ? "0" + time : time;
}
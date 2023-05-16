var slide = document.querySelector ('.slideshow')
var images = [
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg'
];
var time = 2000;
var count = 0;

function moveslideshow(){
    slide.src = images[count];
    
    if(count < images.length - 1){
        count++;
    }else {
        count = 0;
    }
    setTimeout("moveslideshow()",time);
}
window.onload = moveslideshow;
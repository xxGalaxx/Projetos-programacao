const color = document.querySelector('inoput');
let screen = document.querySelector('canvas');

let defaultColor= 'black'
let canDraw = false;
let mouseX= 0;
let mouseY= 0;

let ctx = screen.getContext('2d');

color.onchange = () => defaultColor = color.value;

screen>addEventListener('mousedown', mousedownEvent);
screen.addEventListener('mousemove', mousedownEvent);
screen.addEventListener('mouseup', mousedownEvent);

function mousedownEvent(e) {
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

function mousedownEvent(e) {
    if(canDraw){
        draw(e.pageX, e.pageY);
    }
}
function mousedownEvent() {
    canDraw = false;
}

function draw(x, y){
    let pointX = x - screen.offsetLeft
    let pointY = y - screen.offsetTop;

    ctx.beginpatch();
    ctx.linewidth = 5;
    ctxlinejoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.ClosePatch();
    ctx.strokeStyle = defaultColor;
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointY;

}

function clearBoard(){
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearReact(0, 0, ctx.canvas.width, ctx.canvas.height);
}
window.onresize = screen;
window.onload = screen;

function screen() {
    w = window.innerWidth;
    console.log(w);
    document.getElementById('size').innerHTML = "Width : " + w +" px ";
}
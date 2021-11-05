var last_position_of_X, last_position_of_Y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var width = screen.width;
new_width = screen.width - 70;
new height = screen.width - 300;
if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(a) {
    last_postion_of_x = a.touches[0].clientx - canvas.offsetLeft;
    last_postion_of_y = a.touches[0].clienty - canvas.offsetTop;
}
canvas.addEventListener("mouseUp", my_mouseUp);
function my_mouseUp(a) {
    last_postion_of_x = a.mouse[0].clientx - canvas.offsetLeft;
    last_postion_of_y = a.mouse[0].clienty - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(a) {
    current_position_of_touch_x = a.clientx - canvas.offsetLeft;
    current_position_of_touch_y = a.clienty - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = "44";
    ctx.moveTo(last_postion_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
    last_postiion_of_x = current_position_of_touch_x;
    last_postiion_of_y = current_position_of_touch_y;
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(a) {
    current_position_of_mouse_x = a.clientx - canvas.offsetLeft;
    current_position_of_mouse_y = a.clienty - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = "44";
    ctx.moveTo(last_postion_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
    last_postiion_of_x = current_position_of_mouse_x;
    last_postiion_of_y = current_position_of_mouse_y;
}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let isDrawing = false;

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

context.lineWidth = 5;
context.lineCap = 'round';
context.strokeStyle = '#0000ff';

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

function startDrawing(event) {
    isDrawing = true;
    draw(event);
}

function draw(event) {
    if (!isDrawing) return;

    const x = event.clientX - canvas.offsetLeft;
    const y = event.clientY - canvas.offsetTop;

    context.lineTo(x, y);
    context.stroke();
    context.beginPath();
    context.moveTo(x, y);
}

function stopDrawing() {
    isDrawing = false;
    context.beginPath();
}

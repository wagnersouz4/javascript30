const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); // where you draw things

// same size as the actual window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round'; // how segments a joined
ctx.lineCap = 'round'; // how the end points of every line are drawn
ctx.lineWidth = 500;
ctx.globalCompositeOperation = 'source-out';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) { return; }

    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;

    if (hue > 360) { hue = 0; }

    if (ctx.lineWidth === 500 || ctx.lineWidth === 1) {
        direction = !direction;
    }

    ctx.lineWidth = (direction) ? ctx.lineWidth + 1 : ctx.lineWidth - 1;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

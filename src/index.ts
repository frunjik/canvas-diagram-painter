import { Diagram } from "./diagram.js";
import { Pen } from "./pen.js";

const f = 1.8;
const width = f * 640;
const height = f * 480;

const unit = 40;
const fontSize = 24;

const canvas: HTMLCanvasElement = document.querySelector(
    "#canvas"
) as HTMLCanvasElement;
const context: CanvasRenderingContext2D = canvas?.getContext(
    "2d"
)! as CanvasRenderingContext2D;

function resize() {
    context.canvas.width = width;
    context.canvas.height = height;
    context.font = `${fontSize}px Tahoma`;
}

function render(context: CanvasRenderingContext2D) {
    const x = 200;
    const y = 500;
    
    const pen = new Pen(context);
    pen.unit = unit;

    d.render(pen, x, y);
}

const d = new Diagram();
d.unit = unit;

resize();
render(context);

// window.addEventListener('resize',function(){
//     context.canvas.width  = width;
//     context.canvas.height = height;
//     resize();
//     render(context);
// },false);

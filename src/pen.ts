import { Point } from "./point";

export class Pen {
    unit = 1;
    isDown = false;

    position: Point = {
        x: 0,
        y: 0,
    };

    constructor(public readonly context: CanvasRenderingContext2D) {}

    get x(): number {
        return this.position.x;
    }

    get y(): number {
        return this.position.y;
    }

    penUp() {
        this.isDown = false;
    }

    penDown() {
        this.isDown = true;
    }

    renderSW(x: number, y: number, w: number, h: number) {
        const hw = w / 2;
        const hh = h / 2;

        this.penDown();
        this.moveTo(x, y);
        this.moveRight(w);
        this.moveDown(h);
        this.moveLeft(hw);
        this.moveUp(hh);
        this.moveLeft(hw);
        this.moveUp(hh);
        this.penUp();
    }

    moveLeft(n: number) {
        this.moveTo(this.x - n * this.unit, this.y);
    }

    moveRight(n: number) {
        this.moveTo(this.x + n * this.unit, this.y);
    }

    moveUp(n: number) {
        this.moveTo(this.x, this.y - n * this.unit);
    }

    moveDown(n: number) {
        this.moveTo(this.x, this.y + n * this.unit);
    }

    moveTo(x: number, y: number) {
        this.position.x = x;
        this.position.y = y;
        if (this.isDown) {
            this.context.lineTo(x, y);
        } else {
            this.context.moveTo(x, y);
        }
    }
}

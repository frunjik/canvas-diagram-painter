import { Pen } from "./pen.js";

export class Diagram {
    unit = 1;

    renderCurrent(pen: Pen, x: number, y: number) {
        this.renderCurrentDatabase(pen, x, y);
        this.renderCurrentSql(pen, x, y - 2 * this.unit);
        this.renderCurrentXML(pen, x + 2 * this.unit, y - 6 * this.unit);
        this.renderCurrentJS(pen, x + 0 * this.unit, y - 6 * this.unit);
        this.renderCurrentClient(pen, x + 0 * this.unit, y - 8 * this.unit);
    }

    renderModern(pen: Pen, x: number, y: number) {
        this.renderModernDatabase(pen, x, y);
        this.renderModernSql(pen, x, y - 2 * this.unit);
        this.renderModernXML(pen, x, y - 4 * this.unit);
        this.renderModernServer(pen, x, y - 6 * this.unit);
        this.renderModernApi(pen, x, y - 8 * this.unit);
        this.renderModernClient(pen, x, y - 10 * this.unit);
    }

    render(pen: Pen, x: number, y: number) {
        const dist = 5;

        this.renderCurrent(pen, x, y + this.unit);
        this.renderModern(pen, x + this.unit * (10 + dist), y + 2 * this.unit);

        const context = pen.context;
        context.save();
        context.font = '48px Tahoma';
        context.fillText('Current', x + 1  * this.unit, y - 8 * this.unit);
        context.fillText('Modern', x + (11 + dist) * this.unit, y - 9 * this.unit);

        context.restore();
    }

    renderBox(
        pen: Pen,
        x: number,
        y: number,
        w: number,
        h: number,
        text: string
    ) {
        const context = pen.context;
        context.beginPath();

        pen.moveTo(x, y);
        pen.penDown();
        pen.moveRight(w);
        pen.moveDown(h);
        pen.moveLeft(w);
        pen.moveUp(h);
        pen.penUp();
        context.stroke();

        const metrics = context.measureText(text);
        const cx = x + (w * this.unit) / 2;

        context.fillText(text, cx - metrics.width / 2, y + this.unit * 1.2);
    }

    renderCurrentSql(pen: Pen, x: number, y: number) {
        const w = 6;
        const h = 2;
        const t = "SQL";
        this.renderBox(pen, x, y, w, h, t);
    }

    renderModernXML(pen: Pen, x: number, y: number) {
        const w = 4;
        const h = 2;
        const t = "XML";
        this.renderBox(pen, x, y, w, h, t);
    }

    renderModernSql(pen: Pen, x: number, y: number) {
        const t = "SQL";
        const context = pen.context;

        const lw = 6;
        const sw = 2;

        const lh = 4;
        const sh = 2;

        const metrics = context.measureText(t);
        const cx = x + (lw * this.unit) / 2;

        context.beginPath();
        pen.moveTo(x, y);
        pen.penDown();
        pen.moveRight(lw - sw);
        pen.moveUp(sh);
        pen.moveRight(sw);
        pen.moveDown(lh);
        pen.moveLeft(lw);
        pen.moveUp(sh);

        pen.penUp();
        context.stroke();

        context.fillText(t, cx - metrics.width / 2, y + this.unit * 1.2);
    }

    renderCurrentDatabase(pen: Pen, x: number, y: number) {
        const w = 8;
        const h = 2;
        const t = "Database";
        this.renderBox(pen, x, y, w, h, t);
    }

    renderModernServer(pen: Pen, x: number, y: number) {
        const w = 8;
        const h = 2;
        const t = "Server";
        this.renderBox(pen, x, y, w, h, t);
    }

    renderModernApi(pen: Pen, x: number, y: number) {
        const w = 8;
        const h = 2;
        const t = "API";
        this.renderBox(pen, x, y, w, h, t);
    }

    renderModernClient(pen: Pen, x: number, y: number) {
        const w = 8;
        const h = 2;
        const t = "Client";
        this.renderBox(pen, x, y, w, h, t);
    }

    renderModernDatabase(pen: Pen, x: number, y: number) {
        const t = "Database";
        const context = pen.context;

        const lw = 8;
        const sw = 2;

        const lh = 6;
        const sh = 2;

        const metrics = context.measureText(t);
        const cx = x + (lw * this.unit) / 2;

        context.beginPath();
        pen.moveTo(x, y);
        pen.penDown();
        pen.moveRight(lw - sw);
        pen.moveUp(lh - sh);
        pen.moveRight(sw);
        pen.moveDown(lh);
        pen.moveLeft(lw);
        pen.moveUp(sh);

        pen.penUp();
        context.stroke();

        context.fillText(t, cx - metrics.width / 2, y + this.unit * 1.2);
    }

    renderCurrentXML(pen: Pen, x: number, y: number) {
        const t = "XML";
        const context = pen.context;

        const lw = 4;
        const sw = 2;

        const lh = 4;
        const sh = 2;

        const metrics = context.measureText(t);
        const cx = x + (lw * this.unit) / 2;

        context.beginPath();
        pen.moveTo(x, y);
        pen.penDown();
        pen.moveRight(lw);
        pen.moveDown(lh);
        pen.moveLeft(sw);
        pen.moveUp(sh);
        pen.moveLeft(sw);
        pen.moveUp(sh);

        pen.penUp();
        context.stroke();

        context.fillText(t, cx - metrics.width / 2, y + this.unit * 1.2);
    }

    renderCurrentJS(pen: Pen, x: number, y: number) {
        const text = "JS";
        const context = pen.context;

        const lw = 4;
        const sw = 2;

        const lh = 4;
        const sh = 2;

        const metrics = context.measureText(text);
        const cx = x + (sw * this.unit);

        context.beginPath();
        pen.moveTo(x, y);
        pen.penDown();
        pen.moveRight(sw);
        pen.moveDown(sh);
        pen.moveRight(sw);
        pen.moveDown(sh);
        pen.moveLeft(lw);
        pen.moveUp(lh);

        pen.penUp();
        context.stroke();

        context.fillText(text, cx - metrics.width / 2, y + this.unit * 3.2);
    }

    renderCurrentClient(pen: Pen, x: number, y: number) {
        const text = "Client";
        const context = pen.context;

        const lw = 8;
        const sw = 2;

        const lh = 8;
        const sh = 2;

        const metrics = pen.context.measureText(text);
        const cx = x + (sw * this.unit * 2) / 1;

        context.beginPath();
        pen.moveTo(x, y);
        pen.penDown();
        pen.moveRight(lw);
        pen.moveDown(lh);
        pen.moveLeft(sw);
        pen.moveUp(lw - sh);
        pen.moveLeft(lw - sw);
        pen.moveUp(sh);

        pen.penUp();
        context.stroke();

        context.fillText(text, cx - metrics.width / 2, y + this.unit * 1.2);
    }
}

export class Node { // entity

    constructor() {
        this._background = ""
        this._x = 0;
        this._y = 0;
        this._width = 0;
        this._height = 0;
        this._text = 0;
        this._scaleX = 0
        this._scaleY = 0
        this._zIndex = 0
        this._scale = 0
        this._rotateY = 0
        this._rotate = 0
        this.elm = this._createElement();
        this.children = [];
    }

    get x() { return this._x; }
    set x(value) {
        this._x = value;
        this.elm.style.left = this._x + "px";
    }
    get y() { return this._y; }
    set y(value) {
        this._y = value;
        this.elm.style.top = this._y + "px";
    }

    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
        this.elm.style.width = this._width + "px";
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
        this.elm.style.height = this._height + "px";
    }
    get background() {
        return this._background;    
    }
    set background(value) {
        this._background = value;
        this.elm.style.backgroundImage = `url(${this.background})`;
    }
    get text() {
        return this._text;    
    }
    set text(value) {
        this._text = value;
        this.elm.textContent = value
    }
    get scaleX() {
        return this._scaleX;    
    }
    set scaleX(value) {
        this._scaleX = value;
        this.elm.style.transform = `scaleX(${this._scaleX})`
        // console.log()
    }
    get scaleY() {
        return this._scaleY;    
    }
    set scaleY(value) {
        this._scaleY = value;
        this.elm.style.transform = `scaleY(${this._scaleY})`
    }
    get rotateY() {
        return this._rotateY;    
    }
    set rotateY(value) {
        this._rotateY = value;
        this.elm.style.transform = `rotateY(${this._rotateY}deg)`
    }
    get rotate() {
        return this._rotate;    
    }
    set rotate(value) {
        this._rotateY = value;
        this.elm.style.transform = `rotate(${this._rotate}deg)`
    }
    get scale() {
        return this._scale;    
    }
    set scale(value) {
        this._scale = value;
        this.elm.style.transform = `scale(${this._scale})`
    }
    
    get zIndex() {
        return this._scaleY;    
    }
    set zIndex(value) {
        this._zIndex = value;
        this.elm.style.zIndex = this._zIndex
    }
    _createElement() {
        let elm = document.createElement("div");
        elm.style.position = "absolute";
        return elm;
    }

    addChild(node) {
        this.elm.appendChild(node.elm);
        this.children.push(node);
    }
    removeChild(node) {
        let index = this.children.indexOf(node); if (index === -1) return;
        this.elm.removeChild(node.elm);
        this.children.splice(index, 1);
    }



}
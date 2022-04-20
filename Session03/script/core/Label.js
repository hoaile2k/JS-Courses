import { Node } from "./Node.js";

export class Label extends Node {
    constructor() {
        super();
        this._text = "";
        this.fontSize = ""
        this.fontFamily = ""
        this.color = ""
        this._fontSize = "";
        this._fontFamily = ""
        this._color = ""
    }

    get text() {
        return this._text;
    }
    set text(value){
        this._text = value;
        this.elm.innerText = value;
    }
    get color(){
        return this._fontSize
    }
    set color(value){
        this._color = value
        this.elm.style.color = value
    }
    get fontSize(){
        return this._fontSize
    }
    set fontSize(value){
        this._fontSize = value
        this.elm.style.fontSize = value +"px"
    }
    get fontFamily(){
        return this._fontFamily
    }
    set fontFamily(value){
        this._fontFamily = value
        this.elm.style.fontFamily = value
    }
    _createElement(){
        let elm = document.createElement("h1");
        elm.style.position = "absolute";
        return elm;
    }
}
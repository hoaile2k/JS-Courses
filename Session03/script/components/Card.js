import { Node } from "../core/Node.js";
import { Sprite } from "../core/Sprite.js";
import { Label } from "../core/Label.js";

export class Card extends Node {
    constructor(index) {
        super();
        this.index = index;
        this.value = null;
        this.arrImage = []
        this._createSprite();
        this._createCover();
        this._createLabel();
    }
    _createSprite() {
        this.sprite = new Sprite();
        this.sprite.width = 160;
        this.sprite.height = 160;
        this.addChild(this.sprite);
    }
    _createCover() {
        let cover = new Node();
        cover.width = 160;
        cover.height = 160;
        cover.elm.style.backgroundColor = "orange";
        cover.elm.style.border = "solid 1px blue";
        cover.elm.style.cursor = "pointer"

        this.cover = cover;
        this.addChild(this.cover);
    }
    _createLabel() {
        let label = new Label();
        label.text = this.index
        label.elm.style.top = "25%"
        label.width = 160
        label.elm.style.textAlign = "center"
        label.elm.style.cursor = "pointer"
        this.label = label
        this.addChild(label)
    }
    setValue(value) {
        this.value = value;
        // let arr = []
        // arr.push(value)
        // this.arrImage.push(value)
        // console.log(this.arrImage)
        this.sprite.path = "./images/trucxanh" + value + ".jpg";
    }
    open() {
        let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
        tl.to(this.elm, { rotateY:180 , duration: 0.5 },0);
        console.log(this.sprite)
        tl.play();
        this.label.elm.style.display = "none"
        this.cover.elm.style.backgroundColor = "unset"
        
    }
    close() {
    }
    hide() {
        let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
        tl.to(this.elm, { rotateY:0 , duration: 0.5 });
        this.label.elm.style.display = "block"
        this.cover.elm.style.backgroundColor = "orange"
    }
}
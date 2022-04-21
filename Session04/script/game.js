import { Node } from "./core/Node.js";
import { Sprite } from "./core/Sprite.js";
import { Card } from "./components/Card.js";
import { Label } from "./core/Label.js";
class Game extends Node {
    constructor() {
        super();
        this.firstCard = null;
        this.secondCard = null;
        this.canClick = true;
        this._init()
    }
    _init() {
        this.scoreValue = { value: 1000 }
        this._createCards();
        this._createScore();
        this._resetGame();
        this.countRight = 0
    }
    _shuffleCards() {
        let randomCards = new Array(20)
        for (let i = 0; i < 20; i++) {
            randomCards[i] = i % (20 / 2)
        }
        randomCards.sort(() => {
            return 0.5 - Math.random()
        })
        randomCards.sort()
        return randomCards;
    }
    _createCards(numberCards) {
        let cards = [];
        let card;
        let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
        let randomCards = this._shuffleCards()
        for (let index = 0; index < 20; index++) {
            card = new Card(index);
            let col = index % 5
            let row = Math.floor(index / 5)
            card.x = col * 160
            card.y = row * 160
            card.width = 160
            card.height = 160
            tl.to(card, {
                ease: Back.easeInOut,
                x: 330,
                y: 200,
                duration: 1
            }, "0.1");
            this.addChild(card)
            card.setValue(randomCards[index]);
            cards.push(card)
            card.elm.addEventListener("click", this.onClickCard.bind(this, card))
        }
        console.log(cards)
        for (let index = 20; index >= 0; index--) {
            let row = Math.floor(index / 5)
            let col = index % 5
            setTimeout(() => {
                tl.to(cards[index], 0.2, {
                    ease: Back.easeOut.config(6),
                    x: col * 160,
                    y: row * 160
                })
            }, 0);
        }
        for (let index = 0; index < 20; index++) {
            let row = Math.floor(index / 5)
            let col = index % 5


        }
        tl.play();
    }
    onClickCard(card) {
        if (!this.canClick) return;
        if (card === this.firstCard) return;
        card.open()
        var tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });
        tl.to(card, { scaleX: 0, duration: 0 });
        tl.to(card, { scaleX: 1, duration: 0.5 });
        tl.play();
        console.log(card)
        if (this.firstCard === null) {
            this.firstCard = card
        } else {
            this.canClick = false;
            this.secondCard = card
            this.compareCard(this.firstCard, this.secondCard)
        }
        if (this.firstCard == this.secondCard) {
        }
    }
    _createScore() {
        this.score = new Label()
        this.addChild(this.score)
        this.score.elm.style.position = "absolute"
        this.score.elm.style.top = "-65px"
        this.score.elm.style.right = "328px"
        this.score.elm.style.fontSize = "30px"
        this.score.text = "Score: " + this.scoreValue.value
    }
    compareCard(firstCard, secondCard) {
        // console.log(firstCard + " - " + secondCard)
        if (firstCard.value == secondCard.value) {
            var tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
            firstCard.zIndex = 999
            secondCard.zIndex = 999
            tl.to(firstCard, { x: 200, y: 250, scale: 1.5, duration: 0.5 }, "<");
            tl.to(secondCard, { x: 440, y: 250, scale: 1.5, duration: 0.5 }, "<");
            tl.to(this.scoreValue, 1, {
                value: "+=100",
                roundProps: {
                    value: 1
                },
                onUpdate: () => {
                    this.score.text = "Score: " + this.scoreValue.value;
                }
            })
            console.log(this.scoreValue)
            // this.scoreValue += 100
            // this.score.text = "Score: " + this.scoreValue
            tl.play();
            setTimeout(() => {
                console.log(firstCard)
                firstCard.close()
                secondCard.close()
                this.removeChild(firstCard)
                this.removeChild(secondCard)
                this.firstCard = null; this.secondCard = null
                this.canClick = true
                this.countRight++
                if (this.countRight === 10) {
                    this.status("You are Winning")
                }
            }, 1000);
        }
        else {
            var tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
            tl.to(firstCard, { rotateY: 360, duration: 0.5 }, "0.5");
            tl.to(secondCard, { rotateY: 360, duration: 0.5 }, "0.5");
            tl.play()
            setTimeout(() => {

                this.firstCard = null
                this.secondCard = null
                firstCard.hide()
                secondCard.hide()
                this.canClick = true
                tl.to(this.scoreValue, 1, {
                    value: "-=50",
                    roundProps: {
                        value: 1
                    },
                    onUpdate: () => {
                        this.score.text = "Score: " + this.scoreValue.value;
                    }
                })
                if (this.scoreValue === 0) {
                    this.status("You are Losing")
                }
            }, 1000);

        }

    }
    status(value) {
        let win = new Node();
        win.width = 800
        win.height = 640
        win.elm.style.background = "rgba(0,0,0,0.7)"
        let label = new Label();
        label.elm.innerHTML = value + "</br>Your Score: " + this.scoreValue.value
        label.width = 800
        label.elm.style.textAlign = 'center'
        label.color = "white"
        label.elm.style.top = '40%'
        label.elm.style.transform = "scale(1.5)"
        label.elm.style.transition = "3s"
        this.win = win
        this.label = label
        this.addChild(this.win)
        this.addChild(this.label)
    }
    _playGame() {
        this.play = new Label()
        this.addChild(this.play)
        this.play.elm.style.position = "absolute"
        this.play.elm.style.bottom = "-100px"
        this.play.elm.style.right = "340px"
        this.play.elm.style.fontSize = "30px"
        this.play.text = "Play Game"
        this.play.color = "red"
        this.play.elm.style.padding = "5px 20px"
        this.play.elm.style.borderRadius = "10px"
        this.play.elm.style.background = "cyan"
        this.play.elm.style.cursor = "pointer"
        this.play.elm.addEventListener("click", () => {
            document.getElementsByTagName("div")[0].innerHTML = ""
            this._init()
        })
    }
    _resetGame() {
        this._playGame()
        this.play.text = "Replay"
        this.play.color = "navy"
        this.play.elm.addEventListener("click", () => {
            document.getElementsByTagName("div")[0].innerHTML = ""
            this._init()
        })
    }
}

let game = new Game();
document.body.style.background = "#ccc"
game.width = 800
game.height = 640
game.x = 100
game.y = 50
game.elm.style.backgroundImage = "url(./images/trucxanh_bg.jpg)"
document.body.appendChild(game.elm);

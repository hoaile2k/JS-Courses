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
        this._playGame();
        // this._init();

    }
    _init() {
        this.scoreValue = 100
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
        let randomCards = this._shuffleCards()
        for (let index = 0; index < 20; index++) {
            card = new Card(index);
            let col = index % 5
            let row = Math.floor(index / 5)
            // card.elm.style.border = "1px solid"
            cards[index] = index
            this.addChild(card)
            card.x = col * 160
            card.y = row * 160
            card.width = 160
            card.height = 160
            card.setValue(randomCards[index]);
            card.elm.addEventListener("click", this.onClickCard.bind(this, card))
        }


    }
    onClickCard(card) {
        if (!this.canClick) return;
        if (card === this.firstCard) return;
        card.open()
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
        this.score.text = "Score: " + this.scoreValue
    }

    compareCard(firstCard, secondCard) {
        // console.log(firstCard + " - " + secondCard)
        setTimeout(() => {
            if (firstCard.value == secondCard.value) {
                firstCard.close()
                secondCard.close()
                this.removeChild(firstCard)
                this.removeChild(secondCard)
                this.firstCard = null
                this.secondCard = null
                this.canClick = true
                this.scoreValue += 100
                this.score.text = "Score: " + this.scoreValue
                this.countRight ++
                if (this.countRight === 10) {
                    this.status("You are Winning")
                }
            }
            else {
                // console.log("false")
                this.firstCard = null
                this.secondCard = null
                firstCard.hide()
                secondCard.hide()
                this.canClick = true
                this.scoreValue -= 50
                this.score.text = "Score: " + this.scoreValue
                if (this.scoreValue === 0) {
                    this.status("You are Losing")
                }
            }
        }, 1000);
    }
    status(value) {
        let win = new Node();
        win.width = 800
        win.height = 640
        win.elm.style.background = "rgba(0,0,0,0.7)"
        let label = new Label();
        label.elm.innerHTML = value +"</br>Your Score: " + this.scoreValue
        label.width = 800
        label.elm.style.textAlign = 'center'
        label.color = "white"
        label.elm.style.top = '40%'
        label.elm.style.transform = "scale(1.5)"
        label.elm.style.transition = "3s"
        // label.fontSize = 50
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

import { Node } from "./core/Node.js";
import { Sprite } from "./core/Sprite.js";
import { Card } from "./components/Card.js";
import { Label } from "./core/Label.js";


class Game extends Node {
    constructor() {
        super();
        this.canClick = true;
        this.canClickReset = true
        this._init()
    }
    _init() {
        this.audio = new Audio("../audio/audioStart.mp3")
        this.scoreValue = { value: 100 }
        this._createCards();
        this._createScore();
        this._resetGame();
        this.firstCard = null;
        this.secondCard = null;
        this.trueAudio = new Audio("./audio/trueAudio.mp3")
        this.falseAudio = new Audio("./audio/audioFalse.mp3")
        this.winAudio = new Audio("./audio/audioWin.mp3")
        this.loseAudio = new Audio("./audio/audioLose.mp3")
        this._soundGame();
        this.countRight = 0
        this.canClickReset = false

    }
    _soundGame() {

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

        let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
        let cards = [];
        let card;
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
                ease: Back.easeIn,
                x: 330,
                y: 200,
                zIndex: 100,
                duration: 0.2
            }, "0.1");
            this.addChild(card)
            card.setValue(randomCards[index]);
            cards.push(card)
            card.elm.addEventListener("click", this.onClickCard.bind(this, card))
        }
        for (let index = 19; index >= 0; index--) {
            this.audio.play();
            let row = Math.floor(index / 5)
            let col = index % 5
            tl.to(cards[index], 0.2, {
                ease: Back.easeOut.config(3),
                x: col * 160,
                y: row * 160,
            })
        }
    }
    onClickCard(card) {
        this.canClickReset = true;
        if (!this.canClick) return;
        if (card === this.firstCard) return;
        // this.clickAudio.play()
        card.open()
        if (this.firstCard === null) {
            this.firstCard = card
        } else {
            this.canClick = false;
            this.secondCard = card
            this.compareCard(this.firstCard, this.secondCard)
        }
        console.log(this.canClickReset)
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
        var tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
        if (firstCard.value == secondCard.value) {
            this.trueAudio.play()
            firstCard.zIndex = 200
            secondCard.zIndex = 200
            tl.to(this.scoreValue, 1, {
                value: "+=100",
                roundProps: {
                    value: 1
                },
                onUpdate: () => {
                    this.score.text = "Score: " + this.scoreValue.value;
                }
            })
            tl.to(firstCard, { x: 200, y: 250, scale: 1.5, duration: 0.5 }, "<");
            tl.to(secondCard, { x: 440, y: 250, scale: 1.5, duration: 0.5 }, "<");
            tl.to(firstCard, { scale: 1, opacity: 0, duration: 1 }, "0.5");
            tl.to(secondCard, { scale: 1, opacity: 0, duration: 1 }, "0.5");
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
                    this.victoryScreen()
                }
            }, 1500);
        }
        else {
            setTimeout(() => {
                this.falseAudio.play()
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
            }, 1000);
            console.log(this.scoreValue.value - 50)
            if (this.scoreValue.value - 50 == 0) {
                this.status("You are Losing!!")
                this.loseAudio.play()
            }

        }

    }
    status(value) {
        let win = new Node();
        win.width = 800
        win.height = 640
        win.zIndex = 999
        win.elm.style.background = "rgba(0,0,0,0.7)"
        let label = new Label();
        label.elm.innerHTML = value + "</br>Your Score: " + this.scoreValue.value
        this.winAudio.play()
        label.width = 800
        label.elm.style.textAlign = 'center'
        label.color = "white"
        label.elm.style.top = '40%'
        label.elm.style.transform = "scale(1.5)"
        label.elm.style.transition = "3s"
        label.zIndex = 999
        this.win = win
        this.label = label
        this.addChild(this.win)
        this.addChild(this.label)
    }
    victoryScreen() {
        let coins = []
        let positionX = []
        let positionY = []
        let tl = gsap.timeline({ repeat: 5 });
        for(let i = 0; i<=70; i++){
            positionX.push(i*i)
            positionY.push(i*10)
        }
        positionX.sort(()=>{
            return 0.5 - Math.random()
        })
        positionY.sort(()=>{
            return 0.5 - Math.random()
        })
        for(let i = 0; i<=70; i++){
            let coin = new Node()
            let col = positionX[i]
            let row = positionY[i]
            coin.width = 100
            coin.height = 100
            coin.x = col
            coin.y = row
            coin.scale = 0.3
            coin.background = "../images/coin.png"
            coin.elm.style.backgroundSize = "cover"
            coin.zIndex = 1000
            this.coin = coin
            this.addChild(this.coin)
            coins.push(coin)
            tl.to(coins[i], {x: positionX[i], y:1000, duration: 10 }, "<");

        }
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
        if (!this.canClickReset) return;
        this.play.elm.addEventListener("click", () => {
            document.getElementsByTagName("div")[0].innerHTML = ""
            this._init()
            this.winAudio.pause()
        })

    }
    _resetGame() {
        this._playGame()
        this.play.text = "Replay"
        this.play.color = "navy"
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

//Done
let background = document.createElement("div")
let showScore = document.createElement("h1")
let showTime = document.createElement("h1")
let showRules = document.createElement("p")
let maxScore = document.createElement("h1")
let clickCorrect = []
let pickCard = []
let countClick = []
let clickValue = []
let cardRender = []
let labelCard = []
let image = []
let score = 1000
let time = 100
let setTime;
showScore.textContent = "Score: " + score
showTime.textContent = "Time: " + time
showRules.innerHTML = `Lat dung hinh +100 diem </br> sai hinh -50 diem </br> diem = 0 se thua </br> thoi gian: ${time} giay`
showRules.style.width = '200px'
let sourceImage = [
    {
        id: 1,
        src: "image/block" + 1 + ".jpeg",
        countTime: 0
    },
    {
        id: 2,
        src: "image/block" + 2 + ".jpeg",
        countTime: 0
    },
    {
        id: 3,
        src: "image/block" + 3 + ".jpeg",
        countTime: 0
    },
    {
        id: 4,
        src: "image/block" + 4 + ".jpeg",
        countTime: 0
    },
    {
        id: 5,
        src: "image/block" + 5 + ".jpeg",
        countTime: 0
    },
    {
        id: 6,
        src: "image/block" + 6 + ".jpeg",
        countTime: 0
    },
    {
        id: 7,
        src: "image/block" + 7 + ".jpeg",
        countTime: 0
    },
    {
        id: 8,
        src: "image/block" + 8 + ".jpeg",
        countTime: 0
    },
    {
        id: 9,
        src: "image/block" + 9 + ".jpeg",
        countTime: 0
    },
    {
        id: 0,
        src: "image/block" + 0 + ".jpeg",
        countTime: 0
    },
]
function createBackground() {
    document.body.appendChild(background)
    background.style.width = "1440px"
    background.style.height = "700px"
    background.style.background = "cyan"
    background.style.margin = "auto"
    return background;
}
let gameBoard = document.createElement("div")
function createGameBoard() {
    background.appendChild(gameBoard)
    gameBoard.style.width = "960px"
    gameBoard.style.height = "660px"
    gameBoard.style.backgroundImage = "url(image/background.jpeg)"
    gameBoard.style.backgroundSize = "cover"
    gameBoard.style.margin = "auto"
    gameBoard.style.top = "5%"
    gameBoard.style.left = "20%"
    gameBoard.style.borderRadius = "10px"
    gameBoard.style.position = "absolute"
    gameBoard.className = "gameBoard"
}
let card = []
function playGame() {
    let play = document.createElement("div")
    background.appendChild(play)
    play.innerHTML = "Play"
    play.style.fontSize = "50px"
    play.style.left = "46%"
    play.style.top = "38%"
    play.style.position = "absolute"
    play.style.zIndex = '999'
    play.style.cursor = "pointer"
    play.addEventListener("click", () => {
        createGameBoard();
        createCards(20);
        setTime = setInterval(() => {
            --time
            showTime.textContent = "Time: " + time
            time == 0 ? clearInterval(setTime) + createloseBG() + playAgain() : ""
        }, 1000);

        play.style.display = "none"
    })
}
function playAgain(){}
function createloseBG() {
    let loseBackground = document.createElement("div")
    gameBoard.appendChild(loseBackground)
    loseBackground.style.width = "100%"
    loseBackground.style.height = "100%"
    loseBackground.style.position = "absolute"
    loseBackground.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
    let labelLose = document.createElement("h1")
    loseBackground.appendChild(labelLose)
    labelLose.style.position = "absolute"
    labelLose.textContent = "You Are Lose!"
    labelLose.style.textAlign = "center"
    labelLose.style.width = "100%"
    labelLose.style.fontSize = "100px"
    labelLose.style.color = "white"
    let labelTryAgain = document.createElement("h1")
    loseBackground.appendChild(labelTryAgain)
    labelTryAgain.style.position = "absolute"
    labelTryAgain.style.bottom = "50px"
    labelTryAgain.textContent = "Try Again!"
    labelTryAgain.style.cursor = "pointer"
    labelTryAgain.style.textAlign = "center"
    labelTryAgain.style.width = "100%"
    labelTryAgain.style.fontSize = "60px"
    labelTryAgain.style.color = "red"
}
function createWinBG() {
    let loseBackground = document.createElement("div")
    gameBoard.appendChild(loseBackground)
    loseBackground.style.width = "100%"
    loseBackground.style.height = "100%"
    loseBackground.style.position = "absolute"
    loseBackground.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
    let labelLose = document.createElement("h1")
    loseBackground.appendChild(labelLose)
    labelLose.style.position = "absolute"
    labelLose.textContent = "You Are Winning"
    labelLose.style.textAlign = "center"
    labelLose.style.width = "100%"
    labelLose.style.fontSize = "100px"
    labelLose.style.color = "white"
    let labelTryAgain = document.createElement("h1")
    loseBackground.appendChild(labelTryAgain)
    labelTryAgain.style.position = "absolute"
    labelTryAgain.style.bottom = "50px"
    labelTryAgain.textContent = "Play Again"
    labelTryAgain.style.cursor = "pointer"
    labelTryAgain.style.textAlign = "center"
    labelTryAgain.style.width = "100%"
    labelTryAgain.style.fontSize = "60px"
    labelTryAgain.style.color = "darkturquoise"
}
function createCards(numCard) {
    let distanceLeft = 77.5;
    let distanceTop = 10;
    let count = 0;
    function randomImg() {
        let randomIndex = Math.floor(Math.random() * sourceImage.length);
        let sourceImage_temp = sourceImage[randomIndex];
        sourceImage_temp.countTime == 1 ? sourceImage.splice(randomIndex, 1) : ""
        sourceImage_temp.countTime++;
        return sourceImage_temp;
    }
    card = {
        id: 0,
        width: "150px",
        height: "150px",
        background: "red",
        position: "absolute",
        borderRadius: "10px",
        left: "px",
        top: "px",
        imageId: 0,
        imageSrc: ""
    }
    for (let index = 0; index < numCard; index++) {
        let img = randomImg()
        image[index] = document.createElement('img');
        gameBoard.appendChild(image[index]);
        image[index].style.width = card.width
        image[index].style.height = card.height
        image[index].style.borderRadius = "10px"
        image[index].style.objectFit = "cover"
        image[index].style.position = card.position
        image[index].style.top = distanceTop + card.top
        image[index].style.left = distanceLeft + card.left
        image[index].style.cursor = "pointer"
        image[index].src = "image/logo.png"

        labelCard[index] = document.createElement("h1")
        image[index].appendChild(labelCard[index])
        labelCard[index].id = index
        labelCard[index].style.width = card.width
        labelCard[index].style.height = card.height
        labelCard[index].style.position = card.position
        labelCard[index].style.background = card.background
        labelCard[index].innerHTML = img.id

        cardRender[index] = document.createElement("div")
        image[index].appendChild(cardRender[index])
        cardRender[index].id = index
        cardRender[index].style.width = card.width
        cardRender[index].style.height = card.height
        cardRender[index].style.position = card.position
        cardRender[index].style.background = card.background
        cardRender[index].value = img.id
        distanceLeft += 160
        if (count == 4) {
            distanceTop += 160
            count = 0;
            distanceLeft = 77.5
        }
        else {
            count++
        }
        image[index].id = index
        image[index].value = img.id
        image[index].addEventListener("click", () => {
            if (countClick.length < 2) {
                image[index].src = img.src
            }
            cardClick(index)
        })
    }
}
function clearCards() {
    image = []
}
function cardClick(index) {
    if (countClick.length < 2) {
        clickValue.push(cardRender[index].value)
        countClick.push(cardRender[index].id)
    }
    if (countClick[0] == countClick[1]) {
        countClick.pop()
        clickValue.pop()
    }

    if (countClick.length <= 2) {
        setTimeout(() => {
            if (clickValue[0] == clickValue[1] && countClick.length >= 2) {
                clickCorrect.push(clickValue[0])
                console.log(clickCorrect)
                image[countClick[0]].remove()
                image[countClick[1]].remove()
                score += 100
                showScore.textContent = "Score: " + score
                if(clickCorrect.length == 10){
                    createWinBG()
                    clearInterval(setTime)
                }
                countClick = []
                clickValue = []
                countClick.splice(0, 2)
            }
            if (countClick.length >= 2) {
                image[countClick[0]].src = "image/logo.png"
                image[countClick[1]].src = "image/logo.png"
                score -= 50
                showScore.textContent = "Score: " + score
                if (score == 0) {
                    createloseBG()
                    clearInterval(setTime)
                }
                countClick.splice(0, 2)
                countClick = []
                clickValue = []

            }
        }, (countClick.length - 1)*500)
    }
}

function run() {
    playGame()
    createBackground();
    background.appendChild(showScore);
    background.appendChild(showTime);
    background.appendChild(showRules);
}
run()

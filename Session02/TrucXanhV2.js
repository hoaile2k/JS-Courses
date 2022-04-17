/*
* => tao ra mot background 
*/
let background = document.createElement("div")
let pickCard = []
let countClick = []
let clickValue = []
let score = 0
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
let cardRender = []
let image = []

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
    gameBoard.style.background = "yellow"
    gameBoard.style.margin = "auto"
    gameBoard.style.top = "5%"
    gameBoard.style.left = "240px"
    gameBoard.style.borderRadius = "10px"
    gameBoard.style.position = "absolute"
}
let card = []
function createScore(score) {
    let labelScore = document.createElement("h1")
    background.appendChild(labelScore)
    labelScore.innerText = score
}
function createCards(numCard) {
    let distanceLeft = 77.5;
    let distanceTop = 10;
    let count = 0;
    let imageUrl = {}

    let arr1 = []

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

        cardRender[index] = document.createElement("div")
        gameBoard.appendChild(cardRender[index])

        cardRender[index].id = index
        cardRender[index].style.width = card.width
        cardRender[index].style.height = card.height
        cardRender[index].style.position = card.position
        cardRender[index].style.top = distanceTop + card.top
        cardRender[index].style.left = distanceLeft + card.left
        cardRender[index].style.background = card.background

        distanceLeft += 160
        if (count == 4) {
            distanceTop += 160
            count = 0;
            distanceLeft = 77.5
        }
        else {
            count++
        }
        image[index] = document.createElement('img');
        cardRender[index].appendChild(image[index]);
        image[index].style.width = "100%"
        image[index].style.height = "100%"
        image[index].style.objectFit = "cover"
        image[index].style.display = "none"
        let img = randomImg()
        image[index].id = index
        image[index].value = img.id
        image[index].src = img.src
        cardRender[index].addEventListener("click", () => {
            cardClick(index)
        })
    }

}
function cardClick(index) {
    countClick.push(image[index].value)
    clickValue.push(image[index].id)
    if (countClick.length <= 2) {
        image[index].style.display = "block"
        setTimeout(() => {
            if (countClick[0] == countClick[1] && countClick.length>=2) {
                image[clickValue[0]].remove()
                image[clickValue[1]].remove()
                cardRender[clickValue[0]].remove()
                cardRender[clickValue[1]].remove()
                score += 100
                countClick = []
                clickValue = []
                countClick.splice(0, 2)

            }
            if (countClick.length >= 2) {
                image[clickValue[0]].style.display = "none"
                image[clickValue[1]].style.display = "none"
                countClick.splice(0, 2)
                countClick = []
                clickValue = []

            }
        }, 1000)
    }

}

function randomImg() {
    let randomIndex = Math.floor(Math.random() * sourceImage.length);
    let sourceImage_temp = sourceImage[randomIndex];
    sourceImage_temp.countTime == 1 ? sourceImage.splice(randomIndex, 1) : ""
    sourceImage_temp.countTime++;
    return sourceImage_temp;
}
function run() {
    createBackground()
    createGameBoard()
    createCards(20)
    createScore(score)
}
run()
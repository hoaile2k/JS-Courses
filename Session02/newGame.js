let boardGame = document.createElement("div")
function renderBoardGame() {
    document.body.appendChild(boardGame)
    boardGame.style.width = "860px"
    boardGame.style.height = "680px"
    boardGame.style.position = "absolute"
    boardGame.style.top = "10%"
    boardGame.style.left = "25%"
    boardGame.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
}
let imageCards = []
let cards = []
function createCards(number) {
    let randomImage = cardsImage()
    for (let index = 0; index < number; index++) {
        cardsImage(index)
        randomImage.sort(() => {
            return 0.5 - Math.random()
        })
        imageCards.push(randomImage)
    }
    imageCards.pop()
    console.log(imageCards)
}
function cardsImage(index) {
    // index<10 ? (imageCards[index] = [{image_id: index}, {imageUrl: "image/block" +index+".jpeg"},{image_count: 0}]) 
    // :(imageCards[index] = [{image_id: `${index-10}`}, {imageUrl: "image/block" +`${index-10}`+".jpeg"}, {image_count: 0}])
    if (index < 10) {
        imageCards[index] = { imageID: index, imageUrl: "image/block" + index + ".jpeg", imageCount: 0 }
    }
    if (index > 10 && index < 20) {
        imageCards[index] = { imageID: index - 10, imageUrl: "image/block" + `${index - 10}` + ".jpeg", imageCount: 0 }
    }
    return imageCards
}
function run() {
    document.body.style.backgroundImage = "url(image/background.jpeg)"
    document.body.style.width = "100vh"
    document.body.style.height = "100vh"
    renderBoardGame()
    createCards(20)
}
run()
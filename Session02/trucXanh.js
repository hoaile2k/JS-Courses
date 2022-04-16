let background = document.createElement("div");
document.body.appendChild(background);
background.style.width = "1000px";
background.style.height = "800px";
background.style.background = "cyan";
background.style.position = "absolute";
background.style.left = "20%";
background.style.top = "2%";
function createBtnPlay() {
    let btnPlay = document.createElement("button");
    background.appendChild(btnPlay);
    btnPlay.innerText = "Play";
    btnPlay.style.width = "10%";
    btnPlay.style.height = "50px";
    btnPlay.style.background = "yellow";
    btnPlay.style.position = "absolute";
    btnPlay.style.left = "45%";
    btnPlay.style.bottom = "10%";
    return btnPlay;
}
let btPlay = createBtnPlay();

function createInfor() {
    let labelInfor = document.createElement("h1");
    background.appendChild(labelInfor);
    labelInfor.innerText = "Truc Xanh";
    labelInfor.style.position = "absolute";
    labelInfor.style.left = "40%";
    labelInfor.style.top = "10%";
    return labelInfor;
}
let inFor = createInfor();
btPlay.addEventListener("click", () => {
    createBlock(20);
});
createBlock(20)
function createBlock(numBlock) {
    inFor.style.display = "none";
    btPlay.style.display = "none";
    let card = [];
    let label = [];
    let image = [];
    let sourceImage = []
    function makeRandom() {

    }
    for (let i = 0; i <= 9; i++) {
        sourceImage[i] =
        {
            id: i,
            src: "image/block" + i + ".jpeg",
            countClick: 0
        }
    }


    console.log(sourceImage)
    let countCard = [];
    let distanceTop = 0;
    let count = 0;
    for (let index = 0; index <= numBlock; index++) {
        let khoangCach = 0;
        if (index >= 0 && index < numBlock) {
            card[index] = document.createElement("div");
            background.appendChild(card[index]);
            label[index] = document.createElement("p");
            card[index].appendChild(label[index]);
//label
            label[index].innerText = "Block" + index;
            label[index].style.position = "absolute";
            label[index].style.top = "30px";
            label[index].style.width = "100%";
            label[index].style.textAlign = "center";
            label[index].style.fontSize = "30px";
            label[index].style.color = "white";
//red card
            card[index].style.width = "160px";
            card[index].style.height = "160px";
            card[index].style.background = "red";
            card[index].style.position = "absolute";
            card[index].style.borderRadius = "10px";
            khoangCach = count * 210;
            card[index].style.left = khoangCach + "px";
            card[index].style.top = distanceTop + "px";
            count++;
            if (count == 5) {
                distanceTop += 200;
                count = 0;
            }

            //event card
            card[index].addEventListener("click", () => {
                image[index] = document.createElement("img")
                card[index].appendChild(image[index]);
                let newArr = []
                let img = randomImg()
                newArr.push(img)
                image[index].src = randomImg().src
                image[index].style.width = "100%"
                image[index].style.height = "100%"
                image[index].style.objectFit = "cover"
                // image[index].value = /
                label[index].style.display = "none"
            })
        }
    }
    function randomImg() {
        var randomIndex = Math.floor(Math.random() * sourceImage.length);
        var source_temp = sourceImage[randomIndex];
        if (source_temp.time == 1) {
            sourceImage.splice(randomIndex, 1);
        }
        source_temp.time++;
        return source_temp;
    }
    for(let i =0; i<9; i++){
        console.log(randomImg())

    }
}
//Tạo ,5 một biến đếm, khi biến đếm = 5 thì distanceTop + 200 và reset biến đếm

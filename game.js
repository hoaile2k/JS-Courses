

//tran phuong minh
let pickCard = [];

let SOURCE_IMG = [
    {
        id: 0,
        src: "https://static.gamehub.vn/img/files/2017/04/13/Gamehubvn-cac-nhan-vat-trong-one-piece-tuong-ung-voi-qyoc-gia-nao-2.jpg",
        time: 0
    },
    {
        id: 1,
        src: "https://static.gamehub.vn/img/files/2017/04/13/Gamehubvn-cac-nhan-vat-trong-one-piece-tuong-ung-voi-qyoc-gia-nao-3.jpg",
        time: 0
    },
    {
        id: 2,
        src: "https://static.gamehub.vn/img/files/2017/04/13/Gamehubvn-cac-nhan-vat-trong-one-piece-tuong-ung-voi-qyoc-gia-nao-4.jpg",
        time: 0
    },
    {
        id: 3,
        src: "https://static.gamehub.vn/img/files/2017/04/13/Gamehubvn-cac-nhan-vat-trong-one-piece-tuong-ung-voi-qyoc-gia-nao-5.jpg",
        time: 0
    },
    {
        id: 4,
        src: "https://static.gamehub.vn/img/files/2017/04/13/Gamehubvn-cac-nhan-vat-trong-one-piece-tuong-ung-voi-qyoc-gia-nao-6.jpg",
        time: 0
    },
    {
        id: 5,
        src: "https://static.gamehub.vn/img/files/2017/04/13/Gamehubvn-cac-nhan-vat-trong-one-piece-tuong-ung-voi-qyoc-gia-nao-7.jpg",
        time: 0
    },
    {
        id: 6,
        src: "https://static.gamehub.vn/img/files/2017/04/13/Gamehubvn-cac-nhan-vat-trong-one-piece-tuong-ung-voi-qyoc-gia-nao-8.jpg",
        time: 0
    },
    {
        id: 7,
        src: "https://static.gamehub.vn/img/files/2017/04/13/Gamehubvn-cac-nhan-vat-trong-one-piece-tuong-ung-voi-qyoc-gia-nao-9.jpg",
        time: 0
    },
    {
        id: 8,
        src: "https://static.gamehub.vn/img/files/2017/04/13/Gamehubvn-cac-nhan-vat-trong-one-piece-tuong-ung-voi-qyoc-gia-nao-10.jpg",
        time: 0
    },
    {
        id: 9,
        src: "https://static.gamehub.vn/img/files/2017/04/13/Gamehubvn-cac-nhan-vat-trong-one-piece-tuong-ung-voi-qyoc-gia-nao-11.jpg",
        time: 0
    }
];


let tag_body = document.getElementsByTagName("body");
let wrap_card = document.createElement("div");
wrap_card.style.position = "absolute";
wrap_card.style.width = "10%";
wrap_card.style.bottom = "80%";
wrap_card.style.left = "3%";

let pointNumber = document.createElement("div");
pointNumber.style.position = "absolute";
pointNumber.style.width = "10%";
pointNumber.style.bottom = "90%";
pointNumber.style.left = "6%";
pointNumber.style.fontSize = "40px";
pointNumber.style.fontWeight = "bold"
pointNumber.textContent = "10000";

console.log(tag_body)

function BACK_GROUND() {
    let background = document.createElement("div");
    background.style.backgroundColor = "pink";
    background.style.width = "600px";
    background.style.height = "600px";
    background.style.position = "relative";
    background.style.top = "10px";
    background.style.left = "500px";
    background.style.textAlign = "center";
    tag_body[0].appendChild(background);
    return background;
}

function BUTTON_PLAY(backgound) {
    let bt_play = document.createElement("div");
    bt_play.style.backgroundColor = "blue";
    bt_play.style.width = "10%";
    bt_play.style.bottom = "10%";
    bt_play.style.left = "45%";
    bt_play.style.position = "absolute";
    bt_play.innerText = "play";
    bt_play.style.fontSize = "40";
    bt_play.style.color = "white";
    bt_play.style.textAlign = "center";
    bt_play.style.cursor = "pointer";
    backgound.appendChild(bt_play);
    return bt_play;
}

function CARD(tag, top, left, id, img) {
    let card = document.createElement("img");
    card.style.width = "100px";
    card.style.height = "100px";
    card.style.backgroundColor = "red";
    card.style.borderRadius = "15px";
    card.style.position = "absolute";
    card.style.top = top;
    card.style.left = left;
    card.style.cursor = "pointer"
    //tag.appendChild(card);
    wrap_card.appendChild(card);
    var obj_card = {
        card: card,
        id_card: id,
        id: img.id,
        id_src: img.src
    }

    card.addEventListener("click", () => {
        card_click(obj_card);
    })

    return obj_card;
}

function CARDS(background) {

    var arr = [];
    var count_row = 0;
    for (var i = 0; i < 5; i++) {
        console.log(i)
        var valueLeft = 110 * i + 10;
        var valueTop = 110 * count_row + 10;
        if (i == 0) {
            valueLeft = 10;
        }
        var img = randomImg();
        var card_item = CARD(background, valueTop + "px", valueLeft + "px", arr.length, img);
        arr.push(card_item)
        if (i == 4 && count_row < 4) {
            i = -1;
            count_row++;
            if (count_row == 4) {
                i = 4;
            }
        }
        console.log(img)

    }
}

// xu ly click
function card_click(card) {
    console.log(card);
    if (pickCard.length == 1 && pickCard[0].id_card == card.id_card) {
        return;
    }
    if (pickCard.length >= 2) {
        return;
    }
    card.card.src = card.id_src;
    pickCard.push(card);

    setTimeout(() => {
        if (pickCard.length == 2) {
            if (pickCard[0].id == pickCard[1].id) {
                pickCard[0].card.hidden = true;
                pickCard[1].card.hidden = true;
                var diem = Number(pointNumber.textContent) + 1000;
                console.log(diem)
                pointNumber.textContent = diem + ""
            }
            else {
                pickCard[0].card.removeAttribute("src")
                pickCard[0].card.style.backgroundColor = "red";
                pickCard[1].card.removeAttribute("src")
                pickCard[1].card.style.backgroundColor = "red";
                var diem = Number(pointNumber.textContent) - 500;
                //alert("ngu vl");
                pointNumber.textContent = diem + "";
            }
            pickCard = [];
        }
    }, 1000)
}

function randomImg() {
    var randomIndex = Math.floor(Math.random() * SOURCE_IMG.length);
    var source_temp = SOURCE_IMG[randomIndex];
    if (source_temp.time == 1) {
        SOURCE_IMG.splice(randomIndex, 1);
    }
    source_temp.time++;
    return source_temp;
}
function gamePlay() {
    CARDS(backgound)
    var backgound = BACK_GROUND();
    var btn_play = BUTTON_PLAY(backgound);

        btn_play.style.display = "none";
        backgound.appendChild(wrap_card)
        backgound.appendChild(pointNumber)
        return wrap_card;
}

gamePlay();

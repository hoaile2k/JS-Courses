let background = document.createElement("div");
document.body.appendChild(background);
background.style.width = "50%";
background.style.height = "80%";
background.style.background = "cyan";
background.style.position = "absolute";
background.style.left = "25%";
background.style.top = "10%";
createBtnPlay();
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
let btPlay = createBtnPlay

// createInfor();
// function createInfor() {
//   let labelInfor = document.createElement("h1");
//   background.appendChild(labelInfor);
//   labelInfor.innerText = "Truc Xanh";
//   labelInfor.style.position = "absolute";
//   labelInfor.style.left = "40%";
//   labelInfor.style.top = "10%";
//   return labelInfor;
// }
// btPlay.addEventListener("click", () => {
//   alert("123");
// });

createBlock();
function createBlock() {
  let abc = [];
  for (let index = 0; index <= 19; index++) {
    let khoangCach = 0
    // if(index==1){
        // abc[index] = document.createElement("div");
        // background.appendChild(abc[index]);
        // abc[index].innerText = "Block"+index;
        // abc[index].style.width = "200px";
        // abc[index].style.height = "50px";
        // abc[index].style.background = "red";
        // abc[index].style.position = "absolute";
        // abc[index].style.left = "0";
        // abc[index].style.top = "0";
    // }
    if(index>=1 && index<6){
        abc[index] = document.createElement("div");
        background.appendChild(abc[index]);
        abc[index].innerText = "Block"+index;
        abc[index].style.width = "200px"
        abc[index].style.height = "50px";
        abc[index].style.background = "red";
        abc[index].style.position = "absolute";
        khoangCach = index*300
        abc[index].style.left = khoangCach +"px";
        abc[index].style.top = "0";
        console.log(khoangCach)
    }
  }
}

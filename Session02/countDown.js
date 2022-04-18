let value = prompt("Vui lòng nhập vào số giây bạn muốn đếm ngược");
  while(value<0){
    value = prompt("Vui lòng nhập số > 0")
    // break;
  }



function countDown(second) {
  let textLabel = document.createElement("p");
  let happyNewYear = document.createElement("p")
  document.body.appendChild(textLabel)
  textLabel.style.fontSize = "200px"
  textLabel.style.textAlign = "center"
  textLabel.innerText = second;
  happyNewYear.style.fontSize = "200px"
  happyNewYear.style.textAlign = "center"
  happyNewYear.innerText = second;
  let loop = setInterval(() => {
    function down(){
      if(second<=0){
        happyNewYear.innerText = "Hết giờ"
        document.body.appendChild(happyNewYear)
        textLabel.style.display = "none"
        clearInterval(loop)
      }
      textLabel.innerText = second;
      --second
    }
    down()  
  }, 1000);
  
}
function clockTime(second){
  let clockLabel = document.createElement("p")
  countClock = 0;
  let count=second
  let loopTime = setInterval(()=> {
      countClock++
      --second
      // console.log(countClock)
      clockLabel.innerText = "Clock Time is: " +countClock
    if(second==0){
      clearInterval(loopTime)
    }
    console.log(second)
  }, 1000);
  document.body.appendChild(clockLabel)
  console.log(clockTime)
}
countDown(value);
clockTime(value)
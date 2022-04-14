//Viết hàm trả về 1 phần từ bất kỳ trong mảng
function getRandomElement(arr){
    let randomNumber = arr[Math.floor(Math.random(arr) * arr.length)]
    console.log(randomNumber)
}
getRandomElement([1,2,3,4,12,52,321])
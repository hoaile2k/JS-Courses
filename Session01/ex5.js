function pickOutRandomElement(arr){
    let randomNumber = arr[Math.floor(Math.random(arr) * arr.length)]
    let removeNumber = arr.indexOf(randomNumber)
    let show = arr.splice(removeNumber,1)
    console.log(arr)
}
pickOutRandomElement([1,2,3,4,5,6,9,7])
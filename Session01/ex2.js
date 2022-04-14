// Viết hàm formatWallet nhận vào 2 tham số, số tiền và số chữ số ở sau dấu phẩy
//     formatWallet(1120, 2)  => '1.12K' 
function formatWallet(money, num){
    let result = ""
    let numComma = 1
    for(let i = 0; i<=num; i++){
        numComma *= 10
    }
    if(money>1000){
        result = (money/numComma) + "K"
    }
    else
        result = money
    console.log(result)
}
formatWallet(1103, 2)
//Cho 1 số tiền bất kỳ (n) Viết hàm tìm ra cách rút tiền với số tờ tiền nhỏ nhất.Có 4 mệnh giá (50$, 20$, 10$, 1$)
function cashOut(n) {
    const arr = [50, 20, 10, 1]
    let values = {50: 0, 20:0, 10:0, 1:0}
    values[50] = Math.floor(n/50);
    n = Math.floor(n%50)
    values[20] = Math.floor(n/20)
    n = Math.floor(n%20)
    values[10] = Math.floor(n/10)
    values[1] = n
    return values
    
}
console.log(cashOut(2345))

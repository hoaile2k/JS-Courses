//Đổi số la mã: cho 1 số < 1000, in ra số la mã tương ứng ( I:1, V:5, X:10, L:50, C:100, D:500 )
function convertToRomanNumber(n){
    let s = "";
        
        if (n >= 500) {s += "D"; n -= 500;}
        if (n >= 400) {s += "CD"; n -= 400;}
        while (n >= 100) {s += "C"; n -= 100;}
        if (n >= 90) {s += "XC"; n -= 90;}
        if (n >= 50) {s += "L"; n -= 50;}
        if (n >= 40) {s += "XL"; n -= 40;}
        while (n >= 10) {s += "X"; n -= 10;}
        if (n >= 9) {s += "IX"; n -= 9;}
        if (n >= 5) {s += "V"; n -= 5;}
        if (n >= 4) {s += "IV"; n -= 4;}
        while (n >= 1) {s += "I"; n -= 1;}
    console.log(s)

}
convertToRomanNumber(143)

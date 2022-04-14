//Tinh giai thua
function run(n){

    let i =0;
    let total = 1;
    for(i = 1; i<=n; i++){
        total *= i
    }
    return total
}
console.log(run(8))
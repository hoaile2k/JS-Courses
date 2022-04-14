function findMissingElements(arr1, arr2){
    let showArr = []
    arr2.forEach(element => {
        if(!arr1.includes(element)){
            showArr.push(element)
        }
    
    });
    return showArr;
    // showArr.pop()
}
console.log(findMissingElements([1,2,3,4],[4,3,6,7]))
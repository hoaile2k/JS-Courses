// In cách đọc số: In ra màn hình cách đọc số nhỏ hơn 1,000,000.
//     readNumber(726504) => bảy mươi hai vạn sáu ngàn năm trăm linh tư.

function readNumber(n)
{
    let obj= {
        soVan: "Vạn",
        soNgan: "Ngàn",
        soTram: "Trăm"
    }
    let numToText = {
        1: "Một",
        2: "Hai",
        3: "Ba",
        4: "Bốn",
        5: "Năm",
        6: "Sáu",
        7: "Bảy",
        8: "Tám",
        9: "Chín",
        10: "Mười"
    }
    let textVan = ""
    let textNgan = ""
    let textTram = ""
    let textLinh = ""
    if(n>=10000){
        let numVan = Math.floor(n/10000)
        if(numVan > 10){
            let numVan1 = Math.floor(numVan/10)
            let numVan2 = ""
            numVan2 = Math.floor(numVan%10)

            if(numVan2==0){
                numVan2 = ""
            }
            else{
                numVan2 = numToText[numVan2]
            }
            console.log(n)
            if(Math.floor(n/10000) <20 ){
                obj["soVan"] = " Mười " + numVan2 + " Vạn "
            }
            else
                {obj["soVan"] = numToText[numVan1] + " Mươi " + numToText[4] + " Vạn "}
        }
        else
        {
            obj["soVan"] = numToText[numVan] + " Vạn "
        }
        textVan = obj["soVan"]
        n = Math.floor(n%10000)
    }
    if(n>=1000){
        let numNgan = Math.floor(n/1000)
        obj["soNgan"] = numToText[numNgan] + " Ngàn "
        n = Math.floor(n%1000)
        textNgan = obj["soNgan"]
    }
    if(n>=100){
        let numTram = Math.floor(n/100)
        if(!Number.isInteger(n/100)){
            n = Math.floor(n%100)
            let result = ""
            if(Math.floor(n%100)>10){
                n = Math.floor(n/10)
                if(n>1){
                    obj['soTram'] = numToText[numTram] + " Trăm " +  numToText[n] + " Mươi"
                }
                else{
                    obj['soTram'] = numToText[numTram] + " Trăm " + "Mười "
                }
            }
            else
                obj["soTram"] = numToText[numTram] + " Trăm "
        }
        else{
            obj["soTram"] = numToText[numTram] + " Trăm"
        }
        textTram = obj["soTram"]
    }
    if(n<100){
        if(n>10){
            let numLe1 = Math.floor(n/10)
            let numLe2 = Math.floor(n%10)
            
            obj["soTram"] = numToText[numLe1] + " Mươi " + numToText[numLe2]
            textTram = obj["soTram"]
            console.log(numLe1,numLe2)
        }
        else    
            textLinh = "Linh " + numToText[n]
        
        // obj["soTram"] = a;
    }
    
    readText = textVan + textNgan + textTram + textLinh
    console.log(readText)
}
readNumber(150203)
const printSegitiga = 5

if(typeof printSegitiga === "number"){
    for(let i = printSegitiga; i >= 1; i--){
        let row = ''
        for(let j = 1; j<=i; j++){
            row += j + ""
        }
        console.log(row);
    }
}else{
    console.log("data harus number");
}

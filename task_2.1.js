function    square(num, symbol=0){
    let str = "#";
    if(symbol != false){
        str = symbol;
    }
    if(typeof(num) === "number"){
        for(let i = 0; i < num; i++){
            console.log(str.repeat(num))
        }
    }
}

square(8, "*");
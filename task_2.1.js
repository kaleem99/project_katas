function    square(num, symbol){
    if(typeof(num) === "number"){
        let str = symbol;
        for(let i = 0; i < num; i++){
            console.log(str.repeat(num))
        }
    }
}

square(8, "*")
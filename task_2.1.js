function    square(num, symbol){
    let str = symbol;
    for(let i = 0; i < num; i++){
        console.log(str.repeat(num))
    }
}

square(8, "*")
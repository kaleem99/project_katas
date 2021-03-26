function    triangle(num, mode){
    if(mode == "right" && num > 0){
        for (var i = 0; i < num; i++) {
            var str = "";
            for (var j = 0; j < num; j++) {
                if (j >= num - i - 1) {
                    str += "#";
                } else {
                    str += " ";
                }
            }
            console.log(str);
        }
    }
    else if(mode == "left" && num > 0){
        let str = ""; 
        for(var i = 0; i < num; i++){
            str += "#";
            console.log(str)
        }
    }
    else if(mode == "left" && num < 0){
        let newNum = Math.abs(num);
        // let array = [];
        let str = "#".repeat(newNum);
        let array = str.split("");
        for(let i = 0; i < newNum; i++){
            console.log(array.join(""));
            array.pop();
        }   
    }
}

triangle(10, "right");
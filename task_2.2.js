function    triangle(num, mode = "left"){
    if(typeof(num) === "number"){
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
        else if(mode == "right" && num < 0){
            var val = num * (-1);
            var triangle = "";
            for (var i = 0; i < val; i++) {
                for(var j = 0; j< i; j++){
                triangle += " ";
                }
                for(var k = 0; k< val-i; k++){
                triangle += "#"
                }
                triangle +="\n";
            }
            console.log(triangle.slice(0, triangle.length-1));
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
            let str = "#".repeat(newNum);
            let array = str.split("");
            for(let i = 0; i < newNum; i++){
                console.log(array.join(""));
                array.pop();
            }   
        }
        else if(mode == "isosceles" && num > 0){
            for( i = 0; i < num; i++)
            {
                str = '';
                for(j = 1; j < (num - i); j++)
                {
                    str += ' ';
                }
                for( k = 0; k < (2 * i + 1); k++)
                {
                    str += "#";
                }
                console.log(str);
            }
        }
        else{
            var val = num * (-1);
            var triangle = "";
            for (var i = val; i > 0 ; i--) { 
                for (var j = 0; j < val-i; j++) { 
                    triangle = triangle + " "; 
                }
                for (var k = 0; k < (2*i-1); k++) { 
                    triangle = triangle + "#"; 
                }
                triangle += "\n";
            }
            console.log(triangle.slice(0, triangle.length-1));
        }
    }
}

triangle(-5,);
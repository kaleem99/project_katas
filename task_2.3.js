function columns(arr) {
    let res = "";
    let newArr = [...arr];
    let largest = newArr.sort((a, b) => (b.length - a.length))[0];
    console.log(largest.length)
    for(let k = 0; k < arr.length; k++){
        if(arr[k].length == largest.length){
            largest = arr[k]
        }
    }
    let difference = Math.abs(arr.length - largest.length);
    for(let index = 0; index < difference; index++){
        arr.push("");
    }
    for(var i = 0; i < arr.length; i++){
        let j = 0;
        while(j < arr.length){
            if(i >= arr[j].length){
                res += "  ";
            }
            else{
                res += " " + arr[j][i];
            }
            j++;
        }
        res += "\n";
    }
    let lastIndex = res.lastIndexOf(largest[largest.length-1]);
    // console.log(largest)
    console.log(res.slice(0, lastIndex+1));
}

columns(["Write","good","code", "every","day"]);

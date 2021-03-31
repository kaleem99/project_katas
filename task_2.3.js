function columns(arr) {
    let res = "";
    let newArr = [...arr];
    let largest = newArr.sort((a, b) => (b.length - a.length))[0].length;
    let difference = Math.abs(arr.length - largest);
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
    console.log(res.slice(0, res.length-1))
}

columns(["Write","good","code","every","day", "long string"]);

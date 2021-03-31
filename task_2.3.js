function columns(arr) {
    let res = "";
    let newArr = [...arr];
    let largest = newArr.sort((a, b) => (b.length - a.length))[0];
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
    console.log(res.slice(0, lastIndex+1));
}

columns(["Write","good","coderbyte", "every","day", "long", "johnnyStorm"]);

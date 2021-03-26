function columns(arr) {
    let res = "";
    for(var i = 0; i < arr.length; i++){
        let str = arr[i];
        for(var j = 0; j < str.length; j++){
            res += str[j] + " ";
        }
        console.log(res)
    }
}

columns(["Write","good","code","every","day"]);
// columns("Write good code every day");
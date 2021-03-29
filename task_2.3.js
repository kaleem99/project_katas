function columns(arr) {
    let res = "";
    for(var i = 0; i < arr.length; i++){
        let j = 0;
        while(j < arr.length){
            if(i >= arr[j].length){
                res += " ";
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

columns(["Write","good","code","every","day"]);

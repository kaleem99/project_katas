function    arrayFrame(array)
{
    str = '';
    long = array[0];
    for(i = 0; i < array.length; i++)
    {
        if(array[i].length > long.length)
        {
            //array[i].length = long.length;
            long = array[i];
        }
    }
    //console.log(long);
    len = long.length;
    star = "****";
    for(j = 0; j < long.length; j++)
    {
        star += "*";
    }
    console.log(star);
    // for(k = 0; k < array.length; k++)
    // {
       
    // }
    space = 0;
    for(l = 0; l < long.length; l++)
    {
        space = star.length - array[l].length;
        s = "";
        while(space > 3)
        {
            s += " ";
            space--;
        }
        console.log("* " + array[l] + s + "*");
    }
    console.log(star);
}
arrayFrame(["write", "Good", "code", "every", "day"]);
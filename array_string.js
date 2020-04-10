function    arrayString(array)
{
    long_length = 0;
    var long = '';
    for(i = 0; i < array.length; i++)
    {
       if(array[i].length > long_length)
        {
            long_length = array[i].length;
            long = array[i];
        }
        else if(array[i].length == long.length)
        {
            long  += ("\n" + array[i]);
        }
    }
    console.log(long);
}

// arrayString(["the", "quick", "brown", "fox", "ate", "my", "chickens"]);
 arrayString(["my", "n", "is", "once", "upon", "aim", "time",]);
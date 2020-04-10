function    listCombine(array1, array2)
{
    length = array1.length + array2.length;
    array_out_put = [];
    j = 0;
    k = 0;
    for(i = 0; i < length; i++)
    {
        if(i % 2 == 0)
        {
            array_out_put[i] = array1[j++];
        }
        else{
            array_out_put[i] = array2[k++];
        }
    }
    console.log(array_out_put);
    console.log(length);
}

listCombine([11, 22, 33], [1, 2, 3]);
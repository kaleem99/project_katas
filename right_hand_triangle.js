function    triangle(number)
{
    str = '';
    for(i = 0; i < number; i++)
    {
        for(j = 0; j <= i; j++)
        {
            str += "*";
        }
        console.log(str);
        str = '';
    }
}

triangle(4);
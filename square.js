function    square(number)
{
    str = '';
    for(i = 0; i < number; i++)
    {
        for(j = 0; j < number; j++)
        {
            str += "#";
        }
        console.log(str);
        str = '';
    }
}

square(4);
function    triangle(number)
{
    for( i = 0; i < number; i++)
    {
        str = '';
        for(j = 1; j < (number - i); j++)
        {
             str += ' ';
        }
        for( k = 0; k < (2 * i + 1); k++)
        {
            str += "#";
        }
        console.log(str);
    }
}
triangle(4);
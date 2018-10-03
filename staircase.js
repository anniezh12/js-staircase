function staircase(n)
{
//first method using loops

   for(let i=1;i<=n;i++)
{    newLine = '';
    for(let j=1;j<=n;j++)
  {
          if(i<j)
          {
               newLine +=  ' ';
          }
          else
          {
               newLine += '#';
          }
  }
          console.log(newLine);
}
}

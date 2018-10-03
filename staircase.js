//first method using loops
function staircase(n)
{

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

//Second method using recursion
var newLine = '',i=1;

function staircase2(n)
{
  if(i>n)
  {
    return;
  }
  else {
    if(i<=n-1)
    {
      newLine += ' ';
    }
    else
    {
          newLine +=  '#';
    }
}
  console.log()
}

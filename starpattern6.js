var i;
var j;
for(i=1;i<=5;i++)
{
var str="";
for(j=1;j<=5;j++)
{
  if(i==1&&j==1||i==2&&j==1||i==2&&j==2||i==3&&j==1||i==3&&j==3||i==4&&j==1||i==4&&j==4||i==5)
  {
    str=str+"*";
  }
  else
  {
    str=str+" ";
  }
}
console.log(str);
}
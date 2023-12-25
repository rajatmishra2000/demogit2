var i;
var j;
for(i=1;i<=5;i++)
{
var str=" ";
for(j=1;j<=5;j++)
{
if(i==1||i==5||j==1||j==5)
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
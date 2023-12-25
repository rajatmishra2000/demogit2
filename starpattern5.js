var i;
var j;
var k;
for(i=1;i<=5;i++)
{
var str="";
for(k=1;k<=40-i;k++)
{
    str=str+" ";
}
for(j=1;j<=i;j++)
{
  str=str+"*";
}
console.log(str);
}
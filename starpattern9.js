var i;
var j;
for(i=1;i<=5;i++)
{
var str="";
for(j=1;j<=9;j++)
{
    if(i==1&&j==5||i==2&&j==3||i==2&&j==6||i==3&&j==2||i==3&&j==8||i==4&&j==1||i==4&&j==9||i==5)
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
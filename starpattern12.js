var i;
var j;
for(i=1;i<=9;i++)
{
    var str="";
for(j=1;j<=5;j++)
{
    if(i==1&&j==5||i==2&&j==4||i==2&&j==5||i==3&&j==3||i==3&&j==4||i==3&&j==5||i==4&&j==2||i==4&&j==3||i==4&&j==4||i==4&&j==5||i==5||i==6&&j==2||i==6&&j==3||i==6&&j==4||i==6&&j==5||i==7&&j==3||i==7&&j==4||i==7&&j==5||i==8&&j==4||i==8&&j==5||i==9&&j==5)
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
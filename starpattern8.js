var i;
var j;
for(i=5;i>=1;i--)
{
    var str="";
for(j=9;j>=1;j--)
{
if(i==5&&j==1||i==5&&j==2||i==5&&j==3||i==5&&j==4||i==5&&j==5||i==5&&j==6||i==5&&j==7||i==5&&j==8||i==5&&j==9||i==4&&j==2||i==4&&j==3||i==4&&j==4||i==4&&j==5||i==4&&j==6||i==4&&j==7||i==4&&j==8||i==3&&j==3||i==3&&j==4||i==3&&j==5||i==3&&j==6||i==3&&j==7||i==2&&j==4||i==2&&j==5||i==2&&j==6||i==1&&j==5)
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
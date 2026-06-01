export{}
let n=123,rev=0;
while(n>0){rev=rev*10+n%10;n=Math.floor(n/10);}console.log(rev);
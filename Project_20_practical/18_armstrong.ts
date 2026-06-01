export{}
let n=153,t=n,res=0;
while(t>0){let d=t%10;res+=d*d*d;t=Math.floor(t/10);}console.log(res===n);
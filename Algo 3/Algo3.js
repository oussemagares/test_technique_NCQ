function solution(A){
var somme=0;
var N=A.length
var M=0
 A = A.map(i => {return Math.abs(i)})
 M=Math.max(...A)
somme=A.reduce((a, b) => {
    return a + b;
  });
var count = [M + 1]
for (let x = 0; x < N; x++) {
    count[Number(A[x])]+=1;
}
var dp =[-1] * (somme+1)
dp[0]=0
for (let i = 1; i < M+1; i++) {
    if (count[i]>0){
        for (let j = 0; j < somme; j++) {
           if(dp[j]>=0){
               dp[j]=count[i]
           }else if(j>=i && dp[j-i]>0){
               dp[j]=dp[j-i]-1
           }
            
        }
    }

}
result =somme
for (let i = 0; i <somme / 2 +1 ; i++) {
   if(dp[i]>=0){
       result=Math.min(result,somme-2*i)
   }
    
}
return result;
}


t=[1,5,2,-2]
console.log(solution(t))
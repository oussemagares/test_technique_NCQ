//Npm install for console-read-write or(npm i --save console-read-write in floder)
//in visual studio code  its banned to read and wirte from console so go to seetings then serache code runner 
//and enable Run in terminale 
const io = require('console-read-write');
 var number=0
 var M=0
 var A=[]
 var N= []

async function main() {
    while (number<1  || number>100000) {
      io.write('Give Number N');
      number = Number(await io.read());
    }
    for (let i = 1; i <= number; i++) {
        N.push(0)
    }
    while (M<1 || M>100000) {
        io.write('Give M');
        M= Number(await io.read());
      }
      io.write('========== A table ========');
      for (let i = 0; i <= M; i++) {
          let inp=0
          while(inp<=0)
          {
            io.write('Give the elment A['+i+']');
            inp=Number(await io.read())
          }
          A.push(Number(inp))
        
      }
}

function solution(N, A){
    A.forEach(element => {
       for (let i = 0; i <=number; i++) {
         if(element==i){
           N[i-1]+=1
           }
    
          if(element==number+1)
          {
             N= N.map((num) => Math.max(...N));
          } 
         
       }
       console.log(N)
    });
    return N
    }

main().then(()=>{
    console.log("result = " ,solution(N,A))
});

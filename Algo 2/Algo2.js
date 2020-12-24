
//variables
const io = require('console-read-write');
var A =[]
var B =[]
var L =0
var p = 0

async function main() {
    while (L<1  || L>100000) {
        io.write('Give Number L');
        L = Number(await io.read());
      }
      while (p<1 || p>100000) {
          io.write('Give P');
          p= Number(await io.read());
        }
        io.write('========== A table ========');
        for (let i = 0; i <= L -1 ; i++) {
            let inp=0
            while(inp<=0)
            {
              io.write('Give the elment A['+i+']');
              inp=Number(await io.read())
            }
            A.push(Number(inp))
          
        }
        io.write('========== B table ========');
        for (let i = 0; i <= L -1 ; i++) {
            let inp=0
            while(inp<=0)
            {
              io.write('Give the elment B['+i+']');
              inp=Number(await io.read())
            }
            B.push(Number(inp))
          
        }
}



function solution  (A,B)
{
  let max = Number(Math.max(...A));

  let  fibo  = [];
  fibo [ 0 ] = 1 ;
  fibo [ 1 ] = 1 ;

    for (let i = 2; i < max +2; i++) {
        fibo [i] = Number((fibo [i - 1 ] + fibo [i - 2 ]) % (Math.pow(2, p )))  
    }
    var  result = [];  
    for ( let i = 0 ; i < L ; i ++ ) {
        let x=A[i]
        result [i] = fibo [x] % (Math.pow(2, B [i])); 
    }

    return result
}
main().then(()=>{
    console.log("result = " ,solution(A,B))
});

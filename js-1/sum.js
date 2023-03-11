function sum(n){
    let r = 0
    for(let i=1;i<=n;i+=1){
        r = r+i
    }
  console.log('El resultado es: '+r)
}
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120

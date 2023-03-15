// escribe la función max acá
function max(array){
    let ncompara = array[0]
    for(let a = 0; a<array.length-1;a+=1){
        //console.log(array[a])
        let num2 = array[a]
        if(ncompara < num2){
            ncompara = num2
        }
    }
    return ncompara
    
}

console.log(max([1, 3, 2])) // 3
console.log(max([14,10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined
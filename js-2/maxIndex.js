// escribe la función maxIndex acá

function maxIndex(array){
    let ncompara = array[0]
    let indice = -1
    for(let i = 0; i<array.length;i+=1){
        let num2 = array[i]
        if(num2 >= ncompara){
            ncompara = num2
            indice = i
        }
    }
    return indice
    
}
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 19, 8, 17, 6, 55, 4])) // 5
console.log(maxIndex([])) // -1


function bmaxIndex(array){
    let ncompara = array[0]
    let indice = -1
    let i = 0 
    while(i<array.length){
        let num2 = array[i]
        if(num2 >= ncompara){
            ncompara = num2
            indice = i
        }
        i+=1
    }
    return indice
}
console.log(bmaxIndex([1, 3, 2])) // 1
console.log(bmaxIndex([10, 9, 8, 17, 6, 5, 4])) // 3
console.log(bmaxIndex([114,25])) // 0 
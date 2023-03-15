function join(array){
    let res = ''
    for(i = 0; i<array.length; i+=1){
        let v1 = array[i]
        res = res+v1+' ' 
    }
    return res
}

console.log(join([1, 3, 2, 'uno', 'dos', 'tres'])) // 3

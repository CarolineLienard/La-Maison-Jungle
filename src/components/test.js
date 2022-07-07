function calcul(x, y){
    return x*y
}


calcul()


const arr1 = [1,2,3]

function foo(arr, callback){
    const newArray = []
    for(i = 0; i < arr.length; i++){
        newArray.push(callback(arr[i]))
    }

    return newArray
}

const result = foo(arr1, (value) => {
    return value * 2
})
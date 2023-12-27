const arr = [1, 2, 3]

function some(array, callback) {                            //[1,2,3,] ||  f {el => el > 1}
    for (i = 0; i < array.length; i++){
        if(callback(array[i], i, array)) {                            //if(вызов функции которую передвали т.е  el => el > 1 ) =>
            return true                                      // => array[i] => 1 => 1 > 1   и так по циклу
        }
    }
    return false
  }


console.log(some(arr, el => el > 1)) // true - те саме, що arr.some(el => el > 1)


function filter(array, callback) {
    const result = []
    for (i = 0; i < array.length; i++){
        if(callback(array[i], i, array)) {                            
            result.push(array[i])                                    
        }
    }
    return result
  }

 console.log(filter(arr, el => el > 1)) // [2, 3] - те саме, що arr.filter(el => el > 1)


 function reduce(array, callback, initialValue) { 
  if (array.length === 0 && initialValue === undefined) {
    throw new TypeError('Reduce of empty array with no initial value');
  } 
  let accumulator = initialValue !== undefined ? initialValue : array[0];
  const startIndex = initialValue !== undefined ? 0 : 1;

  for( let i = startIndex; i < array.length; i++ ) {
    accumulator = callback(accumulator, array[i], i, array)
  }
      return accumulator
}
  
   console.log(reduce(arr, (sum, el) => sum + el, 0)) // 6 - те саме, що arr.reduce((sum, el) => sum + el, 0)

// console.log([].reduce(() => 10, [1]))
console.log(reduce([],() => 10, [1]));
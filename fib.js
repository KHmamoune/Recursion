function fibs(num){
  let arr = []

  if(num > 0){
    arr.push(0)
    arr.push(1)
  }else{
    arr.push(0)
  }

  for(let i = 2; i < num; i++){
    arr.push(arr[i-2] + arr[i-1])
  }

  return arr
}

function fibsRec(arr, num){
  if(num == 1){
    arr[num-1] = 0
    return arr

  }else if(num == 2){
    arr[num-1] = 1
    return arr

  }else{
    arr[num-1] = fibsRec(arr, num-2)[num-3] + fibsRec(arr, num-1)[num-2]
    return arr

  }
}

console.log(fibs(8))
console.log(fibsRec([], 8))


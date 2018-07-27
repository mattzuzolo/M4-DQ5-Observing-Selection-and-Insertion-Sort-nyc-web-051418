function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  
  let array = [15, 7, 5, 3, 10, 25]

// [15, 7, 5, 3, 10, 25]
// 3, 7, 5, 15, 10, 25
// 3, 5, 7, 15, 10, 25
// 3, 5, 10, 15, 7, 25
// 3, 5, 10, 7, 15, 25
// 3, 5, 10, 7, 25, 15


function selectionSort(array){

  for (let i = 0; i < array.length - 1 ; i++){

    let smallestItem = array[i + 1];
    let smallestItemIndex = i + 1;
    let holder = 0;
    
      for (let i2 = (i + 1); i2 < array.length; i2++){
        console.log(`Nested for loop has run ${i2} times`)

        if (array[i2] < smallestItem){
          smallestItem = array[i2];
          smallestItemIndex = i2;
        }
      }


    holder = array[i];
    console.log("holder", holder)
    array[i] = array[smallestItemIndex];
    console.log("smallest index", smallestItemIndex)
    array[smallestItemIndex] = holder;
  
    }

    return array;

}

console.log(selectionSort(array))
}

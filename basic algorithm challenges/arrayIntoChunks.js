function chunks(arr, size) {
 var newArr = [];
 while (arr.length) {
   newArr.push(arr.splice(0,size));
 }
 return newArr;
}

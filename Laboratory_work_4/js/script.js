let arr1 = [2, 8, 1, 9, 3, 15, 46, 4, 88, 55, 66, 12, 7, 99, 45, 6];
let arr2 = [2, 8, 1, 9, 3, 15, 46, 4, 88, 55, 66, 12, 7, 99, 45, 6];

console.log(arr1);

console.log("");

console.log(arraySorter.exchangeSort(arr1));
console.log(arraySorter.exchangeSort(arr2, false));

console.log("");

let arr3 = [2, 8, 1, 9, 3, 15, 46, 4, 88, 55, 66, 12, 7, 99, 45, 6];
let arr4 = [2, 8, 1, 9, 3, 15, 46, 4, 88, 55, 66, 12, 7, 99, 45, 6];

console.log(arraySorter.selectionSort(arr3));
console.log(arraySorter.selectionSort(arr4, false));

console.log("");

let arr5 = [2, 8, 1, 9, 3, 15, 46, 4, 88, 55, 66, 12, 7, 99, 45, 6];
let arr6 = [2, 8, 1, 9, 3, 15, 46, 4, 88, 55, 66, 12, 7, 99, 45, 6];

console.log(arraySorter.insertionSort(arr5));
console.log(arraySorter.insertionSort(arr6, false));

console.log("");


let arr7 = [2, 8, 1, 9, 3, 15, 46, 4, 88, 55, 66, 12, 7, 99, 45, 6];
let arr8 = [2, 8, 1, 9, 3, 15, 46, 4, 88, 55, 66, 12, 7, 99, 45, 6];

console.log(arraySorter.shellSort(arr7));
console.log(arraySorter.shellSort(arr8, false));

console.log("");



let arr9 = [2, 8, 1, 9, 3, 15, 46, 4, 88, 55, 66, 12, 7, 99, 45, 6];
let arr10 = [2, 8, 1, 9, 3, 15, 46, 4, 88, 55, 66, 12, 7, 99, 45, 6];

console.log(arraySorter.quickSort(arr9));
console.log(arraySorter.quickSort(arr10, false));

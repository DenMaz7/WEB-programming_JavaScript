function fillArrayWithRandomNumbers(array) {
    for (let i = 0; i < 101; i++) {
        array.push(Math.floor(Math.random() * 1000)); 
    }
}

// function cloneArray (arr){
//     let arr1 = [];
//     for (let i = 0; i < arr.length; i++) {
//        arr1[i] = arr[i];
//     }
//     return arr1;
// }

//console.log(arr.sort());

let unsparseArr = new Array();
fillArrayWithRandomNumbers(unsparseArr);

console.log("==============================================================================================================================================");
console.log("Unsorted unsparse array: ", unsparseArr);
console.log("==============================================================================================================================================");

console.log("\t\tEXCHANGE SORT");
console.log("Ascending: ", arraySorter.exchangeSort(unsparseArr.slice()));
console.log("Descending: ", arraySorter.exchangeSort(unsparseArr.slice(), false));
console.log("----------------------------------------------------------------------------------------------------------------------------------------------");

console.log("\t\tSELECTION SORT");
console.log("Ascending: ", arraySorter.selectionSort(unsparseArr.slice()));
console.log("Descending: ", arraySorter.selectionSort(unsparseArr.slice(), false));
console.log("----------------------------------------------------------------------------------------------------------------------------------------------");

console.log("\t\tINSERTION SORT");
console.log("Ascending: ", arraySorter.insertionSort(unsparseArr.slice()));
console.log("Descending: ", arraySorter.insertionSort(unsparseArr.slice(), false));
console.log("----------------------------------------------------------------------------------------------------------------------------------------------");

console.log("\t\tSHELL SORT");
console.log("Ascending: ", arraySorter.shellSort(unsparseArr.slice()));
console.log("Descending: ", arraySorter.shellSort(unsparseArr.slice(), false));
console.log("----------------------------------------------------------------------------------------------------------------------------------------------");

console.log("\t\tQUICK SORT");
console.log("Ascending: ", arraySorter.quickSort(unsparseArr.slice()));
console.log("Descending: ", arraySorter.quickSort(unsparseArr.slice(), false));



let sparseArr = new Array();
fillArrayWithRandomNumbers(sparseArr);

sparseArr[177] = 288;
sparseArr[133] = 444;

console.log("==============================================================================================================================================");
console.log("Unsorted sparse array: ", sparseArr);
console.log("==============================================================================================================================================");

console.log("\t\tEXCHANGE SORT");
console.log("Ascending: ", arraySorter.exchangeSort(sparseArr.slice()));
console.log("Descending: ", arraySorter.exchangeSort(sparseArr.slice(), false));
console.log("----------------------------------------------------------------------------------------------------------------------------------------------");

console.log("\t\tSELECTION SORT");
console.log("Ascending: ", arraySorter.selectionSort(sparseArr.slice()));
console.log("Descending: ", arraySorter.selectionSort(sparseArr.slice(), false));
console.log("----------------------------------------------------------------------------------------------------------------------------------------------");

console.log("\t\tINSERTION SORT");
console.log("Ascending: ", arraySorter.insertionSort(sparseArr.slice()));
console.log("Descending: ", arraySorter.insertionSort(sparseArr.slice(), false));
console.log("----------------------------------------------------------------------------------------------------------------------------------------------");

console.log("\t\tSHELL SORT");
console.log("Ascending: ", arraySorter.shellSort(sparseArr.slice()));
console.log("Descending: ", arraySorter.shellSort(sparseArr.slice(), false));
console.log("----------------------------------------------------------------------------------------------------------------------------------------------");

console.log("\t\tQUICK SORT");
console.log("Ascending: ", arraySorter.quickSort(sparseArr.slice()));
console.log("Descending: ", arraySorter.quickSort(sparseArr.slice(), false));
console.log("----------------------------------------------------------------------------------------------------------------------------------------------");
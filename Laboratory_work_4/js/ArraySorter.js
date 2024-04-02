(function (window){
    let arraySorter = {};
 
    arraySorter.exchangeSort = function (arr, ascending = true) {
        let comparisons = 0;
        let exchanges = 0;
        let undefinedCount = 0;

        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = arr.length - 1; j > i; j--) {
                if (arr[j] === undefined || arr[j-1] === undefined) {
                    if(arr[j] === undefined){
                        arr.splice(j, 1);
                        undefinedCount++;
                    }
                    continue; 
                }
                comparisons++;
                if ((ascending && arr[j] < arr[j-1]) || (!ascending && arr[j] > arr[j-1])) {
                    let temp = arr[j-1];
                    arr[j-1] = arr[j];
                    arr[j] = temp;
                    exchanges++;
                }
            }
        }

        console.log(`Comparisons - ${comparisons}, Exchanges - ${exchanges}.`);
        if (undefinedCount > 0) {
            console.log(`In the array, there were ${undefinedCount} undefined elements encountered.`);
        }
        return arr;  
    }

    arraySorter.selectionSort = function (arr, ascending = true) {
        let comparisons = 0;
        let exchanges = 0;
        let undefinedCount = 0;

        for (let i = 0; i < arr.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] === undefined || arr[j-1] === undefined) {
                    if(arr[j] === undefined){
                        arr.splice(j, 1);
                        undefinedCount++;
                    }
                    continue; 
                }
                comparisons++;
                if ((ascending && arr[j] < arr[minIndex]) || (!ascending && arr[j] > arr[minIndex])) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                let temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
                exchanges++;
            }            
        }

        console.log(`Comparisons - ${comparisons}, Exchanges - ${exchanges}.`);
        if (undefinedCount > 0) {
            console.log(`In the array, there were ${undefinedCount} undefined elements encountered.`);
        }
        return arr;
    }
    
    arraySorter.insertionSort = function(arr, ascending = true) {
        let comparisons = 0;
        let exchanges = 0;
        let undefinedCount = 0;

        for (let i = arr.length - 1; i >= 0; i--) {
            if(arr[i] === undefined){
                arr.splice(i, 1);
                undefinedCount++;
            }
        }

        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            let j = i - 1;
            while (j >= 0 && ((ascending && arr[j] > key) || (!ascending && arr[j] < key))) {
                comparisons++;
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
            exchanges++;
        }

        console.log(`Comparisons - ${comparisons}, Exchanges - ${exchanges}.`);
        if (undefinedCount > 0) {
            console.log(`In the array, there were ${undefinedCount} undefined elements encountered.`);
        }
        return arr;
    }

    arraySorter.shellSort = function(arr, ascending = true) {
        let comparisons = 0;
        let exchanges = 0;
        let undefinedCount = 0;

        for (let i = arr.length - 1; i >= 0; i--) {
            if(arr[i] === undefined){
                arr.splice(i, 1);
                undefinedCount++;
            }
        }

        for (let step = Math.floor(arr.length / 2); step > 0; step = Math.floor(step / 2)) {
            for (let i = step; i < arr.length; i++) {
                for (let j = i - step; j >= 0 && ((ascending && arr[j] > arr[j + step]) || (!ascending && arr[j] < arr[j + step])); j -= step) {
                    comparisons++;
                    let temp = arr[j];
                    arr[j] = arr[j + step];
                    arr[j + step] = temp;
                }
                exchanges++;
            }
        }                                                  

        console.log(`Comparisons - ${comparisons}, Exchanges - ${exchanges}.`);
        if (undefinedCount > 0) {
            console.log(`In the array, there were ${undefinedCount} undefined elements encountered.`);
        }
        return arr;
    }


    arraySorter.quickSort = function(arr, ascending = true) {
    let comparisons = 0;
    let exchanges = 0;
    let undefinedCount = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        if(arr[i] === undefined){
            arr.splice(i, 1);
            undefinedCount++;
        }
    }
    
    function QuickSort(arr, first, last) {
        let middle = arr[Math.floor((first + last) / 2)];
        let i = first;
        let j = last;

        do {
            while ((ascending && arr[i] < middle) || (!ascending && arr[i] > middle)) {
                i++;
                comparisons++;
            }
            while ((ascending && arr[j] > middle) || (!ascending && arr[j] < middle)) {
                j--;
                comparisons++;
            }

            if (i <= j) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                exchanges++;
                i++;
                j--;
            }

        } while (i <= j);

        if (j > first) {
            QuickSort(arr, first, j);
        }
        if (i < last) {
            QuickSort(arr, i, last);
        }
    }

    QuickSort(arr, 0, arr.length - 1);

    console.log(`Comparisons - ${comparisons}, Exchanges - ${exchanges}.`);
    if (undefinedCount > 0) {
        console.log(`In the array, there were ${undefinedCount} undefined elements encountered.`);
    }
    return arr;
}
    window.arraySorter = arraySorter;

})(window);
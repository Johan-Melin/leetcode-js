/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let sortedArr = [];
    let unsortedArr = [];
    let lookup = {};
    let counts = {};

    // Add each element of arr2 to the lookup object for faster retrieval
    for (let num of arr2) {
        lookup[num] = true;
    }

    // Increment the count of that element in the counts object, or if the element is not in arr2, add it to the unsorted array
    for (let num of arr1) {
        if (num in lookup) {
            counts[num] = counts[num] + 1 || 1;
        } else {
            unsortedArr.push(num);
        }
    }

    // For each number in arr2, retrieve its count from arr1 (stored in 'counts') and add that number to the sorted array as many times as the count
    for (let num of arr2) {
        let count = counts[num] || 0;
        while (count-- > 0) {
            sortedArr.push(num);
        }
    }

    unsortedArr.sort((a, b) => a - b);
    Array.prototype.push.apply(sortedArr, unsortedArr);
    return sortedArr;
};

relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]); // [2,2,2,1,4,3,3,9,6,7,19]
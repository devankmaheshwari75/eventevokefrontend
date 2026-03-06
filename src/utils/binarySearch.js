// Binary Search Implementation in JavaScript

/**
 * Performs binary search on a sorted array.
 * @param {number[]} arr - The sorted array to search.
 * @param {number} target - The target value to search for.
 * @returns {number} The index of the target value if found, otherwise -1.
 */
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Target not found
}

export default binarySearch;

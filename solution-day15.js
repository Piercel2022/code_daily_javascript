/**
 *  Find sum of add numbers in an array
 * input : sumOdd([1, 3, 4, 5, 6, 8, 9])
 * Output: 18
 * 
 **/ 
function sumOdd(arr) {
    let sum = 0;
    for (let i = 0; i<=arr.length; i++){
        if (arr[i]%2 === 1) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumOdd([1, 3, 4, 5, 6, 8, 9]));
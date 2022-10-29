// Reverse  a number without using .reverse(), .split() or .join() 
function reverseNumber(num){
    let rev = 0, lastDigit;
    while(num > 0){
        lastDigit = num % 10;
        rev = rev * 10 + lastDigit;
        num = Math.floor(num/10);
    }
    return rev;
}

console.log(reverseNumber(153));
console.log(reverseNumber(9532));
console.log(reverseNumber(54321));
console.log(reverseNumber(12921));
console.log(reverseNumber(0987654321));

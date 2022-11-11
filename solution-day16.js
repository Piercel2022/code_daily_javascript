/**
 * Given a number, return the total sum of that number 
 * multiplied by every number between 1 and 10 using 
 * recursion
 * input: multiSum(4) will outpout 220
 * 
 *  */ 

function multiSum(num, ten = 1) {
    if (ten == 11) {
        return 0;
    } else {
        return ten * num + multiSum(num, ten + 1);
    }
}

console.log(multiSum(4));
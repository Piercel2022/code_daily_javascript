/**
 * Print prime numbers between given range m to n
 * @input printPrime(20, 50)
 * @output 23, 29, 31, 37, 41, 43, 47
 */
function checkPrime(num){
    if(num == 1 || num == 0) return false;

    for(let i = 2; i < num; i++){
        if(num % i == 0) return false;
    }
    return true;
}

function printPrime(n, m){
    for(let i = n; i < m; i++){
        if(checkPrime(i)){
            console.log(i);
        }
    }
}
printPrime(20, 50);
printPrime(10, 20);

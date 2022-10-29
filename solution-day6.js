// Check whether a number is perfect number or not
function checkPerfect(n){
    let i, sum = 0;
    for(i = 1; i <= n/2; i++){
        if(n%i === 0){
            sum += i;
        }
    }
    if(n === sum && sum !== 0){
        return true;
    }
    return false;
}

console.log(checkPerfect(28));
console.log(checkPerfect(36));
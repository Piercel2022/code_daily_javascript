// Check if the given three digit number is an Armstrong number or not
function checkArmstrong(n){
    let sum = 0, orgNum = n;

    while(n > 0){
        let remainder = n % 10;
        sum += remainder * remainder * remainder;
        n = parseInt(n / 10);
    }
    if(sum == orgNum){
        return true;
    }else{
        return false;
    }
}

console.log(checkArmstrong(153));
console.log(checkArmstrong(326));
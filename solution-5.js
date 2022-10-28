function findFact(n){
    let i, fact = 1;
    for(i = 1; i <= n; i++){
     fact *= i
    }
    return fact;
}

console.log(findFact(5));
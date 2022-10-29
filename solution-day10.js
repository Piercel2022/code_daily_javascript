// Print Fibonacci Series Up to n Terms
function fib(num){
    let n1 = 0, n2 = 1, nextTerm;
    for(let i = 1; i <= num; i++){
        console.log(n1)
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

fib(9);
fib(10);
fib(11);
fib(12);

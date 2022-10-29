//Print all the numbers between min and max which are divisible by 5 and
// not divisible by 11

function printNum(min, max){
    for(let i = min; i <= max; i++){
        if(i % 5 === 0 && i % 11 != 0){
            console.log(i)
        }
    }
}
printNum(40, 80);
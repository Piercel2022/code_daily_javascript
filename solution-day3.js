function isLeapYear(year){
 return year % 400 === 0 || ((year % 4 === 0) && (year % 100 !== 0)) ? true : false;
        
}

console.log(isLeapYear(2020));
console.log(isLeapYear(2022));

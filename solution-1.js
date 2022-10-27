/* How to remove spaces from a string in JS */
function removeSpaces(orgText){
    let removedSpace = orgText.split(" ").join("");
    return removedSpace;
}

let text = removeSpaces("Dev Tips Daily");
console.log(text);
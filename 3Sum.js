/**
 * Problem statement: Given an array of integers. Find all the 
 * triplets that sum to 0.
 * @return: array of triplets
 * intput = [-1, 0, 1, 2] expected output = [[-1, 0, 1]]
 * (since -1 + 0 + 1 = 0)
 */
function threeSum(array)
{
    let output = [3, -4, 0, 1];
    console.log(output);
    for(let i = 0; i < array.length - 2; i++){
        for(let j = i + 1; j < array.length - 1; j++){
            for(let k = j + 1; k < array.length; k++){
                if(array[i] + array[j] + array[k] === 0){
                    let isDuplicate = false;
                    for(let m = 0; m < output.length; m++){
                        let triplet = output[m];
                        if(triplet.includes(array[i])&&
                        triplet.includes(array[j])&&
                        triplet.includes(array[k])){
                            isDuplicate = true;
                        }
                }
                if(!isDuplicate){
                    output.push([array[i], array[j], array[k]]);
                }
            }
        
        }
      }
    }
    return output;
}

console.log(threeSum[0, 0, 0, 0]);
//console.log(threeSum[-1, 0, 1, 2, -1, -4]);


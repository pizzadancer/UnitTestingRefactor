function launchOutput(num){
 
  let divisorArray = [2, 3, 5];
  let booleanResult = [];

  // Object that holds the messages that need to be returned
  let returnMessages = {
  // The keys are numerical representations of the boolean value of whether
  // a number is divisible by 2, 3, or 5, "1,0,0" for divBy2 for example
  //[2, 3, 5]  : return message
    "1,0,0" : "Launch!",                      // ONLY divisble by 2
    "0,1,0" : "Code!",                        // ONLY divisble by 3
    "0,0,1" : "Rocks!",                       // ONLY divisble by 5
    "1,1,0" : "LaunchCode!",                  // divisble by 2 AND 3
    "0,1,1" : "Code Rocks!",                  // divisble by 3 AND 5
    "1,0,1" : "Launch Rocks!",                // divisble by 2 AND 5
    "1,1,1" : "LaunchCode Rocks!",            // divisble by 2, 3, AND 5
    "0,0,0" : "Rutabagas! That doesn't work." // NOT divisble by 2, 3, AND 5
  }

  // Loop through the divisors[2,3,5],
  //  check if the num variable is divisible by each divisor
  //  push the boolean result to the created booleanResult array
  for (let i = 0; i < divisorArray.length; i++) {
    booleanResult.push(isDivisible(num, divisorArray[i]));
  }

  // With the booleanResult of the looped divisibilityCheck{isDivisible},
  //  convert the booleans into numeric values {1 = true, 0 = false}, 
  //  then cast into a String
  let booleanResultNum = String(booleanToNum(booleanResult));
  return returnMessages[booleanResultNum];
}

function isDivisible(num, divisor) {
  return num % divisor === 0;
}

// Converts boolean values into numeric representations {1 = true, 0 = false} 
function booleanToNum(bools) {
  let booleanNum = []
  for (let i = 0; i < bools.length; i++) {
    if (bools[i] === true) {
      booleanNum.push(1);    
    } else {
      booleanNum.push(0);
    }
  }
  return booleanNum;
}


module.exports = launchOutput;

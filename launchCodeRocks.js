function launchOutput(num){
 
  let conditionsForValidity;
  let winningStatement;
  let validity;

  // When passed a number that is ONLY divisible by 2, return 'Launch!'
  conditionsForValidity = [1, 0, 0];
  winningStatement = 'Launch!';
  valid = validityCheck(num, conditionsForValidity, winningStatement);
  if (valid === winningStatement) { return valid }

  
  // When passed a number that is ONLY divisible by 3, return 'Code!'
  conditionsForValidity = [0, 1, 0];
  winningStatement = 'Code!';
  valid = validityCheck(num, conditionsForValidity, winningStatement);
  if (valid === winningStatement) { return valid }


  // When passed a number that is ONLY divisible by 5, return 'Rocks!'
  conditionsForValidity = [0, 0, 1];
  winningStatement = 'Rocks!';
  valid = validityCheck(num, conditionsForValidity, winningStatement);
  if (valid === winningStatement) { return valid }

 
  // When passed a number that is divisible by 2 AND 3, return 'LaunchCode!'
  conditionsForValidity = [1, 1, 0];
  winningStatement = 'LaunchCode!';
  valid = validityCheck(num, conditionsForValidity, winningStatement);
  if (valid === winningStatement) { return valid }


  // When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'
  conditionsForValidity = [0, 1, 1];
  winningStatement = 'Code Rocks!';
  valid = validityCheck(num, conditionsForValidity, winningStatement);
  if (valid === winningStatement) { return valid }
 
  // When passed a number that is divisible by 2 AND 5, return 'Launch Rocks!'
  conditionsForValidity = [1, 0, 1];
  winningStatement = 'Launch Rocks! (CRASH!!!!)';
  valid = validityCheck(num, conditionsForValidity, winningStatement);
  if (valid === winningStatement) { return valid }

  
  // When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'
  conditionsForValidity = [1, 1, 1];
  winningStatement = 'LaunchCode Rocks!';
  valid = validityCheck(num, conditionsForValidity, winningStatement);
  if (valid === winningStatement) { return valid }
  
  // When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'
  conditionsForValidity = [0, 0, 0];
  winningStatement = "Rutabagas! That doesn't work.";
  valid = validityCheck(num, conditionsForValidity, winningStatement);
  if (valid === winningStatement) { return valid }

}



// Logic for Checks
// arr, objs, loops
function validityCheck(num, conditionsForValidity, winningStatement) {
  let divisorArray = [2, 3, 5];
  let booleanResult = [];
  
  // Loop through the divisors[2,3,5] and return whether the number is divisble by any
  for (let i = 0; i < divisorArray.length; i++) {
    booleanResult.push(isDivisible(num, divisorArray[i]));
  }

  // With the divisibilityResult,
  // convert the result into numeric values {1 = true, 0 = false}
  let booleanResultNum = booleanToNum(booleanResult);
  
  // Check if the booleanResult for divisiblity is equal to the valid conditions,
  // if yes, return true; if no, return false
  let resultCount = 0;
  for (let i = 0; i < booleanResultNum.length; i++) {
    if (booleanResultNum[i] === conditionsForValidity[i]) {
      resultCount++;
    }
  }

  // if the resultCount is 3, that means the result is fully equal to 
  if (resultCount === 3) {
    return winningStatement;
  } 
  
}

function isDivisible(num, divisor) {
  return num % divisor === 0;
}

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
// divisbility 
module.exports = launchOutput;
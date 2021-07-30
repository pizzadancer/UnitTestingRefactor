function launchOutput(num){
  // When passed a number that is ONLY divisible by 2, return 'Launch!'
  // if (isDivisible(num, 3) && !isDivisible(num, 2) && !isDivisible(num, 5)) {
  //   return 'Code!';
  // }
  let conditionsForValidity;
  let winningStatement;
  let validity;
  // When passed a number that is ONLY divisible by 2, return 'Launch!'
  conditionsForValidity = [1, 0, 0];
  winningStatement = 'Launch!';
  valid = validityCheck(num, conditionsForValidity, winningStatement);
  if (valid !== undefined) {
    return valid;
  }

  
  
  // When passed a number that is ONLY divisible by 3, return 'Code!'
  if (num % 2 !== 0 && num % 3 === 0 && num % 5 !== 0) {
    return 'Code!';
  }
  // When passed a number that is ONLY divisible by 5, return 'Rocks!'
  if (num % 5 === 0 && num % 2 !== 0 && num % 3 !== 0) {
    return 'Rocks!';
  }
  // When passed a number that is divisible by 2 AND 3, return 'LaunchCode!'
  if (num % 3 === 0 && num % 2 === 0 && num % 5 !== 0) {
    return 'LaunchCode!';
  }
  // When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'
  if (num % 3 === 0 && num % 2 !== 0 && num % 5 === 0) {
    return 'Code Rocks!';
  }
  // When passed a number that is divisible by 2 AND 5, return 'Launch Rocks!'
  if (num % 3 !== 0 && num % 2 === 0 && num % 5 === 0) {
    return 'Launch Rocks! (CRASH!!!!)';
  }
  // When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'
  if (num % 3 === 0 && num % 2 === 0 && num % 5 === 0) {
    return 'LaunchCode Rocks!';
  } 
  // When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'
  if (num % 3 !== 0 && num % 2 !== 0 && num % 5 !== 0) {
    return "Rutabagas! That doesn't work.";
  } 
  
}



// Logic for Checks
// arr, objs, loops
function validityCheck(num, conditionsForValidity, winningStatement) {
  let divisorArray = [2, 3, 5];
  let booleanResult = [];
  
  // divByLoop(num)
  for (let i = 0; i < divisorArray.length; i++) {
    booleanResult.push(isDivisible(num, divisorArray[i]));
  }

  // convert boolean result to numeric values of 1 = true, 0 = false
  let booleanResultNum = booleanToNum(booleanResult);
  
  // check if all values are equal, return true if they are, false if not
  let resultCount = 0;
  for (let i = 0; i < booleanResultNum.length; i++) {
    if (booleanResultNum[i] === conditionsForValidity[i]) {
      resultCount++;
    }
  }

  if (resultCount === 3) {
    return winningStatement;
  } 
  
}

function isDivisible(num, divisor) {
  return num % divisor === 0;
}

function booleanToNum(bools) {
  // console.log("bools before conversion: "  + bools);
  let newBool= []
  for (let i = 0; i < bools.length; i++) {
    if (bools[i] === true) {
      newBool.push(1);    
    } else {
      newBool.push(0);
    }
  }
  // console.log("newBool: " + newBool);
  return newBool;
}
// divisbility 
module.exports = launchOutput;
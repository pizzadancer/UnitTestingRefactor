const launchOutput = require('../launchCodeRocks.js');
const assert = require('assert');

describe("launchOutput", function(){

  it("should return 'Launch' when passed a number that is ONLY divisible by 2", function() {
    let result = launchOutput(4);
    expect(result).toEqual('Launch!');
  });

  it("should return 'Code' when passed a number that is ONLY divisible by 3", function() {
    let result = launchOutput(9); 
    expect(result).toEqual('Code!');
  });

  it("should return 'Rocks!' when passed a number that is ONLY divisible by 5", function() {
    let result = launchOutput(25);
    expect(result).toEqual('Rocks!');
  });

  it("should return 'LaunchCode!' when passed a number that is divisible by 2 AND 3", function() {
    let result = launchOutput(6);
    expect(result).toEqual('LaunchCode!');
  });

  it("should return 'Code Rocks!' when passed a number that is divisible by 3 AND 5", function() {
    let result = launchOutput(15);
    expect(result).toEqual('Code Rocks!');
  });

  it("should return 'Launch Rocks!' when passed a number that is divisible by 2 AND 5", function() {
    let result = launchOutput(10);
    expect(result).toEqual('Launch Rocks!');
  });

  it("should return 'LaunchCode Rocks!' when passed a number that is divisible by 2, 3, AND 5", function() {
    let result = launchOutput(30);
    expect(result).toEqual('LaunchCode Rocks!');
  });

  it("should return 'Rutabagas! That doesn't work.' when passed a number that is NOT divisible by 2, 3, AND 5", function() {
    let result = launchOutput(29);
    expect(result).toEqual("Rutabagas! That doesn't work.");
  });

});
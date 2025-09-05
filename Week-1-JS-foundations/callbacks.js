function sum(num1, num2, fnToCall){
     let result = num1 + num2;
     fnToCall(result);
}

function displayResult(data){
     console.log("Result of the sum is: ", data);
}

function displayResult2(data){
     console.log("Sums's result is: ", data);
}

// You are only allowed to call one function after this
// How will you display Result of sum

const answer = sum(10, 20, displayResult); // callback function is displayResult
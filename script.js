const divideNumbers = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject(new Error("Division by zero is not allowed"));
        } 
        else {
            let result = num1 / num2;
            resolve(result);
        }
    });
};



divideNumbers(10, 2)
    .then(result => console.log("Test 1: Result =", result))
    .catch(error => console.log("Test 1: Error =", error.message));

divideNumbers(20, 4)
    .then(result => console.log("Test 2: Result =", result))
    .catch(error => console.log("Test 2: Error =", error.message));

divideNumbers(15, 3)
    .then(result => console.log("Test 3: Result =", result))
    .catch(error => console.log("Test 3: Error =", error.message));

divideNumbers(7, 2)
    .then(result => console.log("Test 4: Result =", result))
    .catch(error => console.log("Test 4: Error =", error.message));

divideNumbers(100, 10)
    .then(result => console.log("Test 5: Result =", result))
    .catch(error => console.log("Test 5: Error =", error.message));

divideNumbers(10, 0)
    .then(result => console.log("Test 6: Result =", result))
    .catch(error => console.log("Test 6: Error =", error.message));

divideNumbers(25, 0)
    .then(result => console.log("Test 7: Result =", result))
    .catch(error => console.log("Test 7: Error =", error.message));
    
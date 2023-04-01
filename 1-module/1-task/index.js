function factorial(n) {
  // Basic check for an integer and a non-negative number
  if (n >= 0 && Number.isInteger(n)) {
    let factorial = 1; // The minimum value of the factorial
    while (n > 1) factorial *= n--;
    return factorial;
  } else {
    throw new Error('The factorial of a non-negative integer number')
  }
}

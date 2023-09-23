// add.js
function add(a, b) {
    return a + b;
  }
  
  // Get numbers from command line arguments
  const num1 = parseInt(process.argv[2]);
  const num2 = parseInt(process.argv[3]);
  
  console.log(`The sum of ${num1} and ${num2} is ${add(num1, num2)}`);
  
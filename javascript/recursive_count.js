function recursiveCount(num = 0) {
  // type your code here
  if (num<10) {
    console.log(num);
  }
  if (num<9) {
    recursiveCount(num+1)
  }
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution

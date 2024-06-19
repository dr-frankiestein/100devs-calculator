function MakeCalculator() {
  this.opSwitch = false
  this.operator = ''
  let output = 0
  let a='', b=''

  this.readOut = function(num) {
    let test = document.querySelector('#output')
    test.innerText = num
    console.log(`opSwitch = ${this.opSwitch}`)
  }

  // function to get numbers from button ids
  this.getVal = function(id) {
    if (this.opSwitch == true) {
      (b == '0') ? b = id : b += id
      this.readOut(b)
    }
    else {
      (a == '0') ? a = id : a += id
      this.readOut(a)
    }
    this.opSwitch = false
  }
  // get operator
  this.getOperator = function(id) {
    // document.querySelector('#output').innerText = ''
    this.operator = id
    this.opSwitch = true
  }
  // sum function
  this.sum = function (a,b) {
    output = a + b
    this.readOut(output)
  }
  // subtract function
  this.subtract = function (a,b) {
    output = a - b
    this.readOut(output)
  }
  // multiply function
  this.multiply = function (a,b) {
    output = a*b
    this.readOut(output)
  }
  // divide function
  this.divide = function (a,b) {
    output = a/b
    this.readOut(output)
  }

  this.doMath = function (operator) {
    // if (this.opSwitch = true) {
    //   return output;
    // }
    switch (operator) {
      case "add":
        this.sum(+a,+b);
        break;
      case "subtract":
        this.subtract(+a,+b);
        break;
      case "multiply":
        this.multiply(+a,+b);
        break;
      case "divide":
        this.divide(+a,+b);
        break;
    }
    a = '', b='';
  }
// need a fucntion to GET a, b
}
const calc = new MakeCalculator()

let nums = document.querySelectorAll('.num')
nums.forEach((num) => {
  num.addEventListener('click', () => {
    calc.getVal(num.id)
    // calc.
  });
 })
let ops = document.querySelectorAll('.operator')
ops.forEach((op) => {
  op.addEventListener('click', () => {
    calc.getOperator(op.id)
    // calc.
  });
 })
let equalsBtn = document.querySelector('#equals')
equalsBtn.addEventListener('click', () => {
    calc.doMath(calc.operator)
    // calc.
  });

const add = function(...arr) {
  let s=0;
  for(number of arr)
    s+=number;
  return s;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let s=0;  

  s = arr.reduce(function(total, currentNumber){
    return total+=currentNumber;
  }, 0)

  return s;
};

const multiply = function(arr) {
  let p = 1;

  for(number of arr)
  {
    p*=number;
  }

  return p;
};

const power = function(base, exp) {
  let result = base;
	while(exp>1)
  {
    result *= base;
    exp--;
  }
  return result;
};

const factorial = function(n) {
  if(n === 1 || n === 0)
    return 1;
  else
  {
    let p=1;
    
    while(n)
    {
      p*=n;
      n--;
    } 
    return p;
  }
};

// console.log(sum(2,3));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

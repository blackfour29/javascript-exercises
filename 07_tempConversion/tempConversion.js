const ftoc = function(tempf) { 
  let result = ((tempf-32) * 0.5556);
  if(result % 1 === 0)
    return result;
  else
  {
    console.log(result);
    return parseFloat(result.toFixed(1));
  }
};

const ctof = function(tempc) {
  result = ((tempc*1.8) + 32);
  if(result % 1 === 0)
    return result;
  else
    return parseFloat(result.toFixed(1));
};

// console.log(ctof(30));
// console.log(ftoc(100))

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

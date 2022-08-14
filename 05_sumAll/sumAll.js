const sumAll = function(lowerLimit, upperLimit) {
    console.log(typeof(lowerLimit), typeof(upperLimit))
    if(typeof(lowerLimit) !== "number" || typeof(upperLimit)!== "number" || lowerLimit < 0 || upperLimit < 0)
    {
        return "ERROR";
    }
    if(upperLimit < lowerLimit)
    {
        let temp = upperLimit;
        upperLimit = lowerLimit;
        lowerLimit = temp;
    }

    let sum = 0;

    for(let i=lowerLimit; i<=upperLimit; i++)
        sum+=i;

    return sum;
};

console.log(sumAll(1,"4"));

// Do not edit below this line
module.exports = sumAll;

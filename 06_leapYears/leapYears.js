const leapYears = function(year) {

    if(typeof(year) !== "number")
        return "ERROR";

    if(year % 400 === 0)
        return true;
    else if( year % 4 === 0 && year % 100 !== 0)
        return true;
    else
        return false;
};

console.log(leapYears(2004));

// Do not edit below this line
module.exports = leapYears;

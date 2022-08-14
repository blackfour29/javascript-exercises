const repeatString = function(string, times) {
    let result="";
    if (times < 0)
        return "ERROR";
    else if(times === 0)
        return "";
    else
    { 
        for(let i=1; i<=times; i++)
        {
            result+=string;
        }
        return result;
    }       
};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;

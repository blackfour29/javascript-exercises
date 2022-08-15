const fibonacci = function(number) {
    if(number < 0)
        return "OOPS";
    
    if(typeof(number) === "string")
        number = parseInt(number);

    let a=1, b=1;

    if(number === 1)
        return 1;
    else if(number === 2)
        return 1;
    else
    {
        while(number>2)
        {
            let temp = b;
            b= a+b;
            a=temp;
            number--;
        }
    }

    return b;
};

console.log(fibonacci(5));

// Do not edit below this line
module.exports = fibonacci;

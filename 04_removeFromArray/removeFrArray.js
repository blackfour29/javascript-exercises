const removeFromArray = function(originalArray, ...numbers) {
    let newArray = [];
    for(element of originalArray )
    {
        if(numbers.includes(element))
            continue;
        else
            newArray.push(element);
    }
    return newArray;
    };
        
    // Do not edit below this line
    module.exports = removeFromArray;
    
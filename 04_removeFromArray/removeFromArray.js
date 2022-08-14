const removeFromArray = function(originalArray, ...numbers) {
let newArray = [];
for(element of originalArray )
{
    // console.log(!originalArray.includes(1));
    if(numbers.includes(element))
        continue;
    else
        newArray.push(element);
}
return newArray;
};

//console.log(removeFromArray([3,2,1]));

// Do not edit below this line
module.exports = removeFromArray;

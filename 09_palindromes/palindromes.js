const palindromes = function (string) {
    let stringArr = string
                    .toLowerCase()
                    .replace(/[.,/#!$%^&*;:{}=-_`~()]/g, "")
                    .replace(/s{2,}/g, " ")
                    .split(" ")
                    .join("");

    let reversedArr = Array.from(stringArr).reverse().toString().split(",").join("");

    
    return stringArr.toString() === reversedArr.toString();
};

console.log(palindromes("Animal loots foliated detail of stool lamina."));

// Do not edit below this line
module.exports = palindromes;

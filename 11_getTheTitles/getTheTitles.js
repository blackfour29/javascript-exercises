const getTheTitles = function(objArr) {
    
    // option 1

    // let titlesArr = [];

    // objArr.forEach( (obj) => {
    //     titlesArr.push(obj.title);
    // })

    // return titlesArr;


    // option 2
    let titlesArr = [];

    titlesArr = objArr.map(function(currentElement){
        return currentElement.title;
    });

    return titlesArr
};
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

//   console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;

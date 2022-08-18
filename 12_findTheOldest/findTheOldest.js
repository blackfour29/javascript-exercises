const findTheOldest = function(oldPeople) {
    let oldestAge = 0;
    let oldestPerson;

    oldPeople.forEach(person => {
        let age;
        if(!person.yearOfDeath)
        {
            age = ((new Date()).getFullYear()) - person.yearOfBirth;
        }
        else
            age = person.yearOfDeath - person.yearOfBirth;
        
        if( age > oldestAge)
        {
            oldestAge = age;
            oldestPerson = person;
        }
    })

    return oldestPerson;
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;

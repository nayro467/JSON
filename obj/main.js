const = {
    name:'Nayro',
    Age: 17,
    Hobbies: [sporten,gamen,koken]
};

const personJSON = JSON.stringify(person);
console.log(personJSON)

const JSONstring = '{'Name':'Nayro','Age':17, 'Hobbies':['gamen,koken]

const parsedperson = JSON.parse(JSONstring)  
console.log(parsedPerson);

localStorage.setItem('person',personJSON)


console.log(parsedPerson.name);
console.log(parsedPerson.hobbies[1]);

const storedPersonJSON = localStorage.getItem("person");
console.log(storedPersonJSON);

const storedPersonJSON = localStorage.getItem("person");
console.log(storedPersonJSON);

console.log(storedPerson.name);
console.log(storedPerson.hobbies);


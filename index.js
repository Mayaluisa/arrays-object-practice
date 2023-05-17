const oneTwoThree = [1, 2, 3];
oneTwoThree[0] = 1;
oneTwoThree[1] = 2;
oneTwoThree[2] = 3;

console.log(oneTwoThree[1]);

const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const {name: personName} = person ;
const {city: personCity} = person;
console.log(personName, personCity)

const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2022
};

let keysArray2 = [];
for (let key in car){
    keysArray2.push(key)
}

console.log(keysArray2);

let valuesArray2 = [];
for (let value in car){
  valuesArray2.push(value)
}

let entriesArray2 = [];
for (let entry in car){
  entriesArray2.push(entry)
}

let keysArray = Object.keys(car);
console.log(keysArray);

let valuesArray = Object.values(car);
console.log(valuesArray);

let entriesArray = Object.entries(car);
console.log(entriesArray)

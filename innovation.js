// Arrays
const units = [`max`, `manu`, `Julie`, `pro`];
console.log(units[2]);
console.log(units.length);
// looping an array
for (const el of units) {
   console.log(el);
   for (let el of units) {
       console.log(el);

   }
}
units.push(`chika`);
console.log(units.length);
console.log(units.indexOf(`pro`));

const ids = new Set();
ids.add(`abc`);
ids.add(1);
ids.add(`abk`);
ids.add(45);
console.log(ids.has(`abc`));

let person = {
  name: `Boss`, 
  age: 21,
   hobbies: [`sports`, `cooking`, `travelling`]
  };
person.lastName = `Shama`;
console.log(person);
delete person.age;
console.log(person);
let myResult = Object.entries
console.log(person);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(JSON.stringify(person));

// Mapping
let myData = new Map();
myData.set(`average`, 1.53);
myData.set(`lastResult`, null);
const continent = {country: `US`, population: 82};
myData.set(`US`, 0.89);
for (const el of myData) {
  console.log(el);
}











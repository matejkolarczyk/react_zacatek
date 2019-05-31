/*function sayHello(){
for(var i=0; i<5; i++)
    console.log(i);
console.log(i);    
}
 sayHello();

 const person = {
     name: 'Matej',
     walk(){
         console.log(this);
     }
 };
 person.walk();

 const walk = person.walk.bind(person);
walk();

 person.talk();
 const targetMember = 'name';
 person[targetMember] = 'Honza';
 console.log(person.name);

 const square = function(number){   //stará java
     return number*number;
    };
    
     const square = number => number*number;
        console.log(square(5));
const jobs=[
{id: 1, isActive: true},
{id: 2, isActive: true},
{id: 3, isActive: false},
];
//const activejobs = jobs.filter(function(job){ return job.isActive});
const activejobs = jobs.filter(job => job.isActive);
console.log(activejobs);
const person ={
    talk(){
        var self = this;
        setTimeout(() => {
        console.log("this",this);
        },1000);
    }
};

person.talk();
const colors = ['red' , 'blue', 'green'];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);

const adress{
    street: '',
    city:'',
    country:''
};

const street = adress.street;
const city = adress.city;
const country = adress.country;

const {street, city, country} = adress;

const first = [1,2,3];
const second = [4,5,6];

//const combined = first.concat(second);
//const combined = [...first,'a', ...second, 'b']; 

const clone = [...first];
console.log(first); //[ 1, 2, 3]
console.log(clone); //[ 1, 2, 3] 


const first = {name: 'Matej'};
const second = {job: 'student'};

const combined = {...first, ...second, location:'Ostrava'};

console.log(first.name);

const person = {
    name: 'Matej',
    walk(){
        comsole.log('walk');
    }
};*/

import Teacher from './teacher';

const teacher = new Teacher("Matej" , "ing");
teacher.teach();
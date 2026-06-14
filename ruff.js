/* const student = {
    name: "Vaibhav",
    age : 23,
    eng : 95,
    math: 98,
    phy : 100,
    getAvg() {
        console.log(this); // this will refer to the student object
        let avg = (this.eng + this.math + this.phy / 3);
        console.log(`${this.name}'s got average marks = ${avg}`);
    }
}
function getAvg() {
    console.log(this); 
}

//try and catch
//if our website have only one error then the whole website will crash and we will not be able 
//to see the rest of the website but if we use try and catch then we can handle the error and 
// rest of the website will work fine 
//console.log(a); //.ReferenceError: a is not defined
//try statement allows you to define a block of code to be tested for errors while it is being executed 
//catch statement allows you to define a block of code to be executed, if an error occurs in the try block 
console.log("hellow");
console.log("hii");
try {
    console.log(a); // this will throw an error because a is not defined
} catch {
    console.log("variable a is not defined");// this will catch the error and print the message
}
console.log("the webise is still working"); // this will work fine because the error is handled by the catch block
//we can also print the error message in the catch block
console.log("hellow");
console.log("hii");
try {
    console.log(a); // this will throw an error because a is not defined
} catch {
    console.log("variable a is not defined");// this will catch the error and print the message
    console.log(error);
}
console.log("the webise is still working"); // this will work fine because the error is handled by the catch block



//Miscellaneous
//Arrow function
//Arrow function is a new way to write functions in JavaScript. It is a shorter syntax for writing functions.
//It does not have its own this keyword, it inherits the this value from the enclosing scope. 
// It is also called a fat arrow function
// const function = (argu1 , argu2  .. ) => {Function definition}
const sum = (a , b) => {
    console.log(a + b);

}

const cube = (a) => {
    return a * a * a;
}
 
const pow = (a , b) => {
  return a ** b;
}

const cube = a => {
    return a * a * a;
}
//it works without parenthises also
//hellow
const hellow = () => {
    console.log("hellow world");

}
// arrow function implicit return 
// if the function body has only one statement then we can omit the curly braces and  
// the return keyword and the value of that statement will be returned by the function
const sum = (a , b) => a + b; // implicit return

// Set Timeout funstion
// setTimeout is a function that allows you to execute a function after a certain amount of time has passed
//setTimeout(function , timeout).counts in milliseconds
console.log("hi there!");
setTimeout( () => {
console.log("der se chala");
} , 4000);
console.log("hi there");
setInterval(() => {
    console.log("ab dekhte hai ye kiya karta hai");
},2000);
let id = setInterval(() => {
    console.log("Hello vaibhav");
},2000);

setTimeout(() => {
    clearInterval(id);
//array methods
let arr = [1,2,3,4,5];
let print = function(el)
{
  console.log(el);

};

arr.forEach(print);
//let arr = [1,2,3,4,5];
arr.forEach(function(el){
 console.log(el);
});
arr.forEach((el)=>{
 console.log(el);
});
},10000);

let arr = [
{
    name: "Vaibhav",
    marks: 99,
},
{
    name: "sheetal",
    marks: 35,
},
{
    name: "tushar",
    marks:33,

}];

arr.forEach((student)=>{
    console.log(student.name);
}); 
//map
let arr = [1,2,3,4];
let double = arr.map(function(el)
{
 return el*2;
}); 

let arr = [1,2,3,4,5,6,7,8,9,10];
let even = arr.filter((num)=>{return num % 2 == 0;});


let arr1 = [1,2,3,4];
let arr2 = [2,4];

let r1 = arr1.every((el)=>{
    return el % 2 == 0;
});

let r2 = arr2.every((el)=>{
    return el % 2 == 0;
});

// reduce funtion
let nums = [1,2,3,4];
let finalValue = nums.reduce((res,el) => res + el);
console.log(finalValue);
*/
// geting maximum number in arry by using reduce funtion 
let num = [1,4,3,5,6,8,5,10,34,56,78,43];
 
let finalValue = num.reduce((max,el) => {
    if(max < el)
    {
        return el;
    }else{
        return max;
    }
});
console.log(finalValue);



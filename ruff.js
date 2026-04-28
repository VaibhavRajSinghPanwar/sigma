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

*/

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
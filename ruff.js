/*const student = {
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
    */
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

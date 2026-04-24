const student = {
    name: "Vaibhav",
    age : 23,
    eng : 95,
    math: 98,
    phy : 100,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy / 3);
        console.log(`${this.name}'s got average marks = ${avg}`);
    }
}
function getAvg() {
    console.log(this);
}
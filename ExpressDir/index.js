const express = require("express");
const app = express();
//console.log(app);
//console.dir(app);


let port = 8080;

app.listen(port, () => {
    console.log(`app is listen to the port ${port}`);
});

/*app.use((req,res) =>{
    console.log("request received");
    //res.send("this is a basic responce");
   /* res.send({
        name: "apple",
        color: "red",
    });
    let code = "<h1>Fruits</h1><ul><li>apple</li><li>orange</li><ul/>"
    res.send(code);
});*/

app.get("/", (req,res) => {
    res.send("Hello, I am root");
});

/*app.get("/apple", (req,res) => {
    res.send("you contacted apple path");
});

app.get("/orange", (req,res) => {
    res.send("you contacted orange path");
});

app.get("/*splat",(req,res) => {
    res.send("this path does not exits");
}); 

app.post("/",(req,res) =>{
    res.send("you send a post request to root");
});*/

app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params;
    res.send(`Welcom to the page of @${username}`);
});
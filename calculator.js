const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function (req,res)  {
    res.sendFile(__dirname + "/index.html");
});
app.get("/bmiCalculator", function (req,res){
    res.sendFile(__dirname + "/bmicalculator.html");
});
app.listen("4545",function() {
    console.log("Server got initiated at port 4545 ");
});
app.post("/bmiCalculator",function (req,res){
    var ht = Number(req.body.height);  
    var wt = Number(req.body.weight);
    var bmi = wt/(ht*ht);
    res.send("THe BMI of the person is " + bmi);
});
app.post("/",function (req,res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send("the result of this calculation is " + result);
});

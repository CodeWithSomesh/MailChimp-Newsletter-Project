const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const client = require("@mailchimp/mailchimp_marketing");

const app = express();

client.setConfig({apiKey: "3de3bbcba5483740f8f691e13fa8c6e0-us11",  server: "us11"});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

    res.sendFile(__dirname + "/signup.html")

});

app.post("/", function(req, res){

    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;

    const apiKey = "3de3bbcba5483740f8f691e13fa8c6e0-us11";
    const listID = "555e14bff0";

    const subscribedUser = {

        firstName: firstName, 
        lastName: lastName,
        email: email

    }

    const run = async () => {
        const response = await client.lists.addListMember(listID, {
          email_address: subscribedUser.email,
          status: "subscribed",
          merge_fields: {
              FNAME: subscribedUser.firstName,
              LNAME: subscribedUser.lastName
          }
        });
    };

    run();

    if(res.statusCode === 200){

        res.sendFile(__dirname + "/success.html");
        console.log("Succesfully added contact as an audience member.");

    }
    else {

        res.sendFile(__dirname + "/failure.html");

    };

});


app.post("/failure", function(req, res){

    res.redirect("/");

});

app.listen(process.env.PORT || 3000, function(){

    console.log("Server is running on port 3000.");

});
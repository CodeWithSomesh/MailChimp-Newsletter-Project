# MailChimp-Newsletter-Project
Newsletter project using MailChimp API, Node,js and Express.js 

This is a project which uses the Mailchimp API to make a NEWSLETTER webapp where you just signup for the newsletter using your details like firstname ,lastname and email address.

## 1. Landing page

![Landing page Screenshot](./public/assets/Readme%20screenshots/Landing.png)

## 2. Filling up the form

Whenever we enter the details in the signup form and submit the details then a post request is called and express handles the post request using node post function written in the "app.js" file. (Note: No validations is performed for the inputs)

![Data Entry Screenshot](./public/assets/Readme%20screenshots/Data.png)


## 3. Successfully Signed Up

When the status code is 200, whenever the server was able to post the data to Mailchimp API then it returns the 200 ok status. and when 200 status is returned then express returns "success.html" file.

![Status ok Screenshot](./public/assets/Readme%20screenshots/Success.png)



## 4. Mailchimp API Dashboard

The record/subscriber gets added on top of the list as highlighted in the image below.

![Mailchimp Dashboard Screenshot](./public/assets/Readme%20screenshots/Mailchimp.png)


## 5. OOPS! Some error occured

And if the status is anything other than 200 then it will return "failure.html" file. There is a button which will redirect the user to the Newsletter Signup page once again, allowing them to try submitting their details again. 

![Status Not ok/ Error Screenshot](./public/assets/Readme%20screenshots/Error.png)


#### Note:
> Built using HTML, CSS, Bootstrap CSS, JavaScript, Node.js, Express.js and MailChimp API. 

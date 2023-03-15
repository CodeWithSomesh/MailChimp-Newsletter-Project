# MailChimp-Newsletter-Project
Newsletter project using MailChimp API, Node,js and Express.js 

This is a project which uses the Mailchimp API to make a NEWSLETTER webapp where you just signup for the newsletter using your details like firstname ,lastname and email address.

## 1. Landing page

![2023-03-15 (4)](https://user-images.githubusercontent.com/123357802/225306559-a6e9cec5-7da3-4ff5-9b47-50c991522d62.png)

## 2. Filling up the form

Whenever we enter the details in the signup form and submit the details then a post request is called and express handles the post request using node post function written in the "app.js" file. (Note: No validations is performed for the inputs)

![2023-03-15 (5)](https://user-images.githubusercontent.com/123357802/225306054-885e6e34-7ce3-469e-ac65-fcd088080ca9.png)


## 3. Successfully Signed Up

When the status code is 200, whenever the server was able to post the data to Mailchimp API then it returns the 200 ok status. and when 200 status is returned then express returns "success.html" file.

![2023-03-15 (2)](https://user-images.githubusercontent.com/123357802/225306125-6f2d83a7-f1f4-483c-ab2c-1a6c511b9391.png)



## 4. Mailchimp API Dashboard

The record/subscriber gets added on top of the list as highlighted in the image below.

![2023-03-15 (6)](https://user-images.githubusercontent.com/123357802/225306326-92f3a971-be3a-4a7c-8eb6-931107ec6953.png)



## 5. OOPS! Some error occured

And if the status is anything other than 200 then it will return "failure.html" file. There is a button which will redirect the user to the Newsletter Signup page once again, allowing them to try submitting their details again. 

![2023-03-15 (3)](https://user-images.githubusercontent.com/123357802/225306383-8d217fcf-d95f-48d2-a893-4da1afbcdcc3.png)


#### Note:
> Built using HTML, CSS, Bootstrap CSS, JavaScript, Node.js, Express.js and MailChimp API. 

/* global vars */

let userRegistered = false;
let accountVerification = document.getElementById("accountVerification");

let firstName;
let lastName;
let address;
let city;
let province;
let postalCode;
let age;
let emailAddress;

/* event listeners */

window.addEventListener("load", signTM10);

document.getElementById("txtAge").addEventListener("change", verifyAge);
document.getElementById("txtPassword").addEventListener("change", verifyPassword);
document.getElementById("txtConfirmPassword").addEventListener("change", verifyPassword);

/* functions */

function verifyAge() {
    if (document.getElementById("txtAge").value < 18) {
        document.getElementById("ageError").textContent = " ⛔ You must be 18 or older to register.";
        $("#ageError").fadeIn().css("display","inline-block");
    } else {
        document.getElementById("ageError").textContent = "";
        $("#ageError").css("display","none");
    }
}

function verifyPassword() {
    if (document.getElementById("txtPassword").value != document.getElementById("txtConfirmPassword").value) {
        document.getElementById("pwdMatchError").textContent = " ⛔ Passwords do not match.";
        $("#pwdMatchError").fadeIn().css("display","inline-block");
    } else {
        document.getElementById("pwdMatchError").textContent = "";
        $("#pwdMatchError").css("display","none");
    }
}

function verifyRegistration() {
    if (document.getElementById("txtAge").value < 18 ||
        document.getElementById("txtPassword").value != document.getElementById("txtConfirmPassword").value) {
            window.alert("Registration failed. 😭" + "\n" + 
                         "Please make sure you have no errors in the form, and then try again.");
            return false;
    } else if (userRegistered) {
        window.alert("You already registered, dummy! 🤣" + "\n" + 
                     "You may refresh the page to start a new session.");
        return false;
    } else {
        window.alert("Registration successful! 🥳");
        userRegistered = true;

        firstName = document.getElementById("txtFirstName").value;
        lastName = document.getElementById("txtLastName").value;
        address = document.getElementById("txtAddress").value;
        city = document.getElementById("txtCity").value;
        province = document.getElementById("selProvince").value.toUpperCase();
        postalCode = document.getElementById("txtPostalCode").value;
        age = document.getElementById("txtAge").value;
        emailAddress = document.getElementById("txtEmailAddress").value;

        showAccountDetails();
        return false;
    }

}

function showAccountDetails() {
    window.scrollTo(0, 0);
    document.getElementById("accountDetails").innerHTML = 
        "<h2>Thank you for registering! 😊</h2>" + 
        "<p>Here are your account details: </p>" + 
        "<h3>First Name</h3>" + 
        "<p>" + firstName + "</p>" +
        "<h3>Last Name</h3>" + 
        "<p>" + lastName + "</p>" +
        "<h3>Address</h3>" + 
        "<p>" + address + "</p>" +
        "<h3>City</h3>" + 
        "<p>" + city + "</p>" +
        "<h3>Province</h3>" + 
        "<p>" + province + "</p>" +
        "<h3>Postal Code</h3>" + 
        "<p>" + postalCode + "</p>" +
        "<h3>Age</h3>" + 
        "<p>" + age + "</p>" +
        "<h3>Email Address</h3>" + 
        "<p>" + emailAddress + "</p>";
    
    document.getElementById("registrationForm").style.display = "none";
    $("#accountDetails").fadeIn().css("display","inline-block");
}

function signTM10() {
    console.log("TMinus10 is signing on. (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧");
}

/*

    .          
   _|________________         
    |  .--.--. 
    |  |  |  | 
  `-`--'  '  `-

*/
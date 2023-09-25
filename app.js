let name = document.getElementById("name");
let lastName = document.getElementById("last-name");
let password = document.getElementById("password");
let confPassword = document.getElementById("conf-password");
let paragraph = document.getElementById("para");
let email = document.getElementById("email");
let regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
var term = document.getElementById("term");
let users = [];

addData = () => {
    if (name.value === "") {
        paragraph.style.display = "block"
        paragraph.innerHTML = "Name required!"
        paragraph.style.color = "red";
        name.focus();
        setTimeout(() => {
            paragraph.style.display = "none"
        }, 1000);
    } else if (lastName.value === "") {
        paragraph.style.display = "block"
        paragraph.innerHTML = "Full Name required!"
        paragraph.style.color = "red";
        lastName.focus();
        setTimeout(() => {
            paragraph.style.display = "none"
        }, 1000);
    } else if (email.value === "") {
        paragraph.style.display = "block"
        paragraph.innerHTML = "Email Address required!"
        paragraph.style.color = "red";
        email.focus();
        setTimeout(() => {
            paragraph.style.display = "none"
        }, 1000);
    } else if (!email.value.match(regex)) {
        paragraph.style.display = "block"
        paragraph.innerHTML = "please enter invalid email!"
        paragraph.style.color = "red";
        email.focus();
        setTimeout(() => {
            paragraph.style.display = "none"
        }, 1000);
    } else if (password.value === "") {
        paragraph.style.display = "block"
        paragraph.innerHTML = "password required!"
        paragraph.style.color = "red";
        password.focus();
        setTimeout(() => {
            paragraph.style.display = "none"
        }, 1000);
    } else if (password.value.length !== 6) {
        paragraph.style.display = "block"
        paragraph.innerHTML = "password must be 6 character!"
        paragraph.style.color = "red";
        password.focus();
        setTimeout(() => {
            paragraph.style.display = "none"
        }, 1000);
    } else if (confPassword.value === "") {
        paragraph.style.display = "block"
        paragraph.innerHTML = "confirm password required!"
        paragraph.style.color = "red";
        confPassword.focus();
        setTimeout(() => {
            paragraph.style.display = "none"
        }, 1000);
    } else if (confPassword.value !== password.value) {
        paragraph.style.display = "block"
        paragraph.innerHTML = "confirm password must be same!"
        paragraph.style.color = "red";
        confPassword.focus();
        setTimeout(() => {
            paragraph.style.display = "none"
        }, 1000);
    } else if(term.checked === false){
        paragraph.style.display = "block";
        paragraph.style.color = "red";
        paragraph.innerHTML = "please select term and policy!"
        setTimeout(() => {
        paragraph.style.display = "none";
        }, 1000);
    }else {
        paragraph.style.display = "block";
        paragraph.style.color = "green";
        paragraph.innerHTML = "Your form submit successfully."
        setTimeout(() => {
            paragraph.style.display = "none";
            name.value = "";
            lastName.value = "";
            email.value = "";
            password.value = "";
            confPassword.value = "";
            term.checked = ""
        }, 1000);
        obj = {
            name: name.value,
            lastName: lastName.value,
            password: password.value,
            confirmPass: confPassword.value,
            term: term.checked,
        }
        users.push(obj)
        console.log(users)
    }

}
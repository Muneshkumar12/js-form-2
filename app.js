let name = document.getElementById("name");
let lastName = document.getElementById("last-name");
let password = document.getElementById("password");
let confPassword = document.getElementById("conf-password");
let paragraph = document.getElementById("para");
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
    } else {
        paragraph.style.display = "block";
        paragraph.style.color = "green";
        paragraph.innerHTML = "Your form submit successfully."
        setTimeout(() => {
        paragraph.style.display = "none";
        name.value = "";
        lastName.value = "";
        password.value = "";
        confPassword.value = "";
        }, 1000);
        obj = {
            name: name.value,
            lastName: lastName.value,
            password: password.value,
            confirmPass: confPassword.value,
        }
        users.push(obj)
        console.log(users)
    }

}
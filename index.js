// const form = document.getElementById("form");
// const userName = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const password2 = document.getElementById("password2");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   checkInput();
// });
// function checkInput() {
//   ///get values from the inputs
//   const userNameValue = userName.value.trim();
//   const emailValue = email.value.trim();
//   const passwordValue = password.value.trim();
//   const password2Value = password2.value.trim();
//   if (userNameValue == "") {
//     ///show error
//     //add error class
//     setErrorFor(userName, "Username cannot be blank");
//   } else {
//     //addsuccess class
//     setSucssesFor(userName);
//   }
//   if (emailValue === "") {
//     setErrorFor(email, "Email cannot be blank");
//   } else if (!isEmail(emailValue)) {
//     setErrorFor(email, "Email is not valid");
//   } else {
//     setSucssesFor(email);
//   }
//   if (passwordValue == "") {
//     setErrorFor(password, "Password cannot be blank");
//   } else {
//     setSucssesFor(password);
//   }
//   if (password2Value == "") {
//     setErrorFor(password2, "Password2 cannot be blank");
//   } else if (password2 !== password) {
//     setErrorFor(password2, "Password2 does not match");
//   } else {
//     setSucssesFor(password2);
//   }
// }
// function setErrorFor(input, message) {
//   const formControl = input.parentElement;
//   const small = formControl.querySelector("small");

//   //add error message inside small
//   small.innerText = message;

//   //add error class
//   formControl.className = "form-control error";
// }

// function setSucssesFor(input) {
//   const formControl = input.parentElement;
//   formControl.className = "form-control sucsses";
// }
// function isEmail(email) {
//   return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     email
//   );
// }

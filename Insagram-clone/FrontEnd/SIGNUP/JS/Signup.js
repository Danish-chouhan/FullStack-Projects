const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const Password = document.getElementById("password");
const UserName = document.getElementById("UserName");
let flag = 1;

const validEmail = document.getElementById("valid1");
const validMob = document.getElementById("valid2");
const validPass = document.getElementById("valid3");
const validUser = document.getElementById("valid4");

function validateForm() {
  if (email.value == "") {
    validEmail.style.color = "red";
  } else if (email.value !== "") {
    validEmail.style.color = "green";
  }
   if (UserName.value == "") {
    validUser.style.color = "red";
  } else if (UserName.value !== "") {
    validUser.style.color = "green";
  }

  if (mobile.value == "") {
    validMob.style.color = "red";
  } else if (mobile.value !== "") {
    validMob.style.color = "green";
  }

  if (Password.value == "") {
    validPass.style.color = "red";
  } else if (Password.value !== "") {
    validPass.style.color = "green";
  }

  const greenvalid = ( validEmail.style.color === "green" && validMob.style.color === "green" && validPass.style.color === "green"  && validUser.style.color === "green"  ) ? (flag = 1) : (flag = 0);

  if (flag) {
    return true;
  } else {
    return false;
  }
}

let NewArr;

fetch("http://localhost:4000/SuperAdminSignUp/SuperAdminSignUpData")
  .then((response) => response.json())
  .then((data) => {
    NewArr = data;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

const EmailOfLogin = document.getElementById("EmailLogin");
const PasswordOfLogin = document.getElementById("PasswordLogin");
let flag = 1;

const validEmail = document.getElementById("valid1");
const validPass = document.getElementById("valid2");

const myForm = document.getElementById("SuperAdminLoginForm");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const providedEmail = EmailOfLogin.value;
  const providedPassword = PasswordOfLogin.value;
  const emailIncluded = NewArr.some((item) => item.Email === providedEmail);
  const PasswordIncluded =  NewArr.some((item) => item.Password === providedPassword)
  
  if (EmailOfLogin.value == "") {
    validEmail.style.color = "red";
  } else if (emailIncluded) {
    validEmail.style.color = "red";
  } else {
    validEmail.style.color = "green";
  }

  if (PasswordOfLogin.value == "") {
    validPass.style.color = "red";
  } else if (PasswordIncluded) {
    validPass.style.color = "red";
  }else{
    validPass.style.color = "green";
  }

  const greenvalid =
    validEmail.style.color === "green" && validPass.style.color === "green";
}

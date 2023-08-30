let StoringDataOfLogin;

fetch("http://localhost:5000/SuperAdminSignUp/SuperAdminSignUpData")
  .then((response) => response.json())
  .then((data) => {
    StoringDataOfLogin = data;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// form Of Login

const EmailOfLogin = document.getElementById("EmailLogin");
let flag = 1;

const validEmail = document.getElementById("valid1");

const myForm = document.getElementById("SuperAdminLoginForm");
const MainContainer = document.getElementById("MainContainer");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

async function validateForm() {
  // Login targets

  const providedEmail = EmailOfLogin.value;
  const emailIncluded = StoringDataOfLogin.some(
    (item) => item.Email === providedEmail
  );

  // signUP targets
  const body = document.querySelector("body");
  if (EmailOfLogin.value == "") {
    validEmail.style.color = "red";
    validEmail.textContent = "Please Enter Your Email Here";
  } else if (emailIncluded === false) {
    validEmail.style.color = "red";
    validEmail.textContent = "Please Enter Registered Email";
  } else {
    validEmail.style.color = "green";
    validEmail.textContent = "Email";
  }

  if (validEmail.style.color === "green") {
    MainContainer.remove();

    const ContainerOfButtons = document.createElement("div");
    ContainerOfButtons.setAttribute("id", "ContainerOfButtons");

    const Titel = document.createElement("h1");
    const LoginDatas = document.createElement("a");
    const SignUpDatas = document.createElement("a");
    const SuperAdminDatas = document.createElement("a");
    Titel.textContent = "Now Select Which Data You Want";
    LoginDatas.setAttribute("href", "LoginData");
    SignUpDatas.setAttribute("href", "SignUpData");
    SuperAdminDatas.setAttribute("href", "SuperAdminSignUpData");

    LoginDatas.textContent = "Login Data";
    SignUpDatas.textContent = " SignUp Data";
    SuperAdminDatas.textContent = "Super Admin Data";
    ContainerOfButtons.appendChild(Titel);
    ContainerOfButtons.appendChild(LoginDatas);
    ContainerOfButtons.appendChild(SignUpDatas);
    ContainerOfButtons.appendChild(SuperAdminDatas);
    body.appendChild(ContainerOfButtons);
  }
}

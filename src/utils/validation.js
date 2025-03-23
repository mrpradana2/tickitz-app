import { useState } from "react";

// email
export default function emailValidation(email) {
  const [emailCheck, setEmailCheck] = useState(false);
  if (
    !email.includes("@") ||
    email.indexOf("@") === 0 ||
    !email.includes(".") ||
    email.indexOf(".") <= email.indexOf("@") + 2 ||
    email.length <= email.indexOf(".") + 2
  ) {
    console.log("email salah");
    setEmailCheck(false);
    console.log(emailCheck);
    // inputEmail.classList.add("wrong");
    // inputEmail.classList.remove("valid");
    // alertEmail.classList.remove("valid");
    // alertEmail.textContent = "Format email salah";
    // alertEmail.style.display = "block";
  } else {
    console.log("email benar");
    setEmailCheck(true);
    console.log(emailCheck);
    // inputEmail.classList.remove("wrong");
    // inputEmail.classList.add("valid");
    // alertEmail.classList.add("valid");
    // alertEmail.textContent = "Email sudah valid";
  }
  //   submitButtonCheck();
}

// password check
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const characters = "!@#$%^&*()-+_=[],./{}|:;<>?";

// password
function passwordValidation() {
  const password = inputPassword.value;
  const words = password.split("");
  const resultUpperCaseLetters = checkUpperCaseLetters(words);
  const resultLowerCaseLetters = checkLowerCaseLetters(words);
  const resultNumbers = checkNumbers(words);
  const resultCharacters = checkCharacters(words);
  if (
    resultUpperCaseLetters &&
    resultLowerCaseLetters &&
    resultCharacters &&
    resultNumbers
  ) {
    inputPassword.classList.remove("wrong");
    inputPassword.classList.add("valid");
    alertPassword.classList.add("valid");
    alertPassword.textContent = "Password sudah valid";
    alertPassword.style.display = "block";
  } else if (words.length <= 7) {
    inputPassword.classList.add("wrong");
    inputPassword.classList.remove("valid");
    alertPassword.classList.remove("valid");
    alertPassword.textContent =
      "Jumlah karakter password harus lebih dari 7 karakter";
    alertPassword.style.display = "block";
  } else {
    inputPassword.classList.add("wrong");
    inputPassword.classList.remove("valid");
    alertPassword.classList.remove("valid");
    alertPassword.textContent =
      "Karakter harus mengandung angka, huruf besar, huruf kecil, dan karakter khusus";
    alertPassword.style.display = "block";
  }
  submitButtonCheck();
}

function checkUpperCaseLetters(chars) {
  for (let char of chars) {
    if (upperCaseLetters.includes(char)) {
      return true;
    }
  }
  return false;
}

function checkLowerCaseLetters(chars) {
  for (let char of chars) {
    if (lowerCaseLetters.includes(char)) {
      return true;
    }
  }
  return false;
}

function checkNumbers(chars) {
  for (let char of chars) {
    if (numbers.includes(char)) {
      return true;
    }
  }
  return false;
}

function checkCharacters(chars) {
  for (let char of chars) {
    if (characters.includes(char)) {
      return true;
    }
  }
  return false;
}

function submitButtonCheck() {
  if (
    inputEmail.classList.contains("valid") &&
    inputPassword.classList.contains("valid")
  ) {
    anchorSubmit.setAttribute("href", "./profile-page.html");
    buttonSubmit.classList.remove("not-allowed");
    // buttonSubmit.setAttribute("type", "submit");
  } else {
    anchorSubmit.setAttribute("href", "#");
    buttonSubmit.classList.add("not-allowed");
    // buttonSubmit.setAttribute("type", "button");
  }
}

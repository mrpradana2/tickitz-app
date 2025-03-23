export function validationEmail(email) {
  if (email.length === 0) {
    return { resultEmail: 3, messageEmail: "Email harus diisi" };
  } else if (
    !email.includes("@") ||
    email.indexOf("@") === 0 ||
    !email.includes(".") ||
    email.indexOf(".") <= email.indexOf("@") + 2 ||
    email.length <= email.indexOf(".") + 2
  ) {
    console.log("email salah");
    return {
      resultEmail: false,
      messageEmail: "Email yang anda masukkan tidak valid",
    };
  } else {
    console.log("email benar");
    return { resultEmail: true, messageEmail: "Email benar" };
  }
}

export function validationPassword(password) {
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const characters = "!@#$%^&*()-+_=[],./{}|:;<>?";

  const words = password.split("");
  const resultUpperCaseLetters = checkUpperCaseLetters(words);
  const resultLowerCaseLetters = checkLowerCaseLetters(words);
  const resultNumbers = checkNumbers(words);
  const resultCharacters = checkCharacters(words);
  if (password.length === 0) {
    return { resultPassword: 3, messagePassword: "Password harus diisi" };
  } else if (
    resultUpperCaseLetters &&
    resultLowerCaseLetters &&
    resultCharacters &&
    resultNumbers
  ) {
    console.log("password benar");
    return { resultPassword: true, messagePassword: "Password benar" };
  } else if (words.length <= 7) {
    console.log("password harus lebih dari 7");
    return {
      resultPassword: 2,
      messagePassword: "Password harus lebih dari 7 karakter",
    };
  } else {
    console.log("password salah");
    return {
      resultPassword: false,
      messagePassword:
        "Password harus mengandung huruf besar, huruf kecil, angka, dan karakter khusus",
    };
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
}

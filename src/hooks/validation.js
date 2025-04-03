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
    return {
      resultEmail: false,
      messageEmail: "Email yang anda masukkan tidak valid",
    };
  } else {
    return { resultEmail: true, messageEmail: null };
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
    return { resultPassword: true, messagePassword: null };
  } else if (words.length <= 7) {
    return {
      resultPassword: 2,
      messagePassword: "Password harus lebih dari 7 karakter",
    };
  } else {
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

export function validationFormEmpty(input, message) {
  if (input.length === 0) {
    return [false, message];
  } else {
    return [true, null];
  }
}

export function validationLetter(input, messEmpty, messNotValid) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWZYZ abcdefghijklmnopqrstuvwxyz";
  const letter = input.split("");
  const result = checkLetters(letter);

  if (letter.length === 0) {
    return [3, messEmpty];
  } else if (result === false) {
    return [false, messNotValid];
  } else {
    return [true, null];
  }

  function checkLetters(chars) {
    for (let char of chars) {
      if (letters.includes(char)) {
        return true;
      }
    }
    return false;
  }
}

export function validationNumber(input, messEmpty, messNotValid) {
  const numbers = "0123456789";
  const number = input.split("");
  const result = checkLetters(number);

  if (number.length === 0) {
    return [3, messEmpty];
  } else if (result === false) {
    return [false, messNotValid];
  } else {
    return [true, null];
  }

  function checkLetters(chars) {
    for (let char of chars) {
      if (numbers.includes(char)) {
        return true;
      }
    }
    return false;
  }
}

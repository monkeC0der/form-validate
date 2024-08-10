import { countries } from "./countries.js";
document.addEventListener("DOMContentLoaded", () => {
  let email = document.querySelector("#emailInput");
  let emailMessage = document.querySelector("#emailMessage");
  email.addEventListener("input", () => {
    if (!email.validity.valid) {
      email.className = "invalidInput";
      emailMessage.textContent = "Please enter a valid email address";
    } else if (email.validity.valid && email.value !== "") {
      email.className = "validInput";
      console.log("green");
      emailMessage.textContent = "";
    } else {
      email.className = "";
      console.log("white");
      emailMessage.textContent = "";
    }
  });
  console.log(countries[0].name);

  let country = document.querySelector("#countryInput");
  let countryMessage = document.querySelector("#countryMessage");

  function checkCountryValidity(input) {
    return countries.findIndex((arrayItem) => arrayItem.name === input);
  }
  country.addEventListener("input", () => {
    if (checkCountryValidity(country.value) < 0 && country.value.length > 0) {
      country.className = "invalidInput";
      countryMessage.textContent = "Please enter a valid country";
      console.log("red");
    } else if (checkCountryValidity(country.value) >= 0) {
      country.className = "validInput";
      console.log("green");
      countryMessage.textContent = "";
    } else {
      country.className = "";
      console.log("white");
      countryMessage.textContent = "";
    }
  });

  let postal = document.querySelector("#postalInput");
  let postalMessage = document.querySelector("#postalMessage");
  function validatePostalCode(postalCode) {
    const postalCodePattern = /^[A-Za-z][0-9][A-Za-z]\s?[0-9][A-Za-z][0-9]$/;
    return postalCodePattern.test(postalCode);
  }
  postal.addEventListener("input", () => {
    if (!validatePostalCode(postal.value) && postal.value.length > 0) {
      postal.className = "invalidInput";
      postalMessage.textContent = "Please enter a valid postal code";
      console.log("red");
    } else if (validatePostalCode(postal.value)) {
      postal.className = "validInput";
      console.log("green");
      postalMessage.textContent = "";
    } else {
      postal.className = "";
      console.log("white");
      postalMessage.textContent = "";
    }
  });

  let passwordConfirm = document.querySelector("#passwordConfirmInput");
  let password = document.querySelector("#passwordInput");
  let passwordConfirmMessage = document.querySelector("#passwordConfirmMessage");
  function passwordsMatch(password, passwordConfirm) {
    if (password === passwordConfirm) {
        console.log(password.value)
      return true;
    } else {
      return false;
    }
  }

  passwordConfirm.addEventListener("input", () => {
    console.log(password.value)
        console.log(passwordConfirm.value)
    if (!passwordsMatch(password.value, passwordConfirm.value)) {
      passwordConfirm.className = "invalidInput";
      passwordConfirmMessage.textContent = "Passwords do not match";
      console.log("red");
    } else if (passwordsMatch(password.value, passwordConfirm.value)) {
      passwordConfirm.className = "validInput";
      console.log("green");
      passwordConfirmMessage.textContent = "";
    } else {
      passwordConfirm.className = "";
      console.log("white");
      passwordConfirmMessage.textContent = "";
    }
  });

  password.addEventListener("input", () => {
    if (password.value.length>0) {
        password.className = "validInput";
    }
    else {
        password.className = "input";
    }
  })
});

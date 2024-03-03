const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  let checkEmail = "false";
  let checkPassword = "false";
  const form = document.getElementById('signupForm');
  const successBox = document.getElementById('success');

  emailInput.addEventListener('change', validateEmail);
  passwordInput.addEventListener('change', validatePassword);
  form.addEventListener('submit', handleSubmit);

  function validateEmail() {
    const emailValue = emailInput.value.trim();
    if (emailValue.length > 3 && emailValue.includes('@') && emailValue.includes('.')) {
      checkEmail = "true";
      } else {
      emailError.classList.add("error");
      emailError.innerText = 'make sure your email has more than 3 characters and has "@" and "."';
    }
    checkAllValid();
  }

  function validatePassword() {
    const passwordValue = passwordInput.value.trim();
    if (passwordValue.length > 8) {
      checkPassword = "true";
    } else {
      passwordError.classList.add("error");
      passwordError.innerText = 'Password must be at least 8 characters long';
    }
    checkAllValid();
  }

  function checkAllValid() {
    if (checkEmail === "true" && checkPassword === "true") {
      emailError.remove();
      passwordError.remove();
      successBox.classList.add('success');
      successBox.innerText = 'All good to go';
    }
    
  }

  function handleSubmit(event) {
    event.preventDefault();
    // checkAllValid();
    const confirmed = confirm('Are you sure you want to sign up?');
    if (confirmed) {
      alert('Successful signup!');
    } else {
      // Clear input values and reset errors
      emailInput.value = '';
      passwordInput.value = '';
      emailError.classList.remove("error");
      passwordError.classList.remove("error");
      successBox.classList.remove('success');
      emailError.innerText = '';
      passwordError.innerText = '';
      successBox.innerText = '';
    }
  }
let fullName = document.querySelector('#full-name');
let emailInput = document.querySelector('#emailOrPhone');
let passwordInput = document.querySelector('#password');
let registerBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let fullNameValue = fullName.value;
  let emailValue = emailInput.value.trim();
  let passwordValue = passwordInput.value;

  let existEmail = JSON.parse(localStorage.getItem(emailValue));

  if (existEmail) {
    alert('An account with this email already exists. Please log in.');
  } else {
    let user = {
      fullName: fullNameValue,
      email: emailValue,
      password: passwordValue,
    };
    window.localStorage.setItem(emailValue, JSON.stringify(user));
    alert('Registration successful! You can now log in.');
    window.location.href = 'login.html';
  }
});

const togglePassword = document.querySelector('.togglePassword i');

togglePassword.addEventListener('click', () => {
  const passwordField = document.querySelector('#password');
  const type =
    passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);
  togglePassword.classList.toggle('fa-eye-slash');
});

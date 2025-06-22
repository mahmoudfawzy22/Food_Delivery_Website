const emailInput = document.querySelector('#emailOrPhone');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('.login-btn');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  let emailValue = emailInput.value.trim();
  let passwordValue = password.value;

  let savedUser = JSON.parse(localStorage.getItem(emailValue));

  if (!savedUser) {
    alert('User Not Found, please sign up first');
  } else {
    if (savedUser.password === passwordValue) {
      alert('Login successful, Welcome ' + savedUser.fullName);
      localStorage.setItem("loggedInUser", JSON.stringify(savedUser));
      window.location.href = '../HTML/home.html';
    } else {
      alert('Incorrect password');
    }
  }
});

const togglePassword = document.querySelector('.togglePassword i');

togglePassword.addEventListener('click', () => {
  const passwordField = document.querySelector('#password');
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);
  togglePassword.classList.toggle('fa-eye-slash');
});

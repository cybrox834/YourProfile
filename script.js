
const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = signupForm.username.value;
  const email = signupForm.email.value;
  const password = signupForm.password.value;

  alert(`Signed up successfully!\nUsername: ${username}\nEmail: ${email}`);
  signupForm.reset();
});

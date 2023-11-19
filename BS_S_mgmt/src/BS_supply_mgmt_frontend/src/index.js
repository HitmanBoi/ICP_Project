function login() {
  const userType = document.getElementById('userType').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  alert(`Login attempted as ${userType}. This is a frontend-only example; no actual authentication is performed.`);
}

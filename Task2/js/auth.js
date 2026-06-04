// auth.js — handles login and registration logic

const USERS_KEY = 'da_users';
const SESSION_KEY = 'da_session';

// Get all registered users from localStorage
function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
}

// Save users array
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Save session (logged-in user)
function saveSession(user) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

// Get current session
function getSession() {
  return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
}

// Clear session (logout)
function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

// Show an alert message inside the form
function showAlert(id, message, type = 'error') {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = message;
  el.className = `alert ${type} show`;
}

// Simple email validator
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ─── REGISTER ───────────────────────────────────────────────
function handleRegister(e) {
  e.preventDefault();
  const name  = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const pass  = document.getElementById('password').value;
  const conf  = document.getElementById('confirm').value;

  if (!name || !email || !pass || !conf) {
    return showAlert('alert', 'Please fill in all fields.');
  }
  if (!isValidEmail(email)) {
    return showAlert('alert', 'Enter a valid email address.');
  }
  if (pass.length < 6) {
    return showAlert('alert', 'Password must be at least 6 characters.');
  }
  if (pass !== conf) {
    return showAlert('alert', 'Passwords do not match.');
  }

  const users = getUsers();
  if (users.find(u => u.email === email)) {
    return showAlert('alert', 'An account with this email already exists.');
  }

  const newUser = { name, email, password: pass, createdAt: new Date().toISOString() };
  users.push(newUser);
  saveUsers(users);
  saveSession({ name, email });

  showAlert('alert', 'Account created! Redirecting...', 'success');
  setTimeout(() => window.location.href = 'dashboard.html', 1200);
}

// ─── LOGIN ───────────────────────────────────────────────────
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const pass  = document.getElementById('password').value;

  if (!email || !pass) {
    return showAlert('alert', 'Please enter your email and password.');
  }

  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === pass);

  if (!user) {
    return showAlert('alert', 'Invalid email or password.');
  }

  saveSession({ name: user.name, email: user.email });
  showAlert('alert', 'Login successful! Redirecting...', 'success');
  setTimeout(() => window.location.href = 'dashboard.html', 1000);
}

// ─── LOGOUT ──────────────────────────────────────────────────
function logout() {
  clearSession();
  window.location.href = 'login.html';
}

// ─── GUARD: protect dashboard ────────────────────────────────
function requireAuth() {
  if (!getSession()) {
    window.location.href = 'login.html';
  }
}

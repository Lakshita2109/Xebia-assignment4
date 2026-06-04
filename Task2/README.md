# DevAssess — Development Assessment Project

A frontend-only web app with Registration, Login, and Dashboard modules.

## Modules
- **Register** (`register.html`) — Sign up with name, email, password
- **Login** (`login.html`) — Authenticate and access the dashboard
- **Dashboard** (`dashboard.html`) — Protected page with stats and activity

## How to Run
Just open `index.html` (or `login.html`) in your browser — no server needed.
Uses `localStorage` for session and user data.

## Folder Structure
```
dev-assessment/
├── index.html
├── login.html
├── register.html
├── dashboard.html
├── css/
│   └── style.css
├── js/
│   ├── auth.js
│   └── dashboard.js
└── README.md
```

## Tech Stack
- HTML5, CSS3, Vanilla JS
- Google Fonts (Syne + DM Sans)
- localStorage for auth state

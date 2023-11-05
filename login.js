function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
        
        window.location.href = "https://oasisinfobyte.com/";
    } else {
        alert("Invalid credentials. Please try again.");
    }

    return false;
}

function showRegisterForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
}

function goBack() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
}

function register() {
    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmNewPassword = document.getElementById("confirm-password").value;

    if (newPassword !== confirmNewPassword) {
        alert("Passwords do not match. Please try again.");
        return false;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((u) => u.username === newUsername);

    if (existingUser) {
        alert("Username already exists. Please choose a different one.");
    } else {
        users.push({ username: newUsername, password: newPassword });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration successful. You can now log in.");
        document.getElementById("login-form").style.display = "block";
        document.getElementById("register-form").style.display = "none";
    }

    return false;
}


const predefinedUsers = {
    'user1': 'password1',
    'user2': 'password2',
    'user3': 'password3'
};

function saveUsersToLocalStorage(users) {
    localStorage.setItem('registeredUsers', JSON.stringify(users));
}

function getUsersFromLocalStorage() {
    const users = localStorage.getItem('registeredUsers');
    return users ? JSON.parse(users) : {};
}

function register() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    if (username && password) {
        const registeredUsers = getUsersFromLocalStorage();
        registeredUsers[username] = password;
        saveUsersToLocalStorage(registeredUsers);
        
        alert('Registered successfully. Now you can log in.');

        toggleForms();
    } else {
        alert('Please fill out all fields.');
    }
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const registeredUsers = getUsersFromLocalStorage();

    if ((registeredUsers[username] && registeredUsers[username] === password) ||
        (predefinedUsers[username] && predefinedUsers[username] === password)) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
}

function toggleForms() {
    const loginForm = document.getElementById('login');
    const registerForm = document.getElementById('register');
    
    loginForm.classList.toggle('active');
    registerForm.classList.toggle('active');
}

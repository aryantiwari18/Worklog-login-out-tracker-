let loginTime = null;

function login() {
    const username = document.getElementById("username").value;

    if (username === "") {
        alert("Please enter your username.");
        return;
    }

    loginTime = new Date();

    document.getElementById("status").innerText =
        username + " is logged in at " + loginTime.toLocaleTimeString();

    addHistory(username, "Login", loginTime);
}

function logout() {
    const username = document.getElementById("username").value;

    if (username === "") {
        alert("Please enter your username.");
        return;
    }

    if (loginTime === null) {
        alert("User is not logged in.");
        return;
    }

    const logoutTime = new Date();

    document.getElementById("status").innerText =
        username + " logged out at " + logoutTime.toLocaleTimeString();

    addHistory(username, "Logout", logoutTime);

    loginTime = null;
}

function addHistory(username, action, time) {
    const history = document.getElementById("history");

    const item = document.createElement("li");

    item.innerText =
        username + " - " + action + " - " + time.toLocaleString();

    history.appendChild(item);
}
let loginTime = null;

function login() {
    const username = document.getElementById("username").value.trim();

    if (username === "") {
        alert("Please enter your username.");
        return;
    }

    loginTime = new Date();

    document.getElementById("status").innerText =
        username + " is logged in at " + loginTime.toLocaleTimeString();

    saveHistory(username, "Login", loginTime);
    displayHistory();
}

function logout() {
    const username = document.getElementById("username").value.trim();

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

    saveHistory(username, "Logout", logoutTime);

    loginTime = null;
    displayHistory();
}

function saveHistory(username, action, time) {
    let history = JSON.parse(localStorage.getItem("loginHistory")) || [];

    history.push({
        username: username,
        action: action,
        time: time.toLocaleString()
    });

    localStorage.setItem("loginHistory", JSON.stringify(history));
}

function displayHistory() {
    const historyList = document.getElementById("history");
    const history = JSON.parse(localStorage.getItem("loginHistory")) || [];

    historyList.innerHTML = "";

    history.forEach(item => {
        const li = document.createElement("li");

        li.innerText =
            item.username + " - " +
            item.action + " - " +
            item.time;

        historyList.appendChild(li);
    });
}

displayHistory();
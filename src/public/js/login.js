(function () {
  const emailInput = document.getElementById("input-email");
  const pwInput = document.getElementById("input-password");
  const loginButton = document.getElementById("login");
  const form = document.querySelector("form");

  form.onsubmit = (e) => {
    e.preventDefault();
    const reqBody = {
      "email": emailInput.value,
      "password": pwInput.value
    };

    const xhr = new XMLHttpRequest();

    xhr.open('POST', '/login', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(reqBody));

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200 && xhr.responseText !== "no user") {
        window.location.href = '/';
      } else if (xhr.readyState === 4 && xhr.responseText === "no user") {
        alert("Login Failed");
        emailInput.value = "";
        pwInput.value = "";
      }
    }
    emailInput.focus();
  }

  loginButton.onclick = (e) => {
    const reqBody = {
      "email": emailInput.value,
      "password": pwInput.value
    };

    const xhr = new XMLHttpRequest();

    xhr.open('POST', '/login', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(reqBody));

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200 && xhr.responseText !== "no user") {
        window.location.href = '/';
      } else if (xhr.readyState === 4 && xhr.responseText === "no user") {
        alert("Login Failed");
        emailInput.value = "";
        pwInput.value = "";
      }
    }
  }
})();

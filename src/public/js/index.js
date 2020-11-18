(function () {
  const post = document.querySelector('#post');
  const login = document.querySelector('#login');
  const logout = document.querySelector('#logout');
  const buttonWrapper = document.querySelector("#button-wrapper");

  post.onclick = (e) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/save', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify({ "request": "save" }));

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        location.href = '/save';
      } else if (xhr.readyState === 4 && xhr.response === "unauthenticated") {
        alert("You should sign in first");
      }
    }
  }

  if (login) {
    login.onclick = (e) => {
      location.href = '/login';
    }
  }

  if (logout) {
    logout.onclick = (e) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/logout', true);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.send(JSON.stringify({ "request": "logout" }));

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          location.reload();
        }
      }
    }
  }

})();

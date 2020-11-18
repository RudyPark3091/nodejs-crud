(function () {
  const titles = document.querySelectorAll(".post-row");

  titles.forEach(title => {
    title.onclick = (e) => {
      const id = title.querySelector(".post-id");

      const xhr = new XMLHttpRequest();

      xhr.open('GET', `/post/${id.innerText}`, true);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.send(JSON.stringify({ "request": "view post" }));

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200 && xhr.responseText !== "unauthenticated") {
          window.location.href = `/post/${id.innerText}`;
        } else if (xhr.readyState === 4 && xhr.responseText === "unauthenticated") {
          alert("You should sign in first");
        }
      }

    }
  })
})();

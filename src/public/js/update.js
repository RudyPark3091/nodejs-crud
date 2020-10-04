(function () {
  const updateButton = document.getElementById("update");
  const cancelButton = document.getElementById("cancel");
  const inputTitle = document.getElementById('input-title');
  const inputAuthor = document.getElementById('input-author');
  const inputContent = document.getElementById('input-content');

  updateButton.onclick = (e) => {
    const reqBody = {
      "title": inputTitle.value,
      "author": inputAuthor.value,
      "content": inputContent.value
    };

    const xhr = new XMLHttpRequest();

    xhr.open('PUT', '/save', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(reqBody));

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        window.location.href = '/';
      }
    }
    // XML Request
  }

  cancelButton.onclick = (e) => {
    window.location.href = '/';
  }
})();
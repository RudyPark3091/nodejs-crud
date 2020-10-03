(function () {
  const saveButton = document.getElementById('save');
  const cancelButton = document.getElementById('cancel');
  const inputTitle = document.getElementById('input-title');
  const inputAuthor = document.getElementById('input-author');
  const inputContent = document.getElementById('input-content');

  saveButton.onclick = (e) => {
    const reqBody = {
      "title": inputTitle.value,
      "author": inputAuthor.value,
      "content": inputContent.value
    };

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        alert(xhr.responseText);
        window.location.href = '/';
      }
    }

    xhr.open('POST', '/save', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(reqBody));
    window.location.href = '/';
  }

  cancelButton.onclick = (e) => {
    window.location.href = '/';
  }
})();

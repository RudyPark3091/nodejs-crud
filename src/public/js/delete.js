(function () {
  const deleteButton = document.getElementById("delete");
  const inputTitle = document.getElementById('input-title');
  const inputAuthor = document.getElementById('input-author');
  const inputContent = document.getElementById('input-content');

  deleteButton.onclick = (e) => {
    const reqBody = {
      "title": inputTitle.value,
      "author": inputAuthor.value,
      "content": inputContent.value,
      "id": inputTitle.dataset.id
    };

    const xhr = new XMLHttpRequest();

    xhr.open('DELETE', '/post/' + reqBody.id, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(reqBody));

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        window.location.href = '/';
      }
    }
  }
})();
(function () {
const saveButton = document.getElementById('save');
const inputTitle = document.getElementById('input-title');
const inputContent = document.getElementById('input-content');

const xhr = new XMLHttpRequest();
xhr.open('POST', '/save', true);

xhr.setRequestHeader('Content-type', 'application/json');

xhr.onreadystatechange = function () {
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    console.log('request sent');
  }
}

saveButton.onclick = (e) => {
  const reqBody = {
    "title": inputTitle.value,
    "content": inputContent.value
  };

  xhr.send(JSON.stringify(reqBody));
}
})();

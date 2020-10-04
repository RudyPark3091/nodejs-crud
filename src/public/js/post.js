(function () {
  const titles = document.querySelectorAll(".post-row");

  titles.forEach(title => {
    title.onclick = (e) => {
      const id = title.querySelector(".post-id");

      window.location.href = `/post/${id.innerText}`;
    }
  })
})();
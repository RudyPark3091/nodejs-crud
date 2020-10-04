(function () {
  const titles = document.querySelectorAll(".post-title");

  titles.forEach(title => {
    title.onclick = (e) => {
      const target = e.target;
      const parent = target.parentNode;
      const id = parent.querySelector(".post-id");

      window.location.href = `/post/${id.innerText}`;
    }
  })
})();
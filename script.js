document.getElementById("switch").addEventListener("click", () => {
  const html = document.documentElement;
  html.classList.toggle('light');

  const imgAvatar = document.querySelector('#profile img');
  if (html.classList.contains('light')) {
    imgAvatar.setAttribute("src", "./assets/Avatar-light.png");
  } else {
    imgAvatar.setAttribute("src", "./assets/Avatar.png");
  }
});
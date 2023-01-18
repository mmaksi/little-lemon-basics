let returnToTopButton = document.getElementById("return-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
    returnToTopButton.style.display = "block";
  } else {
    returnToTopButton.style.display = "none";
  }
});

function nextPage() {
  window.location.href = "yesPage.html";
}

function moveButton() {
  var button = document.getElementById("noButton");
  var container = document.querySelector(".container");
  var containerRect = container.getBoundingClientRect();

  var buttonWidth = button.offsetWidth;
  var buttonHeight = button.offsetHeight;

  var x = Math.random() * (containerRect.width - buttonWidth);
  var y = Math.random() * (containerRect.height - buttonHeight);

  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}

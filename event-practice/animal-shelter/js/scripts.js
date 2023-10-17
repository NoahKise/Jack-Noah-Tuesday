window.onload = function () {
  let button1 = document.querySelector("button1");
  let body = document.body;
  button1.onclick = function () {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  };
  let button2 = document.querySelector("button2");
  button2.onclick = function () {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  };
};
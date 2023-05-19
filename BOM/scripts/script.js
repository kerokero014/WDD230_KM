const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
  if (input.value != "") {
    const item = document.createElement("li");
    const xButton = document.createElement("button");

    item.textContent = input.value;
    xButton.textContent = "X";

    item.appendChild(xButton);

    list.appendChild(item);

    xButton.addEventListener("click", function () {
      list.removeChild(item);
    });

    input.focus();

    input.value = "";

    //additional css for X button
    xButton.style.color = "red";
    xButton.style.fontWeight = "bold";
    xButton.style.webkitTextStroke = "1px black";
  }
});

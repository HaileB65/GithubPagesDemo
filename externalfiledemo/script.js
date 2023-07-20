function changeColor () {
  document.getElementById("change-colour").style.color = "blue";
  document.getElementById("change-colour").innerHTML = "blue";
};

document.getElementById("button").setAttribute("onClick", "changeColor()")
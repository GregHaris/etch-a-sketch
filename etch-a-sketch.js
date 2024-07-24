const container = document.querySelector("#container");

const sketchPadContainer = document.createElement("div");
sketchPadContainer.setAttribute("id", "sketchPadContainer");

const sketchPad = document.createElement("canvas");
sketchPad.setAttribute("id", "sketchPad");
sketchPad.getContext("2d");

sketchPadContainer.appendChild(sketchPad);

const resetBtn = document.createElement("button");
resetBtn.setAttribute("class", "resetBtn");
resetBtn.textContent = "New Grid";

container.append(sketchPadContainer, resetBtn);

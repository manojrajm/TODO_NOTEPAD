const box = document.querySelector(".box");
const text = document.querySelector(".text");
const save = document.querySelector(".save");
const view = document.querySelector(".view");
const del = document.querySelector(".del");
const togglebtn = document.getElementsByClassName("togglebtn");
const input = document.getElementById("input-el");
const cntnt = document.querySelector(".cntnt");


const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  box.classList.toggle("active");
  text.classList.toggle("active");
  save.classList.toggle("active");
  view.classList.toggle("active");
  del.classList.toggle("active");
  if (cntnt.style.display === "grid") {
    cntnt.style.display = "none";
  } else {
    cntnt.style.display = "grid";
  }

  
});

let elements = [];
save.addEventListener("click", () => {
  if (input.value.length > 0) {
    elements.push(input.value);
    input.value = "";

    localStorage.setItem("elements", JSON.stringify(elements));
    console.log(elements);
  } else {
    alert("notes is empty please enter the notes");
  }
});

function getData() {
  return JSON.parse(localStorage.getItem("elements") || "[]");
}

view.addEventListener("click", () => {
 
  var list = document.getElementById("ul-el");
 
  list.innerHTML = elements;
  cntnt.style.display = "grid";
});

function getData() {
  return JSON.parse(localStorage.getItem("elements") || "[]");
}

view.addEventListener("click", () => {
  let currentURL = elements;

  elements.push(currentURL);

 
});

del.addEventListener("click", () => {
  let shift = elements.pop(elements);

  for (let i = 0; i <= elements.length; i++) {
    let shift = elements.splice(i, elements.length);

    console.log(shift);
  }
});

window.onload = function () {
  var list = document.getElementById("ul-el");
  const data = getData();
  elements = JSON.parse(localStorage.getItem("elements")) || [];
  list.innerHTML = data;
};

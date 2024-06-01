const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", () => {
  alert("div");
});
form.addEventListener("click", () => {
  alert("form");
}, {
  capture: true
});
button.addEventListener("click", () => {
  alert("button");
});

const options =["books", "shoes", "clothes", "hariacc"];
document.querySelector(".products").addEventListener("click", function(event){
  const route = event.target.classList[1];
  if(options.includes(route)) {
    window.location.href += "/" + route;
  }
});

// event delegation
// create a modal which closes by clicking on negative space

document.addEventListener("DOMContentLoaded", (event) => {
  const button = document.querySelector(".modalButton");
  const modalContainer = document.querySelector(".modalContainer");


  button.addEventListener("click", function(event){
    // console.log("button clicked");
    toggleModal(true);
  });

  function toggleModal(toggleValue) {
    modalContainer.style.display = toggleValue ? 'flex': "none";
  }

  modalContainer.addEventListener("click", function(event){
    if(event.target.className === "modalContainer") toggleModal(false);
  });

})

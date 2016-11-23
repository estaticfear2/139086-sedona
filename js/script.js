var link = document.querySelector(".search-btn");
var link_a = document.querySelector(".btn");
var popup = document.querySelector(".search-form");
var datein = popup.querySelector("#date-in");
var dateout = popup.querySelector("#date-out");
var grown = popup.querySelector("#grown");
var children = popup.querySelector("#children");
var storage_grown = localStorage.getItem("grown");
var storage_children = localStorage.getItem("children");

document.addEventListener("DOMContentLoaded", function(event){
    popup.classList.add("search-form-hide");
    console.log("df");
});

link_a.addEventListener("click", function(event) {
  event.preventDefault();
});

link.addEventListener("click", function(event) {
  event.preventDefault(); 
  popup.classList.remove("search-form-hide");
  popup.classList.add("search-form-show");
  if (storage_grown) {
    grown.value = storage_grown;
  }
  if (storage_children) {
    children.value = storage_children;
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("search-form-show")) {
      popup.classList.remove("search-form-show");
    }
  }
});

window.addEventListener("submit", function(event) {
  if (!datein.value || !dateout.value || !grown.value ||!children.value) {
    event.preventDefault();
  } else {
          localStorage.setItem("grown", grown.value);
          localStorage.setItem("children", children.value);
        }
});

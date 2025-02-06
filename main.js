// Slider

let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

let currentSlide = 1;
let slideNumberElement = document.querySelector(".slide-number");

let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

nextButton.addEventListener("click", function() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
});
prevButton.addEventListener("click", function() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
});

let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");

for (let i = 1; i <= sliderImages.length; i++) {
  let paginationitem = document.createElement("li");
  paginationitem.setAttribute("data-index", i);
  paginationitem.appendChild(document.createTextNode(i));
  paginationElement.appendChild(paginationitem);
}

document.getElementById("indicators").appendChild(paginationElement);

let paginationCreatedUl = document.getElementById("pagination-ul");
let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

paginationElement.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    currentSlide = parseInt(event.target.getAttribute("data-index"));
    theChecker();
  }
});

theChecker();

function theChecker() {
  slideNumberElement.textContent = `Slide #${currentSlide} of ${sliderImages.length}`;
  removeAllActives();

  sliderImages[currentSlide - 1].classList.add("active");
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (currentSlide == sliderImages.length) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

function removeAllActives() {
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });
  paginationBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}


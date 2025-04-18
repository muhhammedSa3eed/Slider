// * HTML Elements
var images = Array.from(document.querySelectorAll(" .inner img"));
var modal = document.querySelector(".my-modal");
var imageModal = document.querySelector(".my-modal img");
var previousBtn = document.querySelector(".my-modal .fa-circle-left");
var nextBtn = document.querySelector(".my-modal .fa-circle-right");
var closeBtn = document.querySelector(".my-modal .fa-xmark ");

// * App Variables
var imageIndex;
// * Function
function showModal() {
  modal.classList.remove("d-none");
}
function getCurrentImage(e) {
  var currentImage = e.target;
  imageIndex = images.indexOf(currentImage);
  var currentSource = e.target.getAttribute("src");
  imageModal.setAttribute("src", currentSource);
}
function nextSlide() {
  imageIndex += 1;
  if (imageIndex === images.length) {
    imageIndex = 0;
  }
  imageModal.setAttribute("src", images[imageIndex].getAttribute("src"));
}
function previoustSlide() {
  imageIndex -= 1;
  if (imageIndex === -1) {
    imageIndex = images.length - 1;
  }
  imageModal.setAttribute("src", images[imageIndex].getAttribute("src"));
}
function hideModal() {
  modal.classList.add("d-none");
}

// * Events
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function (e) {
    showModal();
    getCurrentImage(e);
  });
}

// modal.addEventListener("click" , function(){
//     hideModal()
// })
closeBtn.addEventListener("click", function () {
  hideModal();
});
nextBtn.addEventListener("click", function () {
  nextSlide();
});
previousBtn.addEventListener("click", function () {
  previoustSlide();
});
document.addEventListener("keydown", function (e) {
  if (e.code === "ArrowRight") {
    nextSlide();
  } else if (e.code === "ArrowLeft") {
    previoustSlide();
  } else if (e.code === "Escape") {
    hideModal();
  }
});
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    hideModal();
  }
});

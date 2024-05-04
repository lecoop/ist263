function showNav() {
    document.getElementById("hamicon").style.display = "none"; // Hide hamburger icon
    document.getElementById("close").style.display = "block"; // Show close icon
    document.getElementById("navlinks").style.display = "block"; // Show navigation links
}
function hideNav() {
    document.getElementById("hamicon").style.display = "block"; // Show hamburger icon
    document.getElementById("close").style.display = "none"; // Hide close icon
    document.getElementById("navlinks").style.display = "none"; // Hide navigation links
}


function openModal(imageSrc, heading, descriptionId) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    var modalHeading = document.getElementById("modalHeading");
    var modalDescription = document.getElementById("modalDescription");

    modal.style.display = "block";
    modalImg.src = imageSrc;
    modalHeading.textContent = heading;
    modalDescription.textContent = document.getElementById(descriptionId).textContent;
}

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('menu').style.display = 'block';
});

document.addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    var overlay = document.getElementById('overlay');
    
    if (!menu.contains(event.target) && !overlay.contains(event.target)) {
        menu.style.display = 'none';
    }
});



// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
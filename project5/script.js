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
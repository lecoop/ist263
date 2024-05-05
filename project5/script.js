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

  var acc = document.getElementsByClassName("accordion");

  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      var panel = this.nextElementSibling;
  
      // Close all panels except the one clicked
      for (var j = 0; j < acc.length; j++) {
        var otherPanel = acc[j].nextElementSibling;
        if (otherPanel !== panel) {
          otherPanel.style.display = "none";
          acc[j].classList.remove("active");
        }
      }
  
      // Toggle the panel associated with the clicked button
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
  
      // Toggle the active class for the clicked button
      this.classList.toggle("active");
    });
  }

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("myDropdown1").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.drop-btn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

window.onclick = function(e) {
  if (!e.target.matches('.drop-btn1')) {
  var myDropdown1 = document.getElementById("myDropdown1");
    if (myDropdown1.classList.contains('show')) {
      myDropdown1.classList.remove('show');
    }
  }
}
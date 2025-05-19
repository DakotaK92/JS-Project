function toggleFeature(event) {
  document.getElementById("featureDropdown").classList.toggle("show");
  document.getElementById ("companyDropdown").classList.toggle("show");
}

function toggleCompany(event) {
  document.getElementById("companyDropdown").classList.toggle("show");
  document.getElementById("featureDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.closest('.dropdown')) {
    document.getElementById("featureDropdown").classList.remove("show");
    document.getElementById("companyDropdown").classList.remove("show");
  }
}
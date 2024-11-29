function handleFormSubmit(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  document.getElementById("confirmationModal").style.display = "block";
  return false;
}

function closeModal() {
  document.getElementById("confirmationModal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("confirmationModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

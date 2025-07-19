function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
}

function validateForm() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  if (!name.value || !email.value || !message.value) {
    alert("Please complete all fields.");
    return false;
  }

  alert("Thank you for contacting us. We will get back to you shortly.");
  return true;
}

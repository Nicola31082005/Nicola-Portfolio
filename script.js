document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // You can add your logic here (e.g., send data to a server or display a success message)
  alert(`Thank you, ${name}! Your message has been sent.`);
});

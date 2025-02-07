document.addEventListener("DOMContentLoaded", function () {
  // Form Submission Logic
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // You can add your logic here (e.g., send data to a server or display a success message)
      alert(`Thank you, ${name}! Your message has been sent.`);
    });
  } else {
    console.error("Contact form not found!");
  }

  // Toggle School Image Visibility
  const showSchoolImageButton = document.getElementById("showSchoolImage");
  const schoolImage = document.getElementById("schoolImage");

  if (showSchoolImageButton && schoolImage) {
    showSchoolImageButton.addEventListener("click", function () {
      schoolImage.classList.toggle("hidden");

      // Change Button Text
      if (schoolImage.classList.contains("hidden")) {
        this.textContent = "Show School Diploma";
      } else {
        this.textContent = "Hide School Diploma";
      }
    });
  } else {
    console.error("Button or image element not found!");
  }
});

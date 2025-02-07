document.addEventListener("DOMContentLoaded", function () {
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

  // Toggle Certificates Visibility
  const showCertificatesButton = document.getElementById("showCertificates");
  const certificatesImages = document.getElementById("certificatesImages");

  if (showCertificatesButton && certificatesImages) {
    showCertificatesButton.addEventListener("click", function () {
      certificatesImages.classList.toggle("hidden");

      // Change Button Text
      if (certificatesImages.classList.contains("hidden")) {
        this.textContent = "Show Certificates";
      } else {
        this.textContent = "Hide Certificates";
      }
    });
  } else {
    console.error("Button or certificates element not found!");
  }
});

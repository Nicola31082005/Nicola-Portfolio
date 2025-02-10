$(document).ready(function () {
  // Toggle School Image Visibility
  const showSchoolImageButton = document.getElementById("showSchoolImage");
  const schoolImage = document.getElementById("schoolImage");

  if (showSchoolImageButton && schoolImage) {
    $(showSchoolImageButton).click(function () {
      $(schoolImage).toggleClass("hidden");

      // Change Button Text
      if ($(schoolImage).hasClass("hidden")) {
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
    $(showCertificatesButton).click(function (e) {
      $(certificatesImages).toggleClass("hidden");

      // Change Button Text
      if ($(certificatesImages).hasClass("hidden")) {
        this.textContent = "Show Certificates";
      } else {
        this.textContent = "Hide Certificates";
      }
    });
  } else {
    console.error("Button or certificates element not found!");
  }
});

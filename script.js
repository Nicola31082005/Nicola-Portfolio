// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});

// Show/Hide School Image
const showSchoolImageBtn = document.getElementById("showSchoolImage");
const schoolImage = document.getElementById("schoolImage");

if (showSchoolImageBtn && schoolImage) {
  showSchoolImageBtn.addEventListener("click", () => {
    schoolImage.classList.toggle("hidden");
    showSchoolImageBtn.innerHTML = schoolImage.classList.contains("hidden")
      ? '<i class="fas fa-graduation-cap mr-2"></i>Show School Diploma'
      : '<i class="fas fa-graduation-cap mr-2"></i>Hide School Diploma';
  });
}

// Show/Hide Certificates
const showCertificatesBtn = document.getElementById("showCertificates");
const certificatesImages = document.getElementById("certificatesImages");

if (showCertificatesBtn && certificatesImages) {
  showCertificatesBtn.addEventListener("click", () => {
    certificatesImages.classList.toggle("hidden");
    showCertificatesBtn.innerHTML = certificatesImages.classList.contains(
      "hidden"
    )
      ? '<i class="fas fa-certificate mr-2"></i>Show Certificates'
      : '<i class="fas fa-certificate mr-2"></i>Hide Certificates';
  });
}

// GSAP Animations
document.querySelectorAll(".profile-image").forEach((img) => {
  gsap.from(img, {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    ease: "power3.out",
    delay: 0.5,
  });
});

document.querySelectorAll(".section-header").forEach((header) => {
  gsap.from(header, {
    duration: 0.8,
    y: 20,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
    delay: 0.3,
  });
});

// Add hover effect to project cards (fixed to not interfere with links)
document.querySelectorAll(".project-card").forEach((card) => {
  // Get all links within the card
  const links = card.querySelectorAll("a");

  // Make sure links don't trigger the card's hover effect
  links.forEach((link) => {
    link.addEventListener("mouseenter", (e) => {
      e.stopPropagation();
    });

    // Ensure links are clickable
    link.style.position = "relative";
    link.style.zIndex = "10";
  });

  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      duration: 0.3,
      y: -5, // Using translateY instead of scale for better performance
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      ease: "power2.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      duration: 0.3,
      y: 0,
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      ease: "power2.out",
    });
  });
});

// Check if summaryText exists before observing it
const summaryText = document.querySelector("#about p");
if (summaryText) {
  // Start typing effect when the section is in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // For now, we're not implementing the typeWriter function
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(summaryText);
}

// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});

// Show/Hide School Image
const showSchoolImageBtn = document.getElementById("showSchoolImage");
const schoolImage = document.getElementById("schoolImage");

showSchoolImageBtn.addEventListener("click", () => {
  schoolImage.classList.toggle("hidden");
  showSchoolImageBtn.innerHTML = schoolImage.classList.contains("hidden")
    ? '<i class="fas fa-graduation-cap mr-2"></i>Show School Diploma'
    : '<i class="fas fa-graduation-cap mr-2"></i>Hide School Diploma';
});

// Show/Hide Certificates
const showCertificatesBtn = document.getElementById("showCertificates");
const certificatesImages = document.getElementById("certificatesImages");

showCertificatesBtn.addEventListener("click", () => {
  certificatesImages.classList.toggle("hidden");
  showCertificatesBtn.innerHTML = certificatesImages.classList.contains(
    "hidden"
  )
    ? '<i class="fas fa-certificate mr-2"></i>Show Certificates'
    : '<i class="fas fa-certificate mr-2"></i>Hide Certificates';
});

// GSAP Animations
gsap.from(".profile-image", {
  duration: 1,
  scale: 0.8,
  opacity: 0,
  ease: "power3.out",
  delay: 0.5,
});

gsap.from(".section-header", {
  duration: 0.8,
  y: 20,
  opacity: 0,
  stagger: 0.2,
  ease: "power2.out",
  delay: 0.3,
});

// Add hover effect to project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      duration: 0.3,
      scale: 1.02,
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      ease: "power2.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      duration: 0.3,
      scale: 1,
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      ease: "power2.out",
    });
  });
});

// Start typing effect when the section is in view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        typeWriter();
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(summaryText);

// Add scroll-triggered animations for skill badges
document.querySelectorAll(".skill-badge").forEach((badge, index) => {
  badge.style.opacity = "0";
  badge.style.transform = "translateY(20px)";

  setTimeout(() => {
    gsap.to(badge, {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: "power2.out",
      delay: index * 0.1,
    });
  }, 1000);
});

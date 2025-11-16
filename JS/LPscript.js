// Carousel functionality
const carouselWrapper = document.querySelector(".carousel-wrapper");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let translateX = 0;
const itemWidth = carouselWrapper.children[0].offsetWidth;
const totalItems = carouselWrapper.children.length;
const totalWidth = totalItems * itemWidth;

const firstImage = carouselWrapper.children[0].cloneNode(true);
const lastImage = carouselWrapper.children[totalItems - 1].cloneNode(true);

carouselWrapper.appendChild(firstImage);
carouselWrapper.insertBefore(lastImage, carouselWrapper.children[0]);

const updatedTotalItems = carouselWrapper.children.length;
const updatedTotalWidth = updatedTotalItems * itemWidth;

translateX = -itemWidth;
carouselWrapper.style.transform = `translateX(${translateX}px)`;

const moveCarousel = () => {
  carouselWrapper.style.transform = `translateX(${translateX}px)`;
  carouselWrapper.style.transition = "transform 0.4s ease";
};

prevBtn.addEventListener("click", () => {
  translateX += itemWidth;
  moveCarousel();

  if (translateX >= 0) {
    setTimeout(() => {
      translateX = -(updatedTotalWidth - 2 * itemWidth); // Move to last actual item
      carouselWrapper.style.transition = "none";
      moveCarousel();
    }, 400);
  }
});

nextBtn.addEventListener("click", () => {
  translateX -= itemWidth;
  moveCarousel();

  if (translateX <= -(updatedTotalWidth - itemWidth)) {
    setTimeout(() => {
      translateX = -itemWidth;
      carouselWrapper.style.transition = "none";
      moveCarousel();
    }, 400);
  }
});

setInterval(() => {
  nextBtn.click();
}, 3500);

carouselWrapper.addEventListener("transitionend", () => {
  carouselWrapper.style.transition = "transform 4s ease";
});

// Sign-in popup functionality
const signInButton = document.getElementById("signInButton");
const popupContainer = document.getElementById("popupContainer");
const citizenButton = document.getElementById("citizenButton");
const adminButton = document.getElementById("adminButton");

signInButton.addEventListener("click", () => {
  popupContainer.classList.remove("hidden");
});

citizenButton.addEventListener("click", () => {
  window.location.href = "citizenLogin.html";
  popupContainer.classList.add("hidden");
});

adminButton.addEventListener("click", () => {
  window.location.href = "adminLogin.html";
  popupContainer.classList.add("hidden");
});

// Close popup when clicking outside
document.addEventListener("click", (e) => {
  if (e.target === popupContainer) {
    popupContainer.classList.add("hidden");
  }
});

// ============================================
// Dropdown Menu Click Functionality
// ============================================
// Toggle dropdown on click for mobile/tablet devices
const dropdownItems = document.querySelectorAll(".dropdown");

dropdownItems.forEach((dropdown) => {
  const link = dropdown.querySelector("a");

  link.addEventListener("click", (e) => {
    // Check if there's a dropdown menu
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");
    if (dropdownMenu) {
      e.preventDefault();
      
      // Close all other dropdowns
      dropdownItems.forEach((otherDropdown) => {
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove("active");
        }
      });

      // Toggle current dropdown
      dropdown.classList.toggle("active");
    }
  });
});

// Close dropdowns when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    dropdownItems.forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  }
});


 


// nav bar section

fetch('components/header.html')
.then(response => response.text())
.then(data => {
  document.getElementById('header-placeholder').innerHTML = data;
});

// footer part
fetch('components/footer.html')
.then(response => response.text())
.then(data => {
  document.getElementById('footer').innerHTML = data;
});

// slider section


let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}
function learnMore() {
  window.location.href = "about.html"; // Change "about.html" to your actual About page URL if different
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}



setInterval(nextSlide, 5000); // Auto-slide every 5 seconds


document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
      const item = button.parentElement;
      const isActive = item.classList.contains('active');

      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

      if (!isActive) {
          item.classList.add('active');
      }
  });
});


const track = document.getElementById('servicesTrack');
const cardWidth = track.querySelector('.service-card').offsetWidth + 20; // card + margin

function scrollServices(direction) {
  track.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}

// Auto-scroll function
let autoDirection = 1;  // 1 = right, -1 = left

function autoScroll() {
  const maxScrollLeft = track.scrollWidth - track.clientWidth;

  if (track.scrollLeft >= maxScrollLeft) {
    autoDirection = -1; // switch to left
  } else if (track.scrollLeft <= 0) {
    autoDirection = 1; // switch to right
  }

  scrollServices(autoDirection);
}

// Start automatic scroll
let autoScrollInterval = setInterval(autoScroll, 3000); // scrolls every 3 seconds

// Optional: pause on hover
track.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
track.addEventListener('mouseleave', () => {
  autoScrollInterval = setInterval(autoScroll, 3000);
});

function toggleMenu() {
  const navbarLinks = document.getElementById('navbar-links');
  const menuToggle = document.getElementById('menu-toggle');
  navbarLinks.classList.toggle('show');
  menuToggle.classList.toggle('open');
}



  

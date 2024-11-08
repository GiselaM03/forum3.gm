document.addEventListener('DOMContentLoaded', () => {
  // Initialize the carousel
  let carouselElement = document.querySelector('#carouselExampleIndicators');
  let carousel = new bootstrap.Carousel(carouselElement, {
    interval: 3000, // Auto-slide every 3 seconds
    wrap: true
  });

  // Optionally log current slide
  carouselElement.addEventListener('slid.bs.carousel', (event) => {
    console.log(`Active Slide: ${event.to}`);
  });
});


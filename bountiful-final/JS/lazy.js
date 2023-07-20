  // Function to lazy load images when they enter the viewport
  function lazyLoadImages() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    // Check if Intersection Observer is supported in the user's browser
    if ('IntersectionObserver' in window) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Adjust this threshold to your preference
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.removeAttribute('data-src');
            observer.unobserve(lazyImage);
          }
        });
      }, options);

      lazyImages.forEach((lazyImage) => {
        observer.observe(lazyImage);
      });
    } else {
      // Fallback for browsers that don't support Intersection Observer
      // Load all images immediately
      lazyImages.forEach((lazyImage) => {
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.removeAttribute('data-src');
      });
    }
  }

  // Call the function to start lazy loading when the DOM is ready
  document.addEventListener('DOMContentLoaded', lazyLoadImages);
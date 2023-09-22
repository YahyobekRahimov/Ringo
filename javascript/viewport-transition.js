// Function to handle the animations when elements enter the viewport
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transform = 'translateX(0)';
        entry.target.style.visibility = 'visible';
        observer.unobserve(entry.target); // Stop observing this element once it's animated
      }
    });
  }
  
  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.5, // Trigger when at least 50% of the element is visible
  });
  
  // Observe all elements with the class "blocks-wrapper__block"
  const blocks = document.querySelectorAll('.blocks-wrapper__block');
  blocks.forEach((block) => {
    observer.observe(block);
  });
  
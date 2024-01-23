document.addEventListener('DOMContentLoaded', function () {
    const openOverlayBtn = document.getElementById('openOverlayBtn');
    const closeOverlayBtn = document.getElementById('closeOverlayBtn');
    const overlay = document.getElementById('overlay');
  
    openOverlayBtn.addEventListener('click', function () {
      overlay.style.left = '0'; /* Slide in from the left */
    });
  
    closeOverlayBtn.addEventListener('click', function () {
      overlay.style.left = '-100%'; /* Slide out to the left */
    });
  
    // Close overlay if user clicks outside the content
    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) {
        overlay.style.left = '-100%';
      }
    });
  });
  
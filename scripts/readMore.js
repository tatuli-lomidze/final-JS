function toggleReadMore() {
    const hiddenParagraph = document.querySelector('.about-content .hidden');
    const readMoreButton = document.querySelector('.read-more-button');
  
    if (hiddenParagraph.style.display === 'none') {
      hiddenParagraph.style.display = 'block';
      readMoreButton.textContent = 'Read Less';
    } else {
      hiddenParagraph.style.display = 'none';
      readMoreButton.textContent = 'Read More';
    }
  }
  
  
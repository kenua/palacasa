'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const collectionsContainer = document.getElementById('collections-container');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  let isDown = false;
  let isDragging = false;
  let initialPos = null;
  let currentScroll = 0

  // drag to scroll 'collectionsContainer'
  collectionsContainer.scrollLeft = 0;
  collectionsContainer.addEventListener('mousedown', dragSetup);
  collectionsContainer.addEventListener('mousemove', moveScroll);
  collectionsContainer.addEventListener('mouseup', drop);
  collectionsContainer.addEventListener('mouseleave', drop);
  // scroll left or right using buttons
  prevButton.addEventListener('pointerdown', () => scrollCollection(-75))
  prevButton.addEventListener('pointerup', () => isDown = false)
  nextButton.addEventListener('pointerdown', () => scrollCollection(75))
  nextButton.addEventListener('pointerup', () => isDown = false)

  function dragSetup(e) {
    e.preventDefault();
    initialPos = e.clientX;
    isDragging = true;
  }

  function moveScroll(e) {
    if (isDragging) {
      collectionsContainer.scrollLeft = currentScroll + (initialPos - e.clientX);
    }
  }

  function drop() {
    isDragging = false;
    currentScroll = collectionsContainer.scrollLeft;
  }

  function scrollCollection(scrollValue) {
    isDown = true;
    moveCollection(scrollValue)
  }

  function moveCollection(scrollValue) {
    if (isDown) {
      collectionsContainer.scrollBy({
        left: scrollValue,
        behavior: 'smooth',
      });
      currentScroll = collectionsContainer.scrollLeft;
      requestAnimationFrame(() => moveCollection(scrollValue));
    }
  }
});
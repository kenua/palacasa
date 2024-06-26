'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const collectionsContainer = document.getElementById('collections-container');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  let isDragging = false;
  let isMoving = false;
  let initialPos = null;
  let currentScroll = 0;

  // drag to scroll 'collectionsContainer'
  collectionsContainer.scrollLeft = 0;
  collectionsContainer.addEventListener('mousedown', dragSetup);
  collectionsContainer.addEventListener('mousemove', moveScroll);
  collectionsContainer.addEventListener('mouseup', drop);
  collectionsContainer.addEventListener('mouseleave', drop);
  collectionsContainer.addEventListener('click', preventRedirection);
  // scroll left or right using buttons
  prevButton.addEventListener('click', () => scrollCollectionBy(-300))
  nextButton.addEventListener('click', () => scrollCollectionBy(300))

  function dragSetup(e) {
    e.preventDefault();
    initialPos = e.clientX;
    isDragging = true;
  }

  function moveScroll(e) {
    if (isDragging) {
      isMoving = true;
      collectionsContainer.scrollLeft = currentScroll + (initialPos - e.clientX);
    }
  }

  function drop() {
    isDragging = false;
    currentScroll = collectionsContainer.scrollLeft;
  }

  function preventRedirection(e) {
    if (isMoving) {
      e.preventDefault();
      isMoving = false;
    }
  }

  function scrollCollectionBy(int) {
    collectionsContainer.scrollBy({
      left: int,
      behavior: 'smooth',
    });
    currentScroll = currentScroll + int;
  }
});
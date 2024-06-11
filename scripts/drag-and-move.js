'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const collectionsContainer = document.getElementById('collections-container');

  let isDragging = false;
  let initialPos = null;
  let currentScroll = 0

  collectionsContainer.scrollLeft = 0;
  collectionsContainer.addEventListener('mousedown', dragSetup);
  collectionsContainer.addEventListener('mousemove', moveScroll);
  collectionsContainer.addEventListener('mouseup', drop);
  collectionsContainer.addEventListener('mouseleave', drop);

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
});
'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const collectionsContainer = document.getElementById('collections-container');

  let isGrabbing = false;
  let initialPos = null;
  let currentScroll = 0

  collectionsContainer.scrollLeft = 0;
  collectionsContainer.addEventListener('mousedown', grabSetup);
  collectionsContainer.addEventListener('mousemove', moveScroll);
  collectionsContainer.addEventListener('mouseup', drop);
  collectionsContainer.addEventListener('mouseleave', drop);

  function grabSetup(e) {
    e.preventDefault();
    initialPos = e.clientX;
    isGrabbing = true;
  }

  function moveScroll(e) {
    if (isGrabbing) {
      collectionsContainer.scrollLeft = currentScroll + (initialPos - e.clientX);
    }
  }

  function drop() {
    isGrabbing = false;
    currentScroll = collectionsContainer.scrollLeft;
  }
});
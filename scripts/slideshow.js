'use strict'

window.addEventListener('DOMContentLoaded', () => {
  const desktopImages = document.getElementById('slideshow-desktop').children
  const mobileImages = document.getElementById('slideshow-mobile').children
  const slideshowButtons = document.getElementById('slideshow-buttons')

  let selectedIndex = 0
  let previousIndex = null
  let slideInterval = null;
  let intervalTime = 10*1000

  function setSlideInterval() {
    slideInterval = setInterval(() => {
      let newIndex = selectedIndex + 1

      newIndex = (newIndex >= desktopImages.length) ? 0 : newIndex
      changeSlideshowImage(newIndex)
    }, intervalTime)
  }

  function changeSlideshowImage(newIndex) {
    previousIndex = selectedIndex
    desktopImages[previousIndex].classList.remove('image-anchor--selected')
    mobileImages[previousIndex].classList.remove('image-anchor--selected')
    selectedIndex = newIndex
    desktopImages[selectedIndex].classList.add('image-anchor--selected')
    mobileImages[selectedIndex].classList.add('image-anchor--selected')
    slideshowButtons.children[previousIndex].classList.remove('hero__button--selected')
    slideshowButtons.children[selectedIndex].classList.add('hero__button--selected')
    clearInterval(slideInterval)
    setSlideInterval()
  }

  // # SETUP
  // show first image
  desktopImages[selectedIndex].classList.add('image-anchor--selected')
  mobileImages[selectedIndex].classList.add('image-anchor--selected')

  // create a button for every image element
  for (let i = 0; i < desktopImages.length; i++) {
    let buttonEle = document.createElement('a')

    buttonEle.href = '#'
    buttonEle.dataset.index = i
    buttonEle.className = 'hero__button'
    buttonEle.textContent = `button ${i}`
    slideshowButtons.append(buttonEle)
  }

  slideshowButtons
    .children[selectedIndex]
    .classList
    .add('hero__button--selected')
  slideshowButtons.addEventListener('click', (e) => {
    e.preventDefault()

    if (!e.target.dataset.index) return

    let index = +e.target.dataset.index

    if (index !== selectedIndex) changeSlideshowImage(index)
  })
  setSlideInterval()
})
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 5,
    },
  },
})

const hero = document.querySelector('.cc-hero')
const upButton = document.querySelector('.up-button')

const scrollUp = function () {
  const verticalScrollValue = window.pageYOffset;
  const heroHeight = hero.getBoundingClientRect().height

  if (verticalScrollValue > heroHeight) {
    showUpButton()
  } else {
    hideUpButton()
  }
}

function showUpButton() {
  upButton.classList.add("show-up-button")
}

function hideUpButton() {
  upButton.classList.remove("show-up-button")
}

window.addEventListener('scroll', scrollUp)

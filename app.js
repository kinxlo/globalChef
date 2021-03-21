// the preloader functionality...

const preloaderDiv = document.querySelector('.cc-loader')

window.addEventListener('load', () => {
  preloaderDiv.classList.add('cc-inactive')
})

const playButton = document.querySelector('.cc-play-btn-div')
const playButtonText = document.querySelector('.cc-play-btn-div p')
const playButtonIcon = document.querySelector('.cc-play-btn-div i')

const video = document.querySelector('video')

playButton.addEventListener('click', () => {
  if (video.paused) {
    video.play()
    playButtonText.textContent = 'pause'
    playButtonIcon.classList.remove('fa-play')
    playButtonIcon.classList.add('fa-pause')
  } else {
    video.pause()
    playButtonText.textContent = 'play'
    playButtonIcon.classList.remove('fa-pause')
    playButtonIcon.classList.add('fa-play')
  }
})

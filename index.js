let numberofDrumButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberofDrumButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    this.style.color = 'white';
  });
}

// const audio = new Audio('sounds/tom-1.mp3');
// audio.play();

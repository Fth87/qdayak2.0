$(document).ready(function () {
  const owl = $('.owl-carousel');
  owl.owlCarousel({
    dots: true,
    loop: false,
    margin: 50,
    nav: true,
    autoWidth: true,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

const rumah1 = document.getElementById('rumah1');
const rumah2 = document.getElementById('rumah2');
const rumah3 = document.getElementById('rumah3');

const bg = document.querySelector('.bg-rumah');

const backgroundImages = ['rumah-adat1.jpg', 'rumah-adat2.jpg', 'rumah-adat3.jpg'];
let urutan = 0;

rumah1.addEventListener('click', function () {
  urutan = 0;
  bg.style.backgroundImage = `url('images/${backgroundImages[urutan]}')`;
});
rumah2.addEventListener('click', function () {
  urutan = 1;
  bg.style.backgroundImage = `url('images/${backgroundImages[urutan]}')`;
});
rumah3.addEventListener('click', function () {
  urutan = 2;
  bg.style.backgroundImage = `url('images/${backgroundImages[urutan]}')`;
});

function changeBackgroundImage() {
  if (urutan > 2) {
    urutan = 0;
  }
  bg.style.backgroundImage = `url('images/${backgroundImages[urutan]}')`;
  urutan += 1;
}   
changeBackgroundImage();
setInterval(changeBackgroundImage, 3000);

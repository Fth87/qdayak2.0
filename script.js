//function test
function log(params) {
  // console.log(params);
}
// Fetch data from data.json file
fetch('data/data.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    // _____Content________________________________
    data = data['data'];
    log(data[1].gambar);
    // log(data.length);
    // Membuat sebuah loop yang berjalan sebanyak tiga kali
    for (var i = 0; i < data.length; i++) {
      // Membuat elemen <div> baru
      let contentModal;

      contentModal = document.createElement('div'); // is a node
      contentModal.innerHTML = `
      <div id="myModal${i}" class="modal p-0">
        <!-- Modal content -->
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-fullscreen" style="height: 0; margin: 55px auto; position: absolute">
          <div class="modal-content" style="position: absolute">
            <div style="border: none" class="modal-header d-flex justify-content-center">
              <span id="close${i}" class="d-flex align-items-center">
                <h2>CLOSE</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="11" viewBox="0 0 25 11" fill="none">
                  <path d="M1 1.44678L12.5635 9.06002L24 1.44678" stroke="black" stroke-width="2" stroke-linecap="round" />
                </svg>
              </span>
            </div>
            <div class="modal-body modal-isi" style="overflow-x: hidden">
              <div class="px-5">
                <img src="images/${data[i].gambar}" alt="" class="my-3" />
    
                <h1>${data[i].judul}</h1>
                <p>
               ${data[i].isi}
                </p>
              </div>
            </div>
            <div class="modal-footer" style="border: none"></div>
          </div>
        </div>
      `;
      // console.log(contentModal);
      // document.getElementById("modalContent").innerHTML(`<h1>hallofirant</h1>`);
      // contentModal.innerHTML = 'test satu dua tiga';
      // document.getElementById("modalContent").appendChild(contentModal)
      document.body.append(contentModal);
    }

    // ________Content end __________________________
    // Get the modal
    const btn = [];
    const modal = [];
    const span = [];
    let tekanan;
    for (var i = 0; i <= 10; i++) {
      // log(i);
      modal[i] = document.getElementById(`myModal${i}`);
      btn[i] = document.getElementById(`myBtn${i}`);
      span[i] = document.getElementById(`close${i}`);
    }

    // When the user clicks the button, open the modal
    // btn.onclick = function () {
    //   modal.style.display = 'block';
    // };

    // log(modal);
    btn.forEach((tombol, i) => {
      tombol.onclick = () => {
        modal[i].style.display = 'block';
        tekanan = i;
      };
      span[i].onclick = () => {
        modal[i].style.display = 'none';
        // console.log(span[i]);
      };

      window.onclick = function (event) {
        if (event.target == modal[tekanan]) {
          modal[tekanan].style.display = 'none';
        }
      };
    });
  })
  .catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
  });

// Mendapatkan elemen navbar
var navbar = document.querySelector('.navbar');
var navbarnav = document.querySelector('.navbar-nav');

// Mendapatkan posisi awal navbar
var sticky = navbar.offsetTop;

// Membuat fungsi untuk mengganti kelas navbar saat di scroll
function scrollFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add('scrolled'); // Menambahkan kelas scrolled
    // navbarnav.classList.add('scrolled'); // Menambahkan kelas scrolled
  } else {
    navbar.classList.remove('scrolled'); // Menghapus kelas scrolled
    // navbarnav.classList.remove('scrolled'); // Menghapus kelas scrolled
  }
}

// Menambahkan event listener untuk menjalankan fungsi saat di scroll
window.onscroll = function () {
  scrollFunction();
};



// ___________________________________Navbar End_____________________________________________

// Carousel____________________________________

const wrapper = document.querySelector('.wrapper');
const carousel = document.querySelector('.carousel');
const firstCardWidth = carousel.querySelector('.card').offsetWidth;
const arrowBtns = document.querySelectorAll('.wrapper i');
const carouselChildrens = [...carousel.children];

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML('beforeend', card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add('no-transition');
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove('no-transition');

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    carousel.scrollLeft += btn.id == 'left' ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add('dragging');
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove('dragging');
};

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add('no-transition');
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove('no-transition');
  }
  // If the carousel is at the end, scroll to the beginning
  else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
    carousel.classList.add('no-transition');
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove('no-transition');
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(':hover')) autoPlay();
};

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
};
autoPlay();

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);
carousel.addEventListener('scroll', infiniteScroll);
wrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId));
wrapper.addEventListener('mouseleave', autoPlay);

// ________________________________________end

// Carousel____________________________________

const wrapper1 = document.querySelector('.wrapper1');
const carousel1 = document.querySelector('.carousel1');
const firstCardWidth1 = carousel1.querySelector('.card1').offsetWidth;
const arrowBtns1 = document.querySelectorAll('.wrapper1 i');
const carouselChildrens1 = [...carousel1.children];

let isDragging1 = false,
  isAutoPlay1 = true,
  startX1,
  startScrollLeft1,
  timeoutId1;

// Get the number of cards that can fit in the carousel1 at once
let cardPerView1 = Math.round(carousel1.offsetWidth / firstCardWidth1);

// Insert copies of the last few cards to beginning of carousel1 for infinite scrolling
carouselChildrens1
  .slice(-cardPerView1)
  .reverse()
  .forEach((card) => {
    carousel1.insertAdjacentHTML('afterbegin', card.outerHTML);
  });

// Insert copies of the first few cards to end of carousel1 for infinite scrolling
carouselChildrens1.slice(0, cardPerView1).forEach((card) => {
  carousel1.insertAdjacentHTML('beforeend', card.outerHTML);
});

// Scroll the carousel1 at appropriate postition to hide first few duplicate cards on Firefox
carousel1.classList.add('no-transition');
carousel1.scrollLeft = carousel1.offsetWidth;
carousel1.classList.remove('no-transition');

// Add event listeners for the arrow buttons to scroll the carousel1 left and right
arrowBtns1.forEach((btn) => {
  btn.addEventListener('click', () => {
    carousel1.scrollLeft += btn.id == 'left' ? -firstCardWidth1 : firstCardWidth1;
  });
});

const dragStart1 = (e) => {
  isDragging1 = true;
  carousel1.classList.add('dragging1');
  // Records the initial cursor and scroll position of the carousel1
  startX1 = e.pageX;
  startScrollLeft1 = carousel1.scrollLeft;
};

const dragging1 = (e) => {
  if (!isDragging1) return; // if isDragging1 is false return from here
  // Updates the scroll position of the carousel1 based on the cursor movement
  carousel1.scrollLeft = startScrollLeft1 - (e.pageX - startX1);
};

const dragStop1 = () => {
  isDragging1 = false;
  carousel1.classList.remove('dragging1');
};

const infiniteScroll1 = () => {
  // If the carousel1 is at the beginning, scroll to the end
  if (carousel1.scrollLeft === 0) {
    carousel1.classList.add('no-transition');
    carousel1.scrollLeft = carousel1.scrollWidth - 2 * carousel1.offsetWidth;
    carousel1.classList.remove('no-transition');
  }
  // If the carousel1 is at the end, scroll to the beginning
  else if (Math.ceil(carousel1.scrollLeft) === carousel1.scrollWidth - carousel1.offsetWidth) {
    carousel1.classList.add('no-transition');
    carousel1.scrollLeft = carousel1.offsetWidth;
    carousel1.classList.remove('no-transition');
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel1
  clearTimeout(timeoutId1);
  if (!wrapper1.matches(':hover')) autoPlay1();
};

const autoPlay1 = () => {
  if (window.innerWidth < 800 || !isAutoPlay1) return; // Return if window is smaller than 800 or isAutoPlay1 is false
  // Autoplay the carousel1 after every 2500 ms
  timeoutId1 = setTimeout(() => (carousel1.scrollLeft += firstCardWidth1), 2500);
};
autoPlay1();

carousel1.addEventListener('mousedown', dragStart1);
carousel1.addEventListener('mousemove', dragging1);
document.addEventListener('mouseup', dragStop1);
carousel1.addEventListener('scroll', infiniteScroll1);
wrapper1.addEventListener('mouseenter', () => clearTimeout(timeoutId1));
wrapper1.addEventListener('mouseleave', autoPlay1);

// ________________________________________end

// Carousel____________________________________

const wrapper2 = document.querySelector('.wrapper2');
const carousel2 = document.querySelector('.carousel2');
const firstCardWidth2 = carousel2.querySelector('.card2').offsetWidth;
const arrowBtns2 = document.querySelectorAll('.wrapper2 i');
const carouselChildrens2 = [...carousel2.children];

let isDragging2 = false,
  isAutoPlay2 = true,
  startX2,
  startScrollLeft2,
  timeoutId2;

// Get the number of cards that can fit in the carousel2 at once
let cardPerView2 = Math.round(carousel2.offsetWidth / firstCardWidth2);

// Insert copies of the last few cards to beginning of carousel2 for infinite scrolling
carouselChildrens2
  .slice(-cardPerView2)
  .reverse()
  .forEach((card) => {
    carousel2.insertAdjacentHTML('afterbegin', card.outerHTML);
  });

// Insert copies of the first few cards to end of carousel2 for infinite scrolling
carouselChildrens2.slice(0, cardPerView2).forEach((card) => {
  carousel2.insertAdjacentHTML('beforeend', card.outerHTML);
});

// Scroll the carousel2 at appropriate postition to hide first few duplicate cards on Firefox
carousel2.classList.add('no-transition');
carousel2.scrollLeft = carousel2.offsetWidth;
carousel2.classList.remove('no-transition');

// Add event listeners for the arrow buttons to scroll the carousel2 left and right
arrowBtns2.forEach((btn) => {
  btn.addEventListener('click', () => {
    carousel2.scrollLeft += btn.id == 'left' ? -firstCardWidth2 : firstCardWidth2;
  });
});

const dragStart2 = (e) => {
  isDragging2 = true;
  carousel2.classList.add('dragging2');
  // Records the initial cursor and scroll position of the carousel2
  startX2 = e.pageX;
  startScrollLeft2 = carousel2.scrollLeft;
};

const dragging2 = (e) => {
  if (!isDragging2) return; // if isDragging2 is false return from here
  // Updates the scroll position of the carousel2 based on the cursor movement
  carousel2.scrollLeft = startScrollLeft2 - (e.pageX - startX2);
};

const dragStop2 = () => {
  isDragging2 = false;
  carousel2.classList.remove('dragging2');
};

const infiniteScroll2 = () => {
  // If the carousel2 is at the beginning, scroll to the end
  if (carousel2.scrollLeft === 0) {
    carousel2.classList.add('no-transition');
    carousel2.scrollLeft = carousel2.scrollWidth - 2 * carousel2.offsetWidth;
    carousel2.classList.remove('no-transition');
  }
  // If the carousel2 is at the end, scroll to the beginning
  else if (Math.ceil(carousel2.scrollLeft) === carousel2.scrollWidth - carousel2.offsetWidth) {
    carousel2.classList.add('no-transition');
    carousel2.scrollLeft = carousel2.offsetWidth;
    carousel2.classList.remove('no-transition');
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel2
  clearTimeout(timeoutId2);
  if (!wrapper2.matches(':hover')) autoPlay2();
};

const autoPlay2 = () => {
  if (window.innerWidth < 800 || !isAutoPlay2) return; // Return if window is smaller than 800 or isAutoPlay2 is false
  // Autoplay the carousel2 after every 2500 ms
  timeoutId2 = setTimeout(() => (carousel2.scrollLeft += firstCardWidth2), 2500);
};
autoPlay2();

carousel2.addEventListener('mousedown', dragStart2);
carousel2.addEventListener('mousemove', dragging2);
document.addEventListener('mouseup', dragStop2);
carousel2.addEventListener('scroll', infiniteScroll2);
wrapper2.addEventListener('mouseenter', () => clearTimeout(timeoutId2));
wrapper2.addEventListener('mouseleave', autoPlay2);

// ________________________________________end

// Get the modal
const btn = [];
const modal = [];
const span = [];
let tekanan;
for (var i = 0; i <= 1; i++) {
  modal[i] = document.getElementById(`myModal${i}`);
  btn[i] = document.getElementById(`myBtn${i}`);
  span[i] = document.getElementById(`close${i}`);
}

// When the user clicks the button, open the modal
// btn.onclick = function () {
//   modal.style.display = 'block';
// };

btn.forEach((tombol, i) => {
  tombol.onclick = () => {
    modal[i].style.display = 'block';
    tekanan = i;
  };
  span[i].onclick = () => {
    modal[i].style.display = 'none';
    console.log(span[i]);
  };

  window.onclick = function (event) {
    if (event.target == modal[tekanan]) {
      modal[tekanan].style.display = 'none';
    }
  };
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

// _____________________________________________________Dark Mode____________________________________________

const darkModeToggle = document.querySelector('#checkbox');
const body = document.body;
const checkbox = document.getElementById('checkbox');

// Cek apakah mode gelap telah diaktifkan sebelumnya
const isDarkMode = localStorage.getItem('dark-mode') === 'true';

// Fungsi untuk mengaktifkan/menonaktifkan mode gelap
function toggleDarkMode() {
  // Tambahkan atau hapus kelas "dark-mode" dari elemen <body>
  body.classList.toggle('dark-mode');

  // Simpan preferensi pengguna di localStorage

  const darkModeEnabled = body.classList.contains('dark-mode');
  localStorage.setItem('dark-mode', darkModeEnabled);
}

// Setel mode gelap berdasarkan preferensi pengguna
if (isDarkMode) {
  body.classList.add('dark-mode');
  checkbox.checked = true;
}

// Tambahkan event listener untuk tombol toggle
darkModeToggle.addEventListener('click', toggleDarkMode);

// ----------------------------------------------------------- fitur bahasa -----------------------------------------------

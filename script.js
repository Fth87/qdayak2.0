import content from './content.js';

// ___________________________________Navbar_____________________________________________

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

// _____Content________________________________

const contents = new content();
// Membuat sebuah loop yang berjalan sebanyak tiga kali
for (var i = 0; i < contents.length; i++) {
  // Membuat elemen <div> baru
  var modaltes = document.createElement('div');

  // Memberikan konten HTML pada elemen <div>
  modaltes.innerHTML = `
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
            <img src="images/${contents[i].gambar}" alt="" class="my-3" />

            <h1>${contents[i].judul}</h1>
            <p>
           ${contents[i].isi}
            </p>
          </div>
        </div>
        <div class="modal-footer" style="border: none"></div>
      </div>
    </div>
  `;

  // Menambahkan atribut id pada elemen <div> dengan nomor urut
  modaltes.id = 'myModal' + i;

  // Menambahkan atribut class pada elemen <div>
  modaltes.classList.add('modal', 'p-0');

  // Menambahkan elemen <div> ke dalam elemen <body>
  document.body.appendChild(modaltes);
}
// ________Content end __________________________

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

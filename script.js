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
              <div class="px-lg-5 ">
                <img src="images/${data[i].gambar}" alt="" style="border-radius:20px" class="my-3 " />
    
                <h1 style="width: 90vw;">${data[i].judul}</h1>
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
        console.log(tombol);
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

const wrapper2 = document.querySelector('.wrapper2');
const carousel2 = document.querySelector('.carousel2');
const firstCardWidth2 = carousel2.querySelector('.card2').offsetWidth;
const arrowBtns2 = document.querySelectorAll('.wrapper2 i');
const carouselChildrens2 = [...carousel2.children];

let isDragging2 = true,
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
// if (isDarkMode) {
//   body.classList.add('dark-mode');
//   checkbox.checked = true;
// }

// Tambahkan event listener untuk tombol toggle
// darkModeToggle.addEventListener('click', toggleDarkMode);

// ----------------------------------------------------------- fitur bahasa -----------------------------------------------

const playerButton = document.querySelector('.player-button'),
  audio = document.querySelector('audio'),
  timeline = document.querySelector('.timeline'),
  soundButton = document.querySelector('.sound-button'),
  playIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="white">
  <path d="M6.36842 22C9.8856 22 12.7368 19.5376 12.7368 16.5C12.7368 13.4624 9.8856 11 6.36842 11C2.85124 11 0 13.4624 0 16.5C0 19.5376 2.85124 22 6.36842 22Z" fill="white"/>
  <rect x="9.26318" y="3" width="3.47368" height="13" fill="white"/>
  <rect x="9.26318" width="12.7368" height="6" rx="2" fill="white"/>
  </svg>
      `,
  pauseIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="white">
  <path d="M7.36842 22C10.8856 22 13.7368 19.5376 13.7368 16.5C13.7368 13.4624 10.8856 11 7.36842 11C3.85124 11 1 13.4624 1 16.5C1 19.5376 3.85124 22 7.36842 22Z" fill="white"/>
  <rect x="10.2632" y="3" width="3.47368" height="13" fill="white"/>
  <rect x="10.2632" width="12.7368" height="6" rx="2" fill="white"/>
  <path d="M2 3L22 16" stroke="white" stroke-width="3" stroke-linecap="round"/>
  </svg>
      `,
  soundIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
  <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd" />
</svg>`,
  muteIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
  <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>`;

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    playerButton.innerHTML = pauseIcon;
  } else {
    audio.pause();
    playerButton.innerHTML = playIcon;
  }
  console.log('click');
}

playerButton.addEventListener('click', toggleAudio);

// function changeTimelinePosition() {
//   const percentagePosition = (100 * audio.currentTime) / audio.duration;
//   timeline.style.backgroundSize = `${percentagePosition}% 100%`;
//   timeline.value = percentagePosition;
// }

// audio.ontimeupdate = changeTimelinePosition;

// function audioEnded() {
//   playerButton.innerHTML = playIcon;
// }

// audio.onended = audioEnded;

// function changeSeek() {
//   const time = (timeline.value * audio.duration) / 100;
//   audio.currentTime = time;
// }

// timeline.addEventListener('change', changeSeek);

function toggleSound() {
  audio.muted = !audio.muted;
  soundButton.innerHTML = audio.muted ? muteIcon : soundIcon;
  console.log('click');
}

soundButton.addEventListener('click', toggleSound);

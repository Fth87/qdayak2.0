//function test
function log(params) {
  console.log(params);
}
// Fetch data from data.json file
fetch('data/data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // _____Content________________________________
    data = data["data"]
    // log(data[1].gambar);
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

  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });



// ________Content end __________________________
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

console.log("h");


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

const backgroundImages = ['rumah-adat1.jpg', 'rumah-adat2.jpeg', 'rumah-adat3.jpeg'];
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

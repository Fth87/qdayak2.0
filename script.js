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
  // ######################################################## fitur bahasa #########################################################
  $('#inggris').hover(function () {
    $('#nav').html(`
      
            <body class="body" id="bodyku">
            <nav class="navbar navbar-expand-lg fixed-top" style="padding: 0px; height: 67px">
              <div class="container inner-navbar d-flex justify-content-between">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="black" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                  </svg>
                  <!-- <span fill="white" class="navbar-toggler-icon"></span> -->
                </button>

                <div class="Qdayak d-block">
                  <span style="color: #920d0d; font-size: 32px; font-family: Poppins; font-weight: 700">QD</span><span style="color: black; font-size: 32px; font-family: Poppins; font-weight: 700">ayak</span
                  ><span style="color: #920d0d; font-size: 32px; font-family: Poppins; font-weight: 700">.</span>
                </div>

                <div class="collapse navbar-collapse menu rounded-2 justify-content-center" id="navbarNavDropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item nav-hover-1">
                      <a style="padding: 0px" class="nav-link" aria-current="page" href="#home"><p class="nav-color-1">Home</p></a>
                    </li>
                    <li class="nav-item nav-hover-7">
                      <a style="padding: 0px" class="nav-link text-black" href="#profil"><p class="nav-color-7">Profil</p></a>
                    </li>
                    <li class="nav-item nav-hover-2">
                      <a style="padding: 0px" class="nav-link" href="#adat"><p class="nav-color-2">Adat</p></a>
                    </li>
                    <li class="nav-item nav-hover-3">
                      <a style="padding: 0px" class="nav-link text-black" href="#legenda"><p class="nav-color-3">History</p></a>
                    </li>

                    <li class="nav-item nav-hover-5">
                      <a style="padding: 0px" class="nav-link text-black" href="#makanan"><p class="nav-color-5">Food</p></a>
                    </li>
                    <li class="nav-item nav-hover-4">
                      <a style="padding: 0px" class="nav-link text-black" href="#rumah"><p class="nav-color-4">House</p></a>
                    </li>

                    <li class="nav-item nav-hover-6">
                      <a style="padding: 0px" class="nav-link text-black" href="#senjata"><p class="nav-color-6">Weapon</p></a>
                    </li>

                    <li class="nav-item d-flex align-content-center my-lg-0 my-2">
                      <!-- <button style="padding: 0px" id="dark-mode-toggle">Mode Gelap</button> -->
                      <div class="m-auto">
                        <input type="checkbox" class="checkbox" id="checkbox" />
                        <label for="checkbox" class="checkbox-label">
                          <i class="bi bi-sun"></i>
                          <i class="bi bi-moon"></i>
                          <span class="ball"></span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <div class="overflow-hidden" id="home">
              <div class="landing" id="landing">
                <div class="container">
                  <div class="row inner-landing mx-5">
                    <div class="col-lg-6 align-content-center">
                      <div class="rectangle2">
                        <p class="Welcome">Welcome</p>
                        <a id="inggris" class="Welcome"  href="">inggris</a>

                      </div>

                      <div class="SukuDayak">Dayak<br/>Culture</div>

                      <div class="Warisan">“The natural heritage of nature and culture”</div>
                    </div>
                    <div class="col-lg-6"></div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div class="line-bottom"></div>

                    <div class="circle1">
                      <a href="#profil">
                        <svg xmlns="http://www.w3.org/2000/svg" class="lingkaran1" viewBox="0 0 125 125" fill="none">
                          <g filter="url(#filter0_b_67_173)">
                            <circle cx="62.5" cy="62.5" r="60.5" stroke="white" stroke-width="4" />
                          </g>
                          <path
                            d="M65.5 46C65.5 44.6193 64.3807 43.5 63 43.5C61.6193 43.5 60.5 44.6193 60.5 46L65.5 46ZM61.2322 81.7678C62.2085 82.7441 63.7915 82.7441 64.7678 81.7678L80.6777 65.8579C81.654 64.8816 81.654 63.2986 80.6777 62.3223C79.7014 61.346 78.1184 61.346 77.1421 62.3223L63 76.4645L48.8579 62.3223C47.8816 61.346 46.2986 61.346 45.3223 62.3223C44.346 63.2986 44.346 64.8816 45.3223 65.8579L61.2322 81.7678ZM60.5 46V80H65.5V46L60.5 46Z"
                            fill="white"
                          />
                          <defs>
                            <filter id="filter0_b_67_173" x="-14" y="-14" width="153" height="153" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feGaussianBlur in="BackgroundImageFix" stdDeviation="7" />
                              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_67_173" />
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_67_173" result="shape" />
                            </filter>
                          </defs>
                        </svg>
                      </a>
                    </div>

                    <div class="line-bottom"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="profil overflow-hidden" id="profil">
              <div class="container">
                <div class="row">
                  <div class="col-lg-5 position-relative">
                    <img class="profil-img" src="images/dayakprofil.png" alt="profil-kepala" />
                  </div>
                  <div class="col-lg-7">
                    <div class="mx-5 profil-tulisan">
                      <div class="rectangle3 d-flex align-content-center justify-content-center">
                        <p class="profil-judul">profil</p>
                      </div>
                      <h1 class="profil-subjudul">
                        Tribal profile <br />
                        Dayak
                      </h1>
                      <p class="profil-isi">
                      The Dayak tribe is an original ethnic group that inhabits the interior of the island of Kalimantan, Indonesia.They are one of the indigenous groups that have a diversity of cultural, language, and customs that are rich.Dayak tribe
                        Consists of various tribes that have their own characteristics and identity, such as Dayak Ngaju, Dayak Iban, Dayak Kenyah, Dayak Punan, and many more.<br />
                        <br />
                        As a native group of Kalimantan, the Dayak tribe has a long and rich history.Their traditions and cultures are often related to life in the forest, relying on agriculture, fisheries, and knowledge about nature.
                        Art, music, and dance is also an important part of their culture, with many ceremonies and celebrations that show their identity and relationship with nature and spirits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="adat overflow-hidden" id="adat">
              <div class="container h-100">
                <div class="d-flex justify-content-center">
                  <div class="isi-adat">
                    <div class="rectangle4 mx-auto d-flex align-content-center justify-content-center">
                      <p class="adat-judul">Adat Istiadat</p>
                    </div>
                    <h1 class="adat-subjudul my-4">
                      Adat istiadat Dayak culture
                    </h1>
                    <p class="adat-isi">These are some of the popular and unique customs in the Dayak tribe</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="upacara">
              <div class="upacara">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-6 d-flex justify-content-center align-content-center">
                      <img class="upacara1-img" src="images/tiwah.jpg" alt="tiwah" />
                    </div>
                    <div class="col-lg-6">
                      <div class="upacara1-tulisan">
                        <div class="rectangle5 mt-5 mb-4 d-flex align-content-center justify-content-center">
                          <p class="upacara-judul">Tiwah ceremony</p>
                        </div>
                        <h1 class="upacara-subjudul mb-3">
                          Tiwah ceremony <br />
                          Dayak culture
                        </h1>
                        <p class="upacara-isi">
                          The Tiwah ceremony is a traditional event that is very meaningful for the Dayak tribe.This ceremony has the main goal to deliver and pay the last respects to the spirit of the person who has passed away.
                          <button type="button" class="" data-bs-toggle="modal" data-bs-target="#tiwah"><span>Read More</span></button>
                        </p>

                        <!-- Button trigger modal -->

                        <!-- Modal -->
                        <div class="modal fade" id="tiwah" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                            <div class="modal-content">
                              <div class="modal-body">
                                <button type="button" class="tombol-modal" data-bs-dismiss="modal" aria-label="Close">
                                  <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 16">
                                      <path id="Line 4" d="M8.2135 7.01685L37 38.0612" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                                      <path id="Line 5" d="M35.7865 7L6.99996 38.0443" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                                    </g>
                                  </svg>
                                </button>
                                <div class="mx-md-5 mx-2 mt-md-5 mt-1">
                                  <h1 class="judul-modal">
                                    Tiwah Ceremony <br />
                                    Dayak Culture
                                  </h1>
                                  <p class="isi-modal">
                                    The Tiwah ceremony is a traditional event that is very meaningful for the Dayak tribe.This ceremony has the main goal to deliver and pay the last respects to the spirit of the person who has passed away.
                                    Through a series of rituals and performances, the Tiwah ceremony creates an atmosphere full of meaning and enthusiasm for the Dayak community.In the procession of the Tiwah ceremony, various rites, dances, and rhythm of musical instruments
                                    Traditional Dayak tribes become an inseparable part.
                                    <img src="images/modal-tiwah.jpg" alt="tiwah" class="modal-img my-2" />
                                    This ritual is the way they convey prayers and hopes that the spirits of people who have died are guarded by the spirits of the ancestors.Therefore, the sacredness of the Tiwah ceremony is proportional to the two ceremonies that have been
                                    previously explained.After prayer and hope have been disclosed to the spirits of the ancestors, then the bones of people who have died will be placed with full honor.This place is known as
                                    "Sandung," a small house that was specifically built as a place of cluties.During the ceremony, the rhythm of traditional musical instruments continued to play, creating a solemn and focused atmosphere.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="upacara">
                <div class="container">
                  <div id="parent" class="row">
                    <div id="a" class="col-lg-6">
                      <div class="upacara1-tulisan">
                        <div class="rectangle5-manajah mt-5 mb-4 d-flex align-content-center justify-content-center">
                          <p class="upacara-judul">Manajah Anatan Ceremonyg</p>
                        </div>
                        <h1 class="upacara-subjudul mb-3">
                          Manajah Anatan Ceremonyg<br />
                          Dayak Culture
                        </h1>
                        <p class="upacara-isi">
                          Manajah Anatang Ceremony has a significant role in dealing with war situations for the Dayak tribes.In this context, this ceremony becomes a strategic step to get important instructions related to
                          The existence of enemies that are difficult to detect. <button type="button" class="" data-bs-toggle="modal" data-bs-target="#manajah"><span>Read More</span></button>
                        </p>

                        <!-- Button trigger modal -->

                        <!-- Modal -->
                        <div class="modal fade" id="manajah" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                            <div class="modal-content">
                              <div class="modal-body">
                                <button type="button" class="tombol-modal" data-bs-dismiss="modal" aria-label="Close">
                                  <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 16">
                                      <path id="Line 4" d="M8.2135 7.01685L37 38.0612" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                                      <path id="Line 5" d="M35.7865 7L6.99996 38.0443" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                                    </g>
                                  </svg>
                                </button>
                                <div class="mx-md-5 mx-2 mt-md-5 mt-1">
                                  <h1 class="judul-modal">
                                    Manajah Anatang  Ceremony <br />
                                    Dayak Culture
                                  </h1>
                                  <p class="isi-modal">
                                    Manajah Anatang ceremony has a significant role in dealing with the situation of war for the Dayak tribes.In this context, this ceremony becomes a strategic step to get important instructions
                                    Related to the existence of enemies that are difficult to detect.Through this series of ceremonies, the Dayak tribe hopes to reveal the existence of enemies that have been hidden.One key aspect of the ceremony
                                    Antang's manage is a call to the spirits of the ancestors through Antang birds.
                                    <img src="images/modal-manajah.jpg" alt="tiwah" class="modal-img my-2" />This bird is considered to have the ability to provide valuable instructions to the community, and in this ceremony, they are expected
                                    tell where the enemy is.Besides being a strategic tool in the context of war, Manajah Anatang ceremony also has a deep spiritual dimension, strengthening the relationship between humans and ancestral spirits
                                    and the natural surroundings.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="b" class="col-lg-6 d-flex justify-content-center align-content-center">
                      <img class="upacara1-img" src="images/manajah.jpg" alt="tiwah" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="upacara">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-6 d-flex justify-content-center align-content-center">
                      <img class="upacara1-img" src="images/tariu.jpg" alt="tariu" />
                    </div>
                    <div class="col-lg-6">
                      <div class="upacara1-tulisan">
                        <div class="rectangle5 mt-5 mb-4 d-flex align-content-center justify-content-center">
                          <p class="upacara-judul">Tariu Ceremony</p>
                        </div>
                        <h1 class="upacara-subjudul mb-3">
                          Tariu Ceremony <br />
                          Dayak Culture
                        </h1>
                        <p class="upacara-isi">
                          Tariu Ceremony is one of the traditional ceremonies conducted by the Dayak tribe in Kalimantan.Tariu is a ritual or celebration held by the Dayak tribe to respect the spirits of ancestors and nature.Ceremony dance
                          Usually held at the time specified in the Dayak tribal tradition, and the aim is to ask for blessings, safety, and abundant crop yields.
                          <button type="button" class="" data-bs-toggle="modal" data-bs-target="#tariu"><span>Read More</span></button>
                        </p>

                        <!-- Button trigger modal -->

                        <!-- Modal -->
                        <div class="modal fade" id="tariu" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                            <div class="modal-content">
                              <div class="modal-body">
                                <button type="button" class="tombol-modal" data-bs-dismiss="modal" aria-label="Close">
                                  <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 16">
                                      <path id="Line 4" d="M8.2135 7.01685L37 38.0612" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                                      <path id="Line 5" d="M35.7865 7L6.99996 38.0443" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                                    </g>
                                  </svg>
                                </button>
                                <div class="mx-md-5 mx-2 mt-md-5 mt-1">
                                  <h1 class="judul-modal">
                                    Tariu Ceremony <br />
                                    Dayak Culture
                                  </h1>
                                  <p class="isi-modal">
                                    The Tariu ceremony is one of the traditional ceremonies conducted by Dayak Culture in Kalimantan.Tariu is a ritual or celebration held by Dayak Culture to respect the spirits of ancestors and nature.Ceremony
                                    Tariu is usually held at the time specified in the Dayak Culture tradition, and the goal is to ask for blessings, safety, and abundant crop yields.In the Tariu ceremony, Dayak Culture usually
                                    Wear traditional clothes and decorate yourself with traditional ornaments.<img src="images/modal-tariu.jpg" alt="tariu" class="modal-img my-2" /> They perform a special dance accompanied by songs and music
                                    traditional.This dance has a deep spiritual meaning and involves harmony with the nature and ancestral spirits.During the Tariu ceremony, various rituals and sacrifice were also performed as a form
                                    Respect for the spirits of ancestors and nature.The Dayak Culture believes that by doing this ceremony earnestly, they will get blessings and protection from ancestral spirits as well
                                    safety for their community.The Tariu ceremony is not only a religious celebration, but also a means of maintaining cultural identity and commemorating ancestral heritage.Through dance, singing, and
                                    Ritual, Dayak Culture keeps the traditions and values of ancestors living in modern life.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="" id="legenda">
            <div class="legenda-bg d-flex">
              <div class="owl-carousel owl-theme">
                <div class="pembuka-legenda">
                  <div class="rectangle4 d-flex align-content-center justify-content-center">
                    <p class="adat-judul">Legenda</p>
                  </div>
                  <h1>
                    Legenda Suku <br />
                    Dayak
                  </h1>
                  <p>ini adalah beberapa adat legenda yang populer dan unik yang ada di suku dayak</p>
                </div>

                <div class="item">
                  <div class="merahmerah d-flex flex-column position-relative">
                    <h1 class="judul-legenda mt-4 mx-auto">
                      Asal Muasal <br />
                      Sungai Landak
                    </h1>
                    <img class="gambar-legenda" src="images/sungailandak.png" alt="" />
                    <p class="isi-legenda mx-4 mt-4">
                      Di sebuah desa, tinggallah sepasang suami istri. Setiap hari mereka bekerja sebagai petani palawija. Walaupun hidup sangat sederhana, mereka selalu bersedia membantu para tetangga sebisa mereka.

                      <button type="button" class="text-danger" data-bs-toggle="modal" data-bs-target="#landak"><span>Read More</span></button>
                    </p>

                    <!-- Button trigger modal -->
                  </div>
                </div>
                <div class="item">
                  <div class="merahmerah d-flex flex-column position-relative">
                    <h1 class="judul-legenda mt-4 mx-auto">
                      Kisah Bujang <br />
                      Beji
                    </h1>
                    <img class="gambar-legenda" src="images/bujang.jpg" alt="" />
                    <p class="isi-legenda mx-4 mt-4">
                      Bujang Beji bermaksud menggunakan puncak Bukit Batu di Nanga Silat, Kapuas Hulu untuk menyumbat Sungai Melawi. Dengan kesaktiannya, ia memotong puncak Bukit Batu tersebut dan membawanya menggunakan tujuh lembar daun ilalang.

                      <button type="button" class="text-danger" data-bs-toggle="modal" data-bs-target="#bujang"><span>Read More</span></button>
                    </p>

                    <!-- Button trigger modal -->
                  </div>
                </div>
                <div class="item">
                  <div class="merahmerah d-flex flex-column position-relative">
                    <h1 class="judul-legenda mt-4 mx-auto">
                      Pasukan <br />
                      hantu
                    </h1>
                    <img class="gambar-legenda" src="images/hantu.jpg" alt="" />
                    <p class="isi-legenda mx-4 mt-4">
                      Pada masa penjajahan, pasukan Belanda sangat superior ketimbang pasukan tanah air, khususnya Suku Dayak. Hal ini karena Belanda mempunyai senjata yang memadai untuk melakukan peperangan dan intimidasi.

                      <button type="button" class="text-danger" data-bs-toggle="modal" data-bs-target="#hantu"><span>Read More</span></button>
                    </p>

                    <!-- Button trigger modal -->
                  </div>
                </div>
                <div class="item">
                  <div class="merahmerah d-flex flex-column position-relative">
                    <h1 class="judul-legenda mt-4 mx-auto">
                      Legenda Pulau <br />
                      Nusa
                    </h1>
                    <img class="gambar-legenda" src="images/nusa.jpg" alt="" />
                    <p class="isi-legenda mx-4 mt-4">
                      Alkisah, dahulu kala ada seseorang bernama Nusa yang tinggal di sebuah desa, di tepi Sungai Kahayan. Di desa itu, Nusa hidup bersama istri dan adik iparnya.
                      <button type="button" class="text-danger" data-bs-toggle="modal" data-bs-target="#nusa"><span>Read More</span></button>
                    </p>

                    <!-- Button trigger modal -->
                  </div>
                </div>
              </div>
              <!-- Modal -->
              <div class="modal fade" id="landak" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                  <div class="modal-content">
                    <div class="modal-body">
                      <button type="button" class="tombol-modal" data-bs-dismiss="modal" aria-label="Close">
                        <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="Group 16">
                            <path id="Line 4" d="M8.2135 7.01685L37 38.0612" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                            <path id="Line 5" d="M35.7865 7L6.99996 38.0443" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                          </g>
                        </svg>
                      </button>
                      <div class="mx-md-5 mx-2 mt-md-5 mt-1">
                        <h1 class="judul-modal">
                          Asak Muasal<br />
                          Sungai Landak
                        </h1>
                        <p class="isi-modal">
                          Di sebuah desa, tinggallah sepasang suami istri. Setiap hari mereka bekerja sebagai petani palawija. Walaupun hidup sangat sederhana, mereka selalu bersedia membantu para tetangga sebisa mereka. Suatu malam, sang suami
                          tidak bisa tidur karena hatinya sangat gelisah. Ketika ia menoleh kepada istrinya yang sedang tertidur pulas, ia sangat terkejut. Seekor lipan yang tubuhnya bersinar putih keluar dari kepala istrinya. Lipan itu merayap
                          turun dan keluar dari rumah. Merasa penasaran, sang suami mengikuti ke mana lipan itu pergi. Lipan masuk ke sebuah lubang kecil di dekat rumahnya dan tidak keluar-keluar lagi. Keesokan paginya, sang suami menceritakan
                          kejadian aneh itu kepada istrinya. Cerita Dongeng Rakyat Dari Kalimantan Barat “Ibu pun semalam bermimpi aneh Pak. Ibu seperti berada di dekat sebuah danau. Tiba-tiba, ibu melihat sekor landak raksasa di tengah danau.
                          Landak itu berbulu kuning keemasan.
                          <img src="images/modal-landak.jpg" alt="modal-landak.jpg" class="modal-img my-2" />
                          Apakah mimpiku ini ada hubungannya dengan yang Bapak lihat semalam? Mungkin itu suatu pertanda baik, Pak. Bagaimana kalau kita tengok saja lubang tempat lipan itu bersembunyi?” usul istrinya. “Benar juga, marl kita
                          dekati lubang itu,” ujar suaminya. Suami istri ini pun mendekati lubang tempat lipan itu menghilang. Sang suami merogohkan tangannya ke dalam lubang. la merasakan tangannya menyentuh sesuatu, ditariknya benda tersebut.
                          Suami istri ini terkejut bukan main, benda yang didapat dari lubang tersebut adalah sebuah patung landak yang terbuat dari emas. “Kita bawa pulang saja patung landak ini, Pak. Siapa tahu membawa kebaikan untuk kita,”
                          kata sang istri. Patung landak itu pun mereka simpan dengan baik. “Jika kita jual patung landak itu, pasti kehidupan kita jauh lebih baik, Pak” ujar sang istri “Sabar Bu, kita simpan saja dulu. Siapa tahu ada petunjuk
                          tentang patung landak itu,” kata sang swami dengan tenang. Malamnya, petani itu bermimpi didatangi oleh seekor landak emas raksasa. “Tuan, biarkanlah aku tinggal bersamamu. Aku berjanji akan mengabulkan segala
                          permintaanmu,” kata landak itu. “Bagaimana caranya?” tanya sang swami. “Tuan cukup mengelus kepala patung landak itu dan meminta sesuatu, kemudian akhiri dengan mengelusnya lagi. Aku akan mengajarkan mantranya;” kata
                          landak raksasa. Landak raksasa itu mengucapkan mantra. Sang suami menghafalkannya dalam hati. Paginya, ia terbangun dan menceritakan hal tersebut kepada istrinya. Kemudian, petani itu mengusap kepala patung landak dan
                          mengucapkan mantra. “Berikanlah aku beras yang banyak,” kata petani itu yang kemudian menutupnya lagi dengan mantra. Ajaib, butiran beras mengalir deras dari mulut patung landak tersebut. Kemudian petani tersebut
                          mengulangi membaca mantra, kemudian meminta perhiasan dan kebutuhan pokok. Patung landak tersebut memenuhi segala permintaannya. Suami istri tersebut menjadi kaya raya. Mereka berbagi kepada semua tetangganya, sehingga
                          kehidupan kampung itu menjadi lebih balk. Kekayaan si petani memancing seorang perampok untuk datang mengintai. Akhirnya, perampok itu mengetahui dari mana datangnya kekayaan tersebut. Ia berhasil mengintip si petani
                          mengelus patung landak emas itu dan membaca mantra. Malam harinya, ia berhasil mencuri patung landak tersebut dan membawa ke desanya yang bernama Desa Ngabang. Desa tersebut sedang dilanda kekeringan. Bahkan, untuk
                          kebutuhan air yang pokok saja sudah tidak ada. Perampok tadi dengan bangganya mengumpulkan warga, “Tenang Saudara-Saudara. Aku akan menolong kallan dari kekeringan ini,” ujar sang perampok. Lalu, ia mengusap patung
                          landak itu dan membaca mantra seperti yang ia dengar di rumah petani. Seketika saja, air deras menyembur dari mulut landak. Warga bersuka cita. Namun, air tersebut terus saja mengalir deras membuat semua orang kewalahan.
                          Lama kelamaan air menggenangi desa. Perampok tersebut tidak bisa menghentikannya, karena ia tidak tahu mantra untuk menghentikan permintaannya kepada patung landak tersebut. Patung landak tersebut terus saja mengeluarkan
                          air. Akhirnya, Desa Ngabang tenggelam dan tidak bisa lagi menampung air, sehingga mengalirlah air keluar desa yang kemudian menjadi sebuah sungai besar. Oleh masyarakat setempat, sungai tersebut dinamai Sungai Landak.
                          Sungai Landak mengalir di tengah-tengah Kota Ngabang, Kabupaten Landak, Kalimantan Barat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Modal -->
              <div class="modal fade" id="hantu" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                  <div class="modal-content">
                    <div class="modal-body">
                      <button type="button" class="tombol-modal" data-bs-dismiss="modal" aria-label="Close">
                        <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="Group 16">
                            <path id="Line 4" d="M8.2135 7.01685L37 38.0612" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                            <path id="Line 5" d="M35.7865 7L6.99996 38.0443" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                          </g>
                        </svg>
                      </button>
                      <div class="mx-md-5 mx-2 mt-md-5 mt-1">
                        <h1 class="judul-modal">
                          Pasukan<br />
                          Hantu
                        </h1>
                        <p class="isi-modal">
                          Dalam sejarah, sejauh ini senjata populer yang dipakai oleh pasukan Indonesia ketika melawan pasukan Belanda adalah bambu runcing. Romantisme terhadap bambu runcing sangat kuat sehingga melupakan senjata lain yang tidak
                          kalah menarik untuk dibahas. Tepatnya di Pulau Kalimantan. Pulau terluas di Indonesia ini menyimpan kekayaan yang sampai sekarang masih dilestarikan oleh Suku Dayak. Pada masa Belanda, Suku Dayak melakukan perlawanan
                          dengan senjata khasnya, sehingga disebut sebagai pasukan hantu. Kisah senjata mematikan dan pasukan hantu di Suku Dayak inilah yang menarik untuk ditelisik lebih jauh. Berikut adalah ulasan lengkapnya.
                          <img src="images/modal-hantu.jpg" alt="modal-hantu.jpg" class="modal-img my-2" />
                          Pada masa penjajahan, pasukan Belanda sangat superior ketimbang pasukan tanah air, khususnya Suku Dayak. Hal ini karena Belanda mempunyai senjata yang memadai untuk melakukan peperangan dan intimidasi. Namun, berbeda
                          ceritanya ketika Belanda masuk ke pedalaman Kalimantan. Di sana terdapat Suku Dayak yang jauh lebih ganas ketimbang pasukan Belanda. Pasukan Dayak Kalimantan memiliki senjata ampuh yang sangat mematikan. Senjata ini
                          sampai sekarang melegenda dan menjadi salah satu senjata yang ditakuti oleh pasukan Belanda. Senjata yang melegenda dan bisa memukul mundur pasukan Belanda tersebut adalah sumpit atau yang juga disebut sebagai damek.
                          Suku Dayak mempunyai senjata yang dikenal sebagai sumpit sebagai alat untuk berburu. Sumpit itu bukan sumpit biasa. Sumpit yang digunakan oleh pasukan Dayak sebagai senjata adalah sumpit beracun. Pasukan Dayak akan
                          mengolesi mata anak sumpit dengan getah pohon ipuh atau pohon iren yang beracun. Sumpit terbuat dari pohon kayu yang memiliki bentuk bulat dengan panjang yang mencapai 2 meter. Diameter batangnya 2 cm, dan diameter
                          lubang 1 cm. Sedangkan peluru sumpit (yang diolesi racun) terbuat dari bambu atau sejenis pohon palm tua. Senjata sumpit beracun milik Suku Dayak tidak hanya mematikan dengan racun. Akan tetapi juga membuat orang yang
                          terkena menjadi kejang-kejang dengan cara yang mengerikan. Orang yang terkena anak sumpit biasanya akan tewas dalam hitungan menit. Mereka akan kejang-kejang sambil mengeluarkan kotoran atau air kencing sebelum kemudian
                          tewas. Biasanya anak sumpit ini akan diarahkan ke leher target. Dengan begitu maka lawan akan tewas dengan cepat dan sadis. Pasukan yang disebut sebagai pasukan hantu di sini adalah Suku Dayak. Ada dua alasan mengapa
                          pasukan Suku Dayak ini sangat menakutkan dan mematikan sehingga disebut sebagai pasukan hantu. Pertama, Suku Dayak memiliki pemahaman tentang hutan yang sangat baik. Mereka adalah penduduk asli Kalimantan, sehingga
                          pasukan Dayak sangat lihai dalam menguasai medan peperangan. Kedua, pasukan Suku Dayak tentu saja memiliki senjata yang mematikan yaitu sumpit. Berkat kesenyapan dan kemampuan Suku Dayak dalam mematikan lawan, maka
                          pasukan tersebut cukup pantas jika dinamakan pasukan hantu. Berkat keganasan dan kengerian senjata yang dimiliki oleh Suku Dayak, maka masyarakat pedalaman Kalimantan bisa hidup dengan nyaman tanpa intervensi dari orang
                          asing. Kemampuan Suku Dayak dalam menyerang musuh dapat membuat pasukan Belanda tidak menyerang pedalaman Kalimantan. Mereka hanya ada untuk menguasai kota-kota besar.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Modal -->
              <div class="modal fade" id="bujang" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                  <div class="modal-content">
                    <div class="modal-body">
                      <button type="button" class="tombol-modal" data-bs-dismiss="modal" aria-label="Close">
                        <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="Group 16">
                            <path id="Line 4" d="M8.2135 7.01685L37 38.0612" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                            <path id="Line 5" d="M35.7865 7L6.99996 38.0443" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                          </g>
                        </svg>
                      </button>
                      <div class="mx-md-5 mx-2 mt-md-5 mt-1">
                        <h1 class="judul-modal">
                          Kisah Bujang<br />
                          Beji
                        </h1>
                        <p class="isi-modal">
                          Dahulu, hiduplah dua orang pemimpin yang bernama Bujang Beji dan Tumenggung Marubai. Kedua orang ini mempunya sif at yang sangat bertolak belakang. Tumenggung Marubai adalah orang yang baik hati dan tidak sombong.
                          Sementara itu, Bujang Beji adalah orang yang sakti, tetapi serakah dan sombong. Keduanya mempunyai mata pencaharian sebagai pencari ikan dan mempunyai wilayah sendiri-sendiri. Tumenggung Marubai dan pengikutnya mencari
                          ikan di Sungai Simpang Melawi, sedangkan Bujang beji di Sungal Simpang Kapuas. Dongeng Rakyat Kalimantan Barat Kisah Bujang Beji Wilayah Sungai Simpang Melawi mempunyai banyak sekali jenis ikan, lebih banyak daripada
                          ikan-ikan di Sungal Simpang Kapuas. ltulah sebabnya, basil tangkapan Tumenggung Marubai selalu lebih banyak daripada Bujang Beji. Tumenggung Melawi menggunakan bubu atau sejenis perangkap besar untuk menangkap ikan.
                          Setelah terkumpul dalam perangkap, ia hanya memilih ikan-ikan yang besar, sementara ikan-ikan kecil dilepaskan kembali sehingga ikan-ikan di Sungal Simpang Melawi selalu berkembang biak dan tidak pernah habis.

                          <img src="images/modal-bujang1.jpg" alt="modal-bujang1.jpg" class="modal-img my-2" />
                          Melihat hasil tangkapan Tumenggung Marubai, Bujang Beji merasa iri. la pun mencari cara mengalahkan Tumenggung Melawi. Lalu, ia menempuh cara yang kurang baik. la mulai menangkap ikan dengan cara menuba, yaitu meracun
                          ikan-ikan tersebut dengan tuba, yaitu sejenis racun ikan dari akar tumbuh-tumbuhan hutan yang sangat memabukkan. Pada awalnya, ia mendapatkan ikan yang sangat banyak. Lebih banyak dari hasil tangkapan Tumenggung Marubai.
                          Namun, karena cara yang digunakan adalah membunuh ikan-ikan dengan racun, lama-kelamaan ikan-ikan di sungai Simpang Kapuas menjadi sangat berkurang. Sementara itu, Tumenggung Marubai tetap mendapatkan banyak hasil
                          tangkapan. Ini membuat Bujang Beji menjadi semakin iri. “lni tidak bisa dibiarkan!” pikir Bujang Beji, “Harus ada cara supaya Tumenggung Marubai tidak mendapatkan banyak ikan.” Kemudian, Bujang Beji mulai berpikir keras.
                          la menemukan cara yang menurutnya terbaik. “Aku harus menutup aliran Sungai Melawi dengan sebuah batu besar di hulu sungai, dengan demikian ikan-ikan akan menetap di sana,” pikir Bujang Beji.
                          <br />

                          Bujang Beji bermaksud menggunakan puncak Bukit Batu di Nanga Silat, Kapuas Hulu untuk menyumbat Sungai Melawi. Dengan kesaktiannya, ia memotong puncak Bukit Batu tersebut dan membawanya menggunakan tujuh lembar daun
                          ilalang. Ketika sedang membawa bukit batu tersebut, tiba-tiba terdengar suara gadis-gadis sedang menertawakannya. Mereka adalah dewi-dewi di negeri khayangan. Ketika sampai di persimpangan antara Kapuas dan Malawi,
                          Bujang Beji melongok ke atas untuk melihat siapa yang menertawakannya. Tanpa sengaja, kakinya menginjak duri beracun hingga la melompat dan menjerit kesakitan. Akibatnya, tujuh lembar daun ilalang yang dipakainya
                          terputus. Puncak bukit batu tersebut pun terjatuh di sebuah aliran sungai yang disebut dengan jetak.
                          <img src="images/modal-bujang2.jpg" alt="modal-bujang2.jpg" class="modal-img my-2" />
                          Bujang Beji sangat marah kepada dewi-dewi khayangan yang menertawakannya. “Aku akan membalas kalian!” teriaknya sambil menghentakkan kakinya yang tertusuk duri beracun di salah satu bukit di dekatnya. Kemudian, Bujang
                          Beji berusaha mengangkat Bukit Batu yang sudah terendam di jetak dengan cara mencongkelnya menggunakan sebuah bukit memanjang. Namun, karena bukit batu tersebut sudah melekat di jetak, usahanya tidak berhasil. Bukit
                          memanjang itu pun patah. Patahannya kini dinamakan Bukit Liut. Dengan demikian, gagallah usaha Bujang Beji menutup Sungai Melawi. Semua karena dewi-dewi khayangan. Aku akan membalas dendam,” kata Bujang Benji. Bujang
                          Benji merencanakan untuk menggapai negeri khayangan dengan menggunakan pohon kumpang mambu, yaitu sejenis pohon kayu raksasa yang ujungnya menjulang ke langit. la mulai menanam pohon kumpang mambu. Dalam beberapa hari
                          saja pohon tersebut sudah tumbuh tinggi sekali, sampai puncaknya tidak terlihat mata. Sebelum memanjat kumpang mambu, Bujang Beji melakukan ritual adat, yaitu memberi sesaji kepada roh-roh halus dan binatang-binatang di
                          sekitarnya agar tidak mengganggu usahanya untuk mencapai negeri khayangan. Namun, ada dua jenis hewan yang lupa diberi sesaji oleh Bujang Beji, mereka adalah kelompok rayap dan beruang. Rayap dan Beruang merasa marah,
                          karena tidak diberi sesaji. Mereka pun berunding untuk menggagalkan usaha Bujang Beji. “Kita gerogoti saja pohon kumpang mambu itu hingga terputus!” usul beruang. Kelompok Rayap pun setuju. Ketika Bujang Beji mulai
                          memanjat pohon kumpang mambu, segerombolan rayap dan beruang datang menyerbu dan menggerogoti pohon tersebut di bagian bawah hingga pohon tersebut terputus. Pada saat itu, Bujang Beji sudah hampir mencapai negeri
                          khayangan. la pun terhempas jatuh ke tanah dan tewas seketika. Dengan demikian, usaha Bujang Beji mencelakai dewi-dewi khayangan pun gagal. Tumenggung Marubai pun terhindar dari niat jahat Bujang Beji. Sementara itu,
                          puncak Bukit Nanga Silat yang terlepas dari pukulan Bujang Beji menjelma menjadi Bukit Kelam. Kini Bukit Kelam menjadi salah satu objek wisata di daerah Sintang, Kalimantan Barat, dan menjadi kawasan hutan wisata dengan
                          pemandangan yang sangat indah.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal fade" id="nusa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                  <div class="modal-content">
                    <div class="modal-body">
                      <button type="button" class="tombol-modal" data-bs-dismiss="modal" aria-label="Close">
                        <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="Group 16">
                            <path id="Line 4" d="M8.2135 7.01685L37 38.0612" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                            <path id="Line 5" d="M35.7865 7L6.99996 38.0443" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                          </g>
                        </svg>
                      </button>
                      <div class="mx-md-5 mx-2 mt-md-5 mt-1">
                        <h1 class="judul-modal">
                          Legenda Pulau<br />
                          Nusa
                        </h1>
                        <p class="isi-modal">
                          Asal-usul Pulau Nusa Alkisah, dahulu kala ada seseorang bernama Nusa yang tinggal di sebuah desa, di tepi Sungai Kahayan. Di desa itu, Nusa hidup bersama istri dan adik iparnya. Nusa dan adik iparnya bekerja bercocok
                          tanam di sebuah ladang kecil di dekat rumahnya. Mereka bekerja keras hingga hasil panennya pun melimpah. Namun, suatu hari desa tempat tinggal Nusa dan keluarganya dilanda kekeringan.
                          <img src="images/modal-nusa.jpg" alt="modal-nusa.jpg" class="modal-img my-2" />
                          Akhirnya, Nusa dan adik iparnya pergi berburu di Sungai Ruhan, sebuah sungai kecil di aliran Sungai Kahayan. Di perjalanan, mereka terhalang pohon yang tumbang ke arah sungai. Mereka pun menepi dan mencoba menebang pohon
                          itu. Karena hari semakin sore, akhirnya mereka membagi tugas, adik ipar Nusa meneruskan menebang pohon, sementara Nusa masuk ke hutan untuk berburu. Dalam hutan, Nusa menemukan sebuah telur yang besar kemudian dibawanya
                          telur raksasa itu pulang ke rumah. Istri Nusa sempat khawatir karena telur yang dibawa Nusa sangat besar, apalagi telur itu tidak diketahui berasal dari hewan apa. Menurutnya, mereka sebaiknya tidak memakan telur itu.
                          Tapi Nusa berpendapat lain dan tetap ingin memakan telur raksasa itu. Nusa pun merebus telur itu dan memakannya sampai habis. Namun suatu hal terjadi, tubuh Nusa dipenuhi bercak merah yang terasa sakit dan gatal. Saat
                          digaruk, bercak itu berubah menjadi sisik. Tubuh Nusa membesar dan terasa panas. Ia meminta dimasukkan ke dalam sungai. Dengan bantuan warga sekitar, adik ipar Nusa membawa Nusa ke Sungai Kahayan yang sedang mengering.
                          Di dalam air, tubuh Nusa berubah menjadi Naga yang besar. Nusa kemudian berpesan pada istrinya untuk mengajak adiknya dan warga desa untuk mengungsi, karena malam itu akan turun hujan badai. Begitu lebatnya hujan badai
                          di malam harinya, sampai tubuh Nusa yang sudah menjadi naga besar terbawa arus sungai, hingga akhirnya terdampar dekat muara sungai. Kedatangan Nusa membuat ikan-ikan di muara menjadi cemas karena mereka menjadi mangsa.
                          Hingga suatu hari, ikan jelawat dan ikan saluang mencari cara untuk menyelamatkan para ikan agar tak dimangsa Nusa si naga. Para ikan pun menjalankan rencana untuk mengusir Nusa. Salah seekor ikan saluang memberi tahu
                          Nusa bahwa ada naga lain yang menantangnya, padahal itu hanya akal-akalan para ikan. Keesokan harinya, Nusa bersiap menunggu naga yang menantangnya. Tapi anehnya, hari itu tidak ada ikan-ikan sungai yang lewat. Karena
                          naga yang ditunggu Nusa tidak kunjung tiba, ia tertidur. Ikan saluang yang sudah mengamati dari kejauhan pun menghampirinya dan membangunkan Nusa, ia mengatakan bahwa musuhnya sudah datang. Nusa pun panik dan langsung
                          mencari di mana musuhnya, saat melihat ekor, ia langsung menggigitnya. Tapi ternyata Nusa menggigit ekornya sendiri sampai putus! Melihat hal itu, ikan saluang segera memberi tahu ribuan ikan di sungai itu untuk
                          menyerang bagian ekor naga Nusa yang terluka di tubuhnya. Naga Nusa pun berusaha kabur dari kejaran ribuan ikan itu hingga kelelahan dan akhirnya ia mati. Para ikan memakan naga itu sampai tinggal kerangkanya. Kerangka
                          naga Nusa lama-kelamaan ditumbuhi semak belukar dan menjadi sebuah pulau. Pulau itu akhirnya dikenal dengan nama Pulau Nusa.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div class="upacara" id="makanan">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6 d-flex justify-content-center align-content-center">
                    <img class="upacara1-img" src="images/makanan.png" alt="makanan" style="margin: auto" />
                  </div>
                  <div class="col-lg-6">
                    <div class="upacara1-tulisan">
                      <div class="rectangle5 mt-5 mb-4 d-flex align-content-center justify-content-center">
                        <p class="upacara-judul">Food</p>
                      </div>
                      <h1 class="upacara-subjudul mb-3">
                        Special food<br />
                        Dayak Culture
                      </h1>
                      <p class="upacara-isi">The following is an attractive and unique Special Food Food Culture</p>

                      <br />
                      <div class="makanan row row-cols-1 row-cols-md-2 g-4">
                        <div class="col">
                          <div class="card shadow h-100 w-100">
                            <img src="images/bubur.jpg" class="card-img-top" alt="bubur" />
                            <div class="card-body">
                              <h5 class="card-title">Bubur Pedas</h5>
                              <p class="card-text">
                                This type of porridge comes from the Malay community in Sambas, West Kalimantan, and later adopted as a meal by the Malay community in Sarawak.
                                <button type="button" class="text-danger" data-bs-toggle="modal" data-bs-target="#bubur"><span>Read More</span></button>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="card shadow h-100 w-100">
                            <img src="images/tempoyak.jpg" class="card-img-top" alt="tempoyak" />
                            <div class="card-body">
                              <h5 class="card-title">Tempoyak</h5>
                              <p class="card-text">
                                Tempoyak is a typical Indonesian dish that is a favorite for culinary lovers who like unique and brave tastes.This dish is made from ripe durian meat   fermentation, giving a strong aroma and
                                distinctive characteristics. <button type="button" class="text-danger" data-bs-toggle="modal" data-bs-target="#tempoyak1"><span>Read More</span></button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Modal -->
              <div class="modal fade" id="bubur" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                  <div class="modal-content">
                    <div class="modal-body">
                      <button type="button" class="tombol-modal" data-bs-dismiss="modal" aria-label="Close">
                        <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="Group 16">
                            <path id="Line 4" d="M8.2135 7.01685L37 38.0612" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                            <path id="Line 5" d="M35.7865 7L6.99996 38.0443" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                          </g>
                        </svg>
                      </button>
                      <div class="mx-md-5 mx-2 mt-md-5 mt-1">
                        <h1 class="judul-modal">Bubur Pedas</h1>
                        <p class="isi-modal">
                          <img src="images/bubur.jpg" alt="" class="modal-img my-2" />
                          In West Kalimantan, spicy porridge is usually made of rice porridge mixed with anchovies, beans, leeks, and spices.This type of porridge comes from the Malay community in Sambas, West Kalimantan, and
                          Then it was adopted as a dish by the Malay community in Sarawak.Spicy porridge is generally served with sauce and soy sauce to add flavor, often added lime juice.At Sambas, this dish
                          become popular among the people.In Pontianak, spicy porridge is usually sold in a cart.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Modal -->
              <div class="modal fade" id="tempoyak1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                  <div class="modal-content">
                    <div class="modal-body">
                      <button type="button" class="tombol-modal" data-bs-dismiss="modal" aria-label="Close">
                        <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="Group 16">
                            <path id="Line 4" d="M8.2135 7.01685L37 38.0612" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                            <path id="Line 5" d="M35.7865 7L6.99996 38.0443" stroke="#920D0D" stroke-width="13" stroke-linecap="round" />
                          </g>
                        </svg>
                      </button>
                      <div class="mx-md-5 mx-2 mt-md-5 mt-1">
                        <h1 class="judul-modal">Tempoyak</h1>
                        <p class="isi-modal">
                          <img src="images/modal-tempoyak.jpg" alt="tempoyak" class="modal-img my-2" />
                          Tempoyak is a typical Indonesian dish that is a favorite for culinary lovers who like unique and brave tastes.This dish is made from ripe durian meat fermentation, giving a strong aroma and
                          distinctive characteristics.After the durian meat is cooked, mixed with salt, and the fermentation process is carried out for several days or even weeks.This gives a very special taste.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="rumah">
              <div class="container">
                <div class="bg-rumah d-flex flex-column align-content-center justify-content-center">
                  <div class="d-flex flex-column mx-auto konten-rumah">
                    <div class="my-lg-4 my-3 rectangle7 d-flex mx-auto align-content-center justify-content-center">
                      <p class="rumah-judul">Rumah adat</p>
                    </div>

                    <h1 class="judul-rumah">Traditional House Betang Dayak Culture</h1>
                    <p class="isi-rumah">
                    Betang House is a traditional house of Kalimantan which is found in various corners of Kalimantan and is inhabited by the Dayak community, especially in the upstream river area which is usually the center of Dayak Culture settlements.In West Kalimantan,
                      Betang houses are usually called long houses, houses of Radakng, or Panjai house.
                    </p>
                  </div>
                  <div class="d-flex mx-auto my-3">
                    <div id="rumah1">
                      <img class="rumah-1" src="images/rumah-adat1.jpg" alt="rumah" />
                    </div>
                    <div id="rumah2">
                      <img class="rumah-2" src="images/rumah-adat2.jpeg" alt="rumah" />
                    </div>
                    <div id="rumah3">
                      <img class="rumah-3" src="images/rumah-adat3.jpeg" alt="rumah" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="upacara" id="senjata">
              <div class="container">
                <div id="parent" class="row">
                  <div id="a" class="col-lg-6">
                    <div class="upacara1-tulisan">
                      <div class="rectangle5-manajah mt-5 mb-4 d-flex align-content-center justify-content-center">
                        <p class="upacara-judul">Senjata</p>
                      </div>
                      <h1 class="upacara-subjudul mb-3">
                        Senjata Mandau<br />
                        Dayak Culture
                      </h1>
                      <p class="upacara-isi">
                        Mandau is a sharp weapon of a type of sword originating from Dayak culture in Kalimantan.Mandau is included in one of Indonesia's traditional weapons, whose use began in the 17-18th century.
                        The past European explorers who carried out expeditions and research to the island of Borneo called it Dayak Standak Swords of the Dayak Knight Sword of the Headhunters)
                      </p>
                    </div>
                  </div>
                  <div id="b" class="col-lg-6 d-flex justify-content-center align-content-center">
                    <img class="upacara1-img" src="images/senjata.png" alt="Senjata Mandau" />
                  </div>
                </div>
              </div>
            </div>

            <footer class="">
              <div class="container mx-auto row row-cols-1 row-cols-sm-2 row-cols-md-3 py-5 mt-5 border-top">
                <div class="col mb-3">
                  <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
                    <div class="Qdayak d-block">
                      <span style="color: #f4f4f4; font-size: 32px; font-family: Poppins; font-weight: 700">QD</span><span style="color: black; font-size: 32px; font-family: Poppins; font-weight: 700">ayak</span
                      ><span style="color: #ffffff; font-size: 32px; font-family: Poppins; font-weight: 700">.</span>
                    </div>
                  </a>
                  <!-- <p class="text-muted">© 2022</p> -->
                </div>

                <div class="col mb-3 text-white">
                  <h5 class="text-start nav-item mb-2">Qdayak</h5>
                  <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#home" class="nav-link p-0 text-start text-white">Home</a></li>
                    <li class="nav-item mb-2"><a href="#profil" class="nav-link p-0 text-start text-white">Profil</a></li>
                    <li class="nav-item mb-2"><a href="#adat" class="nav-link p-0 text-start text-white">Adat Istiadat</a></li>
                    <li class="nav-item mb-2"><a href="#legenda" class="nav-link p-0 text-start text-white">Legend</a></li>
                    <li class="nav-item mb-2"><a href="#makanan" class="nav-link p-0 text-start text-white">Food</a></li>
                    <li class="nav-item mb-2"><a href="#rumah" class="nav-link p-0 text-start text-white">House</a></li>
                    <li class="nav-item mb-2"><a href="#senjata" class="nav-link p-0 text-start text-white">Weapon</a></li>
                  </ul>
                </div>

                <div class="col mb-3 text-white">
                  <h5 class="text-start nav-item mb-2 ms-md-5">Quick Content</h5>
                  <ul class="nav flex-column">
                    <li class="nav-item mb-2">
                      <button type="button" class="nav-link p-0 text-start text-white" data-bs-toggle="modal" data-bs-target="#tiwah"><span> Tiwah Ceremony</span></button>
                    </li>
                    <li class="nav-item mb-2">
                      <button type="button" class="nav-link p-0 text-start text-white" data-bs-toggle="modal" data-bs-target="#manajah"><span> Manajah Anatang Ceremony</span></button>
                    </li>
                    <li class="nav-item mb-2">
                      <button type="button" class="nav-link p-0 text-start text-white" data-bs-toggle="modal" data-bs-target="#tariu"><span> tariu Ceremony</span></button>
                    </li>
                    <li class="nav-item mb-2">
                      <button type="button" class="nav-link p-0 text-start text-white" data-bs-toggle="modal" data-bs-target="#bujang"><span>Bujang beji</span></button>
                    </li>
                    <li class="nav-item mb-2">
                      <button type="button" class="nav-link p-0 text-start text-white" data-bs-toggle="modal" data-bs-target="#landak"><span>Landak River</span></button>
                    </li>
                    <li class="nav-item mb-2">
                      <button type="button" class="nav-link p-0 text-start text-white" data-bs-toggle="modal" data-bs-target="#bujang"><span>Bujang beji</span></button>
                    </li>
                    <li class="nav-item mb-2">
                      <button type="button" class="nav-link p-0 text-start text-white" data-bs-toggle="modal" data-bs-target="#hantu"><span>Ghost Army</span></button>
                    </li>
                    <li class="nav-item mb-2">
                      <button type="button" class="nav-link p-0 text-start text-white" data-bs-toggle="modal" data-bs-target="#nusa"><span>Pulau Nusa</span></button>
                    </li>
                    <li class="nav-item mb-2">
                      <button type="button" class="nav-link p-0 text-start text-white" data-bs-toggle="modal" data-bs-target="#bubur"><span>Bubur pedas</span></button>
                    </li>
                    <li class="nav-item mb-2">
                      <button type="button" class="nav-link p-0 text-start text-white" data-bs-toggle="modal" data-bs-target="#tempoyak1"><span>Tempoyak</span></button>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
            <script src="owlcarousel/owl.carousel.min.js"></script>
            <script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E=" crossorigin="anonymous"></script>
            <script defer src="	https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.2/owl.carousel.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
            <script src="script.js"></script>
          </body>
    `)
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

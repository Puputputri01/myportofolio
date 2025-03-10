// navigation  menu js
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
        .querySelector(".custom_menu-btn")
        .classList.toggle("menu_btn-style");

}

// display current year on footer
function getCurrentYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getCurrentYear();

// carousel indicator style
var liOne = $(".slider_section .carousel-indicators li.li_one");
var litwo = $(".slider_section .carousel-indicators li.li_two")
var ulAfter = $(".slider_section .carousel-indicators .ol_design")

$('#carouselExampleIndicators').on('slid.bs.carousel', function (event) {
    if (liOne.hasClass("active")) {
        // ulAfter.css("left", "calc(100% + ' + 35+ 'px)")
        ulAfter.css({
            'left': 'calc(0% + ' + 35 + 'px)'
        })

    } else if (litwo.hasClass("active")) {
        // ulAfter.css("left", "calc(100% - ' + 35+ 'px)")
        ulAfter.css({
            'left': 'calc(100% - ' + 45 + 'px)'
        })
    }
});

  const musicButton = document.getElementById("floating-music");
  const musicIcon = document.getElementById("music-icon");
  const audio = document.getElementById("audio-player");

  let isPlaying = false;

  musicButton.addEventListener("click", function () {
    if (isPlaying) {
      audio.pause();
      musicIcon.classList.remove("fa-pause");
      musicIcon.classList.add("fa-play");
    } else {
      audio.play();
      musicIcon.classList.remove("fa-play");
      musicIcon.classList.add("fa-pause");
    }
    isPlaying = !isPlaying;
  });
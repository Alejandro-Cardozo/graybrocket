function scrollFunction() {
  window.innerWidth < 991
    ? ((document.getElementById("header").style.fontSize = "18px"),
      (document.getElementById("logo").style.width = "auto"),
      (document.getElementById("logo").style.height = "50px"),
      (document.getElementById("header").style.background =
        "rgba(106, 176, 76, 0.95)"))
    : document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
    ? ((document.getElementById("header").style.fontSize = "18px"),
      (document.getElementById("logo").style.width = "auto"),
      (document.getElementById("logo").style.height = "50px"),
      (document.getElementById("header").style.background =
        "rgba(106, 176, 76, 0.95)"))
    : ((document.getElementById("header").style.fontSize = "25px"),
      (document.getElementById("logo").style.width = "auto"),
      (document.getElementById("logo").style.height = "90px"),
      (document.getElementById("header").style.background =
        "rgba(106, 176, 76, 0)"));
}
(window.onscroll = function() {
  scrollFunction();
}),
  document.querySelectorAll('a[href^="#"]').forEach(e => {
    e.addEventListener("click", function(e) {
      e.preventDefault(),
        document
          .querySelector(this.getAttribute("href"))
          .scrollIntoView({ behavior: "smooth" });
    });
  });

$(".parallax-window").parallax({ imageSrc: "/img/test.JPG" });

$(".navbar-nav>li>a").on("click", function() {
  $(".navbar-collapse").collapse("hide");
});

var galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true
});
var galleryTop = new Swiper(".gallery-top", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  thumbs: {
    swiper: galleryThumbs
  }
});

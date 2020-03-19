const btn = document.querySelector(".navbar__icon");
const nav = document.querySelector(".navbar__list");
const preloader = document.querySelector(".preloader");
const loaded = document.querySelector(".loaded");

let mainNavLinks = document.querySelectorAll(".navbar__list-link");
let mainSections = document.querySelectorAll("section");

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = link.hash;

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

btn.addEventListener("click", function() {
  btn.classList.toggle("close");
  nav.classList.toggle("toggle");
});

window.addEventListener("load", function() {
  const loader = document.querySelector(".loader");
  loader.className += " hidden"; // class "loader hidden"
});

// function parallax() {
//   let $header = document.querySelector(".header");

//   let yPos = window.pageYOffset / $header.dataset.speed;
//   yPos = -yPos;

//   let coords = "60%" + yPos + "px";

//   $header.style.backgroundPosition = coords;
// }

// window.addEventListener("scroll", function() {
//   parallax();
// });

$(function() {
  $(document).scroll(function() {
    var $nav = $(".navbar__top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

//Click Logo To Scroll To Top
$(".navbar__top-logo img, .arrow-top").on("click", () => {
  $("html,body").animate(
    {
      scrollTop: 0
    },
    500
  );
});

$("nav, .info, .box__buttons")
  .find("a, div")
  .click(function(e) {
    e.preventDefault();
    let section = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(section).offset().top - $("nav").height()
    });
  });

$(document).ready(function() {
  $(".slider").bxSlider();
});

$(".bxslider").bxSlider({
  auto: true,
  autoControls: false,
  stopAutoOnClick: true,
  pager: true,
  // slideWidth: 100,
  responsive: true,
  hideControlOnEnd: false
});

new WOW().init();

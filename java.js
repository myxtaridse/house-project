/*const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-33.33333333333333%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-66.6666666667%)';
      e.target.classList.add('active');
    }
  }
});
*/


const navMenu = document.getElementById('nav'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

navToggle.addEventListener('click', () => {
    navMenu.style.display = 'block';
    navToggle.style.display = 'none';
})
navClose.addEventListener('click', () => {
    navMenu.style.display = 'none';
    navToggle.style.display = 'block';
})

/*


const mediaQuery = window.matchMedia('(max-width: 800px)')
if (mediaQuery.matches) {
  document.getElementById('head-img-container').innerHTML = `<img src="./img/mobile-img-head.jpeg" alt="" class="head-img">`;

}*/
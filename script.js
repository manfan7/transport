document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    disable: "phone",
  });

  const nav = document.querySelector(".nav"),
    navLine = document.querySelector(".nav__line"),
    navItem = document.querySelectorAll(".nav__item");
  navLine.style.width = `${navItem[0].offsetWidth}px`;
  navItem.forEach((el) => {
    el.addEventListener("mouseover", (e) => {
      navLine.style.width = `${e.currentTarget.offsetWidth}px`;
      navLine.style.left = `${e.currentTarget.offsetLeft}px`;
    });
    el.addEventListener("mouseleave", () => {
      navLine.style.width = `${navItem[0].offsetWidth}px`;
      navLine.style.left = `0px`;
    });
  });

  let bgImages = [
    "./assets/morskie.jpg",
    "./assets/2.jpg",
    "./assets/3.jpg",
    "./assets/4.jpg",
    "./assets/5.jpg",
    "./assets/6.jpg",
  ];
  let bgIndex = 0;
  let bgInterval = 8000; //  секунд
  let bgElement = document.querySelector(".hero");
  function bgChange() {
    bgElement.style.backgroundImage = "url(" + bgImages[bgIndex] + ")";
    bgIndex++;
    if (bgIndex >= bgImages.length) {
      bgIndex = 0;
    }
  }
  bgChange();
  window.setInterval(bgChange, bgInterval);
  var number = document.querySelector(".number"),
    numberTop = number.getBoundingClientRect().top,
    start = +number.innerHTML,
    end = +number.dataset.max;

  window.addEventListener("scroll", function onScroll() {
    if (window.pageYOffset > numberTop - window.innerHeight / 2) {
      this.removeEventListener("scroll", onScroll);
      var interval = setInterval(function () {
        number.innerHTML = ++start;
        if (start == end) {
          clearInterval(interval);
        }
      }, 10);
    }
  });

  //-------------------------------//
});

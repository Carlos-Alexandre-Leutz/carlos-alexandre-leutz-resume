/*
 * Template Name: ElegantCV - Personal Resume / CV / Portfolio Template
 * Author: AtikFahad
 * Version: 1.0.0
 */

// main section typewriting text start

let i = 0;
let text = "Software Engineer";
let speed = 50;
document.querySelector(".special").innerHTML = "";

function typeWriter() {
  if (i < text.length) {
    document.querySelector(".special").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
// main section typewriting text start

// start on scroll animation
// variable progress bar
let progress = ["90%", "80%", "60%", "70%"];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.target.id == "skillset") {
      document
        .querySelector(".skillset-main")
        .classList.add(
          "animate__animated",
          "animate__fadeInLeft",
          "animate__slower"
        );
      document
        .querySelector(".elaboration")
        .classList.add(
          "animate__animated",
          "animate__fadeInRight",
          "animate_slower"
        );
      let progressBar = document.querySelectorAll(".progress-bar");
      progressBar.forEach((el, x) => {
        el.style.width = progress[x];
      });
    } else if (entry.isIntersecting && entry.target.id == "process-animate") {
      document
        .querySelector("#pn_1")
        .classList.add("animate__animated", "animate__lightSpeedInLeft");
      document
        .querySelector("#pn_2")
        .classList.add(
          "animate__animated",
          "animate__lightSpeedInLeft",
          "animate__slow"
        );
      document
        .querySelector("#pn_3")
        .classList.add(
          "animate__animated",
          "animate__lightSpeedInLeft",
          "animate__slower"
        );
      document
        .querySelector("#pn_4")
        .classList.add(
          "animate__animated",
          "animate__lightSpeedInLeft",
          "animate__delay-2s"
        );
      document
        .querySelector("#pn_5")
        .classList.add(
          "animate__animated",
          "animate__lightSpeedInLeft",
          "animate__slow",
          "animate__delay-2s"
        );
      document
        .querySelector("#pn_6")
        .classList.add(
          "animate__animated",
          "animate__lightSpeedInLeft",
          "animate__slower",
          "animate__delay-2s"
        );

      document
        .querySelector("#iv_1")
        .classList.add("animate__animated", "animate__fadeInUp");
      document
        .querySelector("#iv_2")
        .classList.add(
          "animate__animated",
          "animate__fadeInUp",
          "animate__slow"
        );
      document
        .querySelector("#iv_3")
        .classList.add(
          "animate__animated",
          "animate__fadeInUp",
          "animate__slower"
        );
      document
        .querySelector("#iv_4")
        .classList.add(
          "animate__animated",
          "animate__fadeInUp",
          "animate__delay-2s"
        );
      document
        .querySelector("#iv_5")
        .classList.add(
          "animate__animated",
          "animate__fadeInUp",
          "animate__slow",
          "animate__delay-2s"
        );
      document
        .querySelector("#iv_6")
        .classList.add(
          "animate__animated",
          "animate__fadeInUp",
          "animate__slower",
          "animate__delay-2s"
        );
    } else if (entry.isIntersecting && entry.target.id == "career") {
      document
        .querySelector("#c_1")
        .classList.add("animate__animated", "animate__slideInRight");
      document
        .querySelector("#c_2")
        .classList.add(
          "animate__animated",
          "animate__slideInLeft",
          "animate__slow"
        );
      document
        .querySelector("#c_3")
        .classList.add(
          "animate__animated",
          "animate__slideInRight",
          "animate__slower"
        );
      document
        .querySelector("#c_4")
        .classList.add(
          "animate__animated",
          "animate__slideInLeft",
          "animate__delay-2s"
        );
      document
        .querySelector("#c_5")
        .classList.add(
          "animate__animated",
          "animate__slideInRight",
          "animate__slow",
          "animate__delay-2s"
        );
      document
        .querySelector("#c_6")
        .classList.add(
          "animate__animated",
          "animate__slideInLeft",
          "animate__slower",
          "animate__delay-2s"
        );
    } else if (entry.isIntersecting && entry.target.id == "contact") {
      document
        .querySelector("#contact-t1")
        .classList.add("animate__animated", "animate__zoomIn", "animate__slow");
      document
        .querySelector("#contact-t2")
        .classList.add(
          "animate__animated",
          "animate__slideInLeft",
          "animate__slow"
        );
      document
        .querySelector("#contact-t3")
        .classList.add(
          "animate__animated",
          "animate__slideInRight",
          "animate__slow"
        );
    }
  });
});

observer.observe(document.querySelector("#skillset"));
observer.observe(document.querySelector("#process-animate"));
observer.observe(document.querySelector("#career"));
observer.observe(document.querySelector("#contact"));
// end on scroll animation

// custom cursor

function addEventForCursor(anchor) {
  anchor.addEventListener("mouseenter", (e) => {
    cursor.classList.add("cursorLink");
  });
  anchor.addEventListener("mouseleave", (e) => {
    cursor.classList.remove("cursorLink");
  });
}

const customCursor = document.querySelector(".cursor-wrapper");
const anchorLink = document.querySelectorAll("a");
const cursor = customCursor.querySelector(".cursor");

// a tag
for (anchor of anchorLink) {
  addEventForCursor(anchor);
}
// toggle button
// addEventForCursor(toggleMode);
addEventForCursor(document.querySelector(".cardList__btn.btn--left"));
addEventForCursor(document.querySelector(".cardList__btn.btn--right"));
addEventForCursor(document.querySelector(".submit.btn-primary"));
addEventForCursor(document.querySelector(".menu-icon.hover-target"));

const moveCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  customCursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  customCursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
};

window.addEventListener("mousemove", moveCursor);

// end custom cursor

// detect safari browser
let isSafariBrowser =
  /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
let mobileVersion = false;
if (window.matchMedia("(max-width: 767px)").matches) {
  mobileVersion = true;
}
if (isSafariBrowser || mobileVersion) {
  document.querySelector("#fallback").classList.remove("hide");
  document.querySelector(".app").style.display = "none";
  document.querySelector(".career").style.margin = "0px";
}

// navigation

var app = (function () {
  var body = undefined;
  var menu = undefined;
  var menuItems = undefined;
  var init = function init() {
    body = document.querySelector("body");
    menu = document.querySelector(".menu-icon");
    menuItems = document.querySelectorAll(".nav__list-item");
    applyListeners();
    applyListenersL();
  };
  var applyListeners = function applyListeners() {
    menu.addEventListener("click", function () {
      return toggleClass(body, "nav-active");
    });
  };
  var applyListenersL = function applyListeners() {
    for (menuItem of menuItems) {
      menuItem.addEventListener("click", function () {
        return toggleClass(body, "nav-active");
      });
    }
  };
  var toggleClass = function toggleClass(element, stringClass) {
    if (element.classList.contains(stringClass))
      element.classList.remove(stringClass);
    else element.classList.add(stringClass);
  };
  init();
})();

// image grid

class GridAnimation {
  constructor(el, row = 13, col = 9) {
    this.element = el;
    this.fragments = el.children;
    this.row = row;
    this.col = col;
    this.duration = 4000;
    this.delayDelta = 70;
    this.type = 13;

    this.randomIntBetween = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    this.element.style.setProperty("--row", this.row);
    this.element.style.setProperty("--col", this.col);
    this.element.addEventListener("click", this.trigger);
  }

  trigger = () => {
    if (this.fragments.length > 0) this.clear();
    this.element.classList.add("hide");
    this.animate();
  };

  clear = () => {
    while (this.element.hasChildNodes()) {
      this.element.removeChild(this.element.firstChild);
    }
  };

  animate = () => {
    if (this.type === null) return;
    const x = this.col - 1;
    const y = this.row - 1;
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        const fragment = document.createElement("div");
        fragment.className = "fragment";
        fragment.style.setProperty("--x", j);
        fragment.style.setProperty("--y", i);

        let delay = 0;
        switch (this.type) {
          case 0:
            delay = i * 2;
            break;
        }

        const isOdd = (i + j) % 2 === 0;
        fragment.style.setProperty(
          "--rotateX",
          `rotateX(${isOdd ? -180 : 0}deg)`
        );
        fragment.style.setProperty(
          "--rotateY",
          `rotateY(${isOdd ? 0 : -180}deg)`
        );
        fragment.style.setProperty("--delay", delay * this.delayDelta + "ms");
        fragment.style.setProperty("--duration", this.duration + "ms");
        this.element.appendChild(fragment);

        const timer = setTimeout(() => {
          fragment.style.willChange = "initial";
          fragment.style.transform = "initial";
          fragment.style.animation = "initial";
          fragment.style.backfaceVisibility = "initial";
          fragment.style.opacity = 1;
          clearTimeout(timer);
        }, this.duration + delay * this.delayDelta);
      }
    }
  };
}
let boxEl = document.querySelector(".wrapper .box");
const gridAnimation = new GridAnimation(boxEl);
gridAnimation.trigger();

// back to top button
let backToTop = document.querySelector("#button");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
}

backToTop.addEventListener("click", function (e) {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
let paraItem = document.querySelector("#intro .main-image");
new Parallax(paraItem);

// Select all slides
const slides = document.querySelectorAll(".slide"); // select all slides
const dotsContainer = document.querySelector(".dots-container"); // select dots container
const dots = document.querySelectorAll(".dot"); // select all dots
const prevSlide = document.querySelector(".btn-prev");// select prev slide button
const nextSlide = document.querySelector(".btn-next"); // select next slide button

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// init carousel, move to first slide
moveSlide(curSlide);
moveDot(curSlide);


//
// add event listener and navigation functionality
//
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  moveSlide(curSlide);
  moveDot(curSlide);
});


//
// add event listener and navigation functionality
//
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  moveSlide(curSlide);
  moveDot(curSlide);
});

//
// dots-container event handler
//
dotsContainer.addEventListener("click", function(event) {
  const currentDot = event.target;

  let curSlide = Array.from(currentDot.parentNode.children).indexOf(currentDot) + 1;

  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  moveSlide(curSlide);
  moveDot(curSlide);
});

function moveSlide(curSlide) {
  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`; // ${} is an example of a template literal expression. See https://css-tricks.com/template-literals/ and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals for details
  });
}

function moveDot(curSlide) {
  // set active dot
  dots.forEach((dot,indx) => {
    dots[indx].setAttribute("class", "dot");
  });
  dots[curSlide].setAttribute("class", "dot active");
}
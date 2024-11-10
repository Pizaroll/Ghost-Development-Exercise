document.addEventListener("DOMContentLoaded", function () {
    let splide = new Splide("#video-slider", {
      type: "loop",
      heightRatio: 0.8,
  
      arrows: false,
    }).mount();
  
    //attach events to custom buttons
    btnNext.addEventListener("click", (e) => {
      splide.go("+1");
    });
  
    btnPrev.addEventListener("click", (e) => {
      splide.go("-1");
    });
  });

  const carousel = document.getElementById("carousel");
  const images = carousel.querySelectorAll("img");
  let index = 0;

  document.getElementById("next").addEventListener("click", () => {
    if (index < images.length - 1) index++;
    else index = 0;
    updateCarousel();
  });

  document.getElementById("prev").addEventListener("click", () => {
    if (index > 0) index--;
    else index = images.length - 1;
    updateCarousel();
  });

  function updateCarousel() {
    const width = carousel.clientWidth;
    carousel.style.transform = `translateX(-${index * width}px)`;
  }

  window.addEventListener("resize", updateCarousel); // to handle resizing


  //selecting sidenavbar, Menu icon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function(){
  sidenav.style.right=0 
})

closenav.addEventListener("click",function(){
  sidenav.style.right="-50%"
})

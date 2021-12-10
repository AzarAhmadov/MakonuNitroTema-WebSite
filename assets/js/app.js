const navLink = document.querySelectorAll('.h-link');

for(let i = 0 ; i<navLink.length; i++){
  navLink[i].addEventListener('click', (e) => {
    document.querySelector(".h-link.current_page_item").classList.remove("current_page_item");
    navLink[i].classList.add("current_page_item");
  })
}

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
});


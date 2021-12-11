const navLink = document.querySelectorAll('.h-link');

navLink.forEach((item) => {
  item.addEventListener("click", (e) => {
    document.querySelector(".current_page_item").classList.remove("current_page_item");
    item.classList.add("current_page_item");  
  });
});

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
});


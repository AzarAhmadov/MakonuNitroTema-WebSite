const acardionItem = document.querySelectorAll('.acardion-item');
const acardionContent = document.querySelectorAll('.acardion-content');
const upICon = document.querySelectorAll('.fa-angle-up');

for(let i = 0; i<acardionItem.length && acardionContent.length && upICon.length; i++){
  acardionItem[i].addEventListener('click', () => {
    acardionItem[i].classList.toggle('active');
    acardionContent[i].classList.toggle('active');
    upICon[i].classList.toggle('active')
  });
};

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


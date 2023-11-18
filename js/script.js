// popup
let popup = document.querySelector('.popup'),
  closeBtn = popup.querySelector('#close'),
  dayCheck = popup.querySelector('#day-check');

function setCookie(name, value, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);
  document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
}

function cookieCheck(name) {
  let cookieArr = document.cookie.split(';');
  let visited = false;

  for (let cookie of cookieArr) {
    if (cookie.search(name) > -1) {
      visited = true;
      break;
    }
  }

  if (!visited) {
    popup.setAttribute('open', '');
  }
};
cookieCheck('ABC');

closeBtn.addEventListener('click', () => {
  popup.removeAttribute('open');
  if (dayCheck.checked) {
    setCookie('ABC', 'home', 1);
  } else {
    setCookie('ABC', 'home', -1);
  }
});

//탭을 눌렀을 때, skip_to_content에 포커스가 걸리면 화면에 나타난다
let skip_to_content = document.querySelector('#skip_to_content');
window.addEventListener('keydown', (e)=>{
  console.log(e.code)
  console.log(document.activeElement.id)
  // if(e.code == tab){
  //   if(document.activeElement.id == skip_to_content){
  //     skip_to_content.style.transform = translateY(0);
  //   }
  // }
})

// <!-- Initialize Swiper  -->
var swiper = new Swiper(".mySwiper1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 40,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    loop: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  },
});

//<!- Swiper  2  ->
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  slidesPerView: "auto",
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  },
});

var url = "http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1328170229"
$(document).ready(function () {
  $('.ftc_btn').click(function () {
    window.open(url, "bizCommPop", "width=750, height=700;"); return false;
  });
});
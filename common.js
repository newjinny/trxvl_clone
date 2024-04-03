// header
const header = document.getElementById('stickyHeader');
window.addEventListener('scroll', function () {
  // 스크롤 위치가 0보다 크면 배경색 변경, 아니면 투명으로 설정
  if (window.scrollY > 0) {
    header.style.backgroundColor = 'rgba(0 ,0, 0, 0.5)';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

//hamBtn
const hamBtn = document.querySelector('.ham');
const sideNav = document.getElementById('mySidenav');
const closeBtn = document.querySelector('.closeBtn');
let isBtnOpen = false;
function openNav() {
  sideNav.style.width = '80%';
  hamBtn.style.display = 'none';
  isBtnOpen = true;
}
function closeNav() {
  sideNav.style.width = '0';
  hamBtn.style.display = 'block';
  isBtnOpen = false;
}
hamBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  isBtnOpen ? closeNav() : openNav();
});
closeBtn.addEventListener('click', () => {
  closeNav();
});

document.addEventListener(
  'click',
  function (event) {
    const isClickInside = sideNav.contains(event.target);

    if (!isClickInside) {
      closeNav();
    }
  },
  true
);
//iconSwiper
let iconSwiper;
let slidesPerView =
  window.innerWidth <= 900
    ? 5
    : window.innerWidth > 900 && window.innerWidth <= 1200
    ? 7
    : 10;

function initIconSwiper() {
  if (window.innerWidth <= 1200) {
    // Swiper 초기화
    if (iconSwiper) iconSwiper.destroy();
    iconSwiper = new Swiper('.iconSwiper', {
      loop: true,
      slidesPerView,
      spaceBetween: 30,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });
  } else {
    if (iconSwiper) iconSwiper.destroy();
    iconSwiper = new Swiper('.iconSwiper', {
      slidesPerView,
      enable: false,
    });
  }
}
// 초기화 함수 호출
initIconSwiper();

// 화면 크기가 변경될 때 스와이퍼를 다시 초기화
window.addEventListener('resize', function () {
  initIconSwiper();
  slidesPerView =
    window.innerWidth <= 900
      ? 5
      : window.innerWidth > 900 && window.innerWidth <= 1200
      ? 7
      : 10;
});
//---------여기까지 iconSwiper-----------

//swiper
let swiper = new Swiper('.top-type', {
  slidesPerView: 1.7,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    900: {
      slidesPerView: 2.7,
    },
    1100: {
      slidesPerView: 3.7,
    },
  },
});
let offersSlide = new Swiper('.offersSlide', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    1100: {
      slidesPerView: 1.7,
    },
  },
});
let connectSlider = new Swiper('.connectSlider', {
  slidesPerView: 1.7,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    900: {
      slidesPerView: 2.7,
    },
    1100: {
      slidesPerView: 3.7,
    },
  },
});
// travel app btn
const mobileBtn = document.querySelector('.mobileBtn');
const emailBtn = document.querySelector('.emailBtn');
const inputDesc = document.querySelector('.inputDesc');
const submitInput = document.getElementById('submitInput');

const inputDescText = (type) => {
  return `Enter your ${type} to receive a text with a link to download the app.`;
};

emailBtn.addEventListener('click', () => {
  inputDesc.innerText = inputDescText('email address');
  emailBtn.classList.add('active');
  mobileBtn.classList.remove('active');
  submitInput.placeholder = 'email address';
});

mobileBtn.addEventListener('click', () => {
  inputDesc.innerText = inputDescText('phone number');
  mobileBtn.classList.add('active');
  emailBtn.classList.remove('active');
  submitInput.placeholder = '+91 Mobile number';
});

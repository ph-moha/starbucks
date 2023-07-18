
//검색 처리
//gsap 이용
//Swriper 이용

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused'); /* 검색아이콘 사라지게 할 예정 */
  searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused'); /* 검색아이콘 사라지게 할 예정 */
  searchInputEl.setAttribute('placeholder', '');
})

// 배젤 처리

const badgeEl = document.querySelector('header .badges') //header 안에 들어 있는 bades 를 찾아라
const upwardEl = document.querySelector('#to-top')

window.addEventListener('scroll', _.throttle(function () { //브라우저 창이 window.
  //console.log('scroll') // _.throttle(함수,시간)시간은 ms 밀리세컨드 300은 0.3초마다 실행. lodash cdn 에서 스크립 복사
  if (window.scrollY > 500) {
    //배지 숨기기
    //badgeEl.style.display= 'none' 요렇게 숨길수도 있지만 안 이뻐
    //gsap 에 to()  메서드를 이용
    gsap.to(badgeEl, .6, {      //gsap.to(요소, 지속시간, 옵션or {}객체데이터);
      opacity: 0,               //0은 0% 안보임, 하지만 객체는 남아있다.잔재가 있어. 클릭 됨
      display:'none'            //display는 안 보일 뿐만 아니라 요소를 없애서 해당 아이콘이 링크기능이 있을 경우
                                //클릭 자체도 안된다.
    }); 
    // 버튼 보이기
    gsap.to(upwardEl, .6, {
      x: 0
    })
  } else {
    //배지 보이기
    //badgeEl.style.display= 'block' 요렇게 보이게 하고, 블럭처리 하면 보인다.
    gsap.to(badgeEl, .6, {      
      opacity: 1, //1은 100%
      display: 'block'
    }); 
    // 버튼 숨기기
    gsap.to('#to-top', .5, {  //사실 gsap 은 이렇게 css에서 사용하는 값을 바로 적어줘도 잘 동작한다.
      x: 100                  // x 축으로 이동 결국 안보임
    })
  }
}, 300)) 


// fade in
// forEach 갯수만큼 반복한다.
// gsap.to(요소, 지속시간, 옵션or {}객체데이터);
const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function (fadeEl, index){   //index 기본값은 0
  gsap.to(fadeEl, 1, {      // fadeEl 이 1초 동안 아래사건이 발생 
    delay: (index + 1)*.7,  //0.7, 1.4, 2.1 ..초 뒤에 작동
    opacity: 1
  } )
})

//공지사항 new Swiper(선택자-인수, 옵션)
const swiper = new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
})

//배너 new Swiper(선택자-인수, 옵션) 대소문자 중요
const swiper1 = new Swiper('.promotion .swiper', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true,
  autoplay: {
    delay: 5000 // 시간 설정가능 5초
  },
  loop: true,
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소를 클릭해서 제어 할수 있는지 선택
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})

const swiper2 = new Swiper('.awards .swiper', {
  slidesPerView: 5, //한번에 보여줄 슬라이드 개수
  spaceBetween: 30, //슬라이드 사이 여백
  autoplay: {
    delay: 2000 // 시간 설정가능 .5초
  },
  loop: true,

  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion //!는 반대값 , 반대값을 반환하라는 뜻
  if (isHidePromotion) {
    // 숨김처리
    promotionEl.classList.add('hide')

  }else{
    // 열려라
    promotionEl.classList.remove('hide')
  }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay1, xsize, ysize) {
  //gsap (요소, 에니메이션 지속시간, {데이터})
  gsap.to(selector, random(1.5, 2.5), {
    y:ysize, //y축으로 20 만큼 움직인다. +아래, - 위로
    x:xsize,
    rotation:30,
    repeat:- 1, //-1은 무한을 뜻한다. 반복 무한 없으면 한번만 이동후 멈춤
    yoyo: true, //한번 재생한 에니메이션을 다시 뒤로 재생하는 값 yoyo
    ease: Power1.easeInOut, //구글에서 gsap easing 검색, 부드럽게
    delay: 1 //1초후 움직임 random() 함수를 써서 랜덤하게 바꿀수도 있음. random(0, delay1) 여기서 받은 delay1
  });
}

floatingObject('.floating1', 1, 15); //위의 클래스 실행
floatingObject('.floating2', .5, random(10, 50), random(10,30)); //
floatingObject('.floating3', 1.5, -20); //

// Scroll Magic 스크롤 매직 
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8, //뷰보트 제일 위는 0 제일 밑은 1. 즉 하단 80% 지점을 지나면 밑에 계속 실행
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());

})


// 올해 연도 만들기 요소, 즉 태그에 글 쓸때 textContent 사용
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear();




// 이게 딱 클릭 이벤트 기본. 클릭하면 펑션기능
// const toTopEl = document.querySelector('#to-top')
// toTopEl.addEventListener('click', function(){})
// 이 때 들어간 익명의 함수를 "이벤트 핸들러" 라고 한다.

const toTopEl = document.querySelector('#to-top')
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {    //   
    scrollTo: 0            //스크롤의 위치가 0 으로 간다. 얼마 동안? 위에서 지정한 0.7초 동안
  });
})
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


// 올해 연도 만들기 요소, 즉 태그에 글 쓸때 textContent 사용
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear();

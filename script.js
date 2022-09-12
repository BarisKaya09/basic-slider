const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 0;
let pageBtnTarget = null;

let slides = [
  document.querySelector('.slide-1'),
  document.querySelector('.slide-2'),
  document.querySelector('.slide-3'),
];

prevBtn.addEventListener('click', () => {
  counter--;

  if (counter == -1) counter = 2;
  fillPageBtn();
  showSlide();
});

nextBtn.addEventListener('click', () => {
  counter++;

  if (counter == 3) counter = 0;
  fillPageBtn();
  showSlide();
});

const pageBtns = document.querySelectorAll('.page-btn');

pageBtns.forEach(pageBtn => {
  pageBtn.addEventListener('click', e => {
    counter = e.target.getAttribute('key');

    for (let pageBtn of pageBtns) pageBtn.style.backgroundColor = '#6e6e6e';

    if (counter == e.target.getAttribute('key')) e.target.style.backgroundColor = '#16b7cc';

    showSlide();
  });
});

function showSlide() {
  for (let slide of slides) slide.classList.add('none');
  slides[counter].classList.remove('none');

  slides[counter].style.animation = 'slideAnim 0.5s';
}

function fillPageBtn() {
  for (let pageBtn of pageBtns) pageBtn.style.backgroundColor = '#6e6e6e';

  let currentPage = [...pageBtns].filter(item => item.getAttribute('key') == counter)[0];
  currentPage.style.backgroundColor = '#16b7cc';
}

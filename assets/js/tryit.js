let referenceHeight = document.querySelector('.landing__img').offsetHeight;
document.getElementsByTagName('body')[0].onscroll = function () {
	let scrollTop = document.querySelector('.newsearch__form').getBoundingClientRect().top

	if (scrollTop < 7) {
		document.querySelector('.searchbox__wrapper').classList.add('static');
	}

	if (document.getElementsByTagName('html')[0].scrollTop < referenceHeight + 50) {
		document.querySelector('.searchbox__wrapper').classList.remove('static');

	}
}




const slider = document.querySelector('items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  let isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  console.log(startX);
});

slider.addEventListener('mouseleave', () => {
  let isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  let isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; //stop the fn from running
  e.preventDefault();
  conts x = e.pageX - slider.offsetLeft;

  console.count(x, startX);
  const walk = (x - startX) * 4;
  slider.scrollLeft = scrollLeft - walk;
  // console.count(walk);
  // console.count(isDown);
  // console.log(startX);

});


//sticky nav
const nav = document.querySelector('.search__boxwrapper');
const topOfNav = nav.offsetTop;

function fixNav() {
  console.log(topOfNav);
}

window.addEventListener('scroll', fixNav);
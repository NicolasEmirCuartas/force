const limit_size_screen = window.matchMedia('screen and (max-width: 500px)');
const nav__responsive-ul = document.querySelector('.nav__responsive-ul');
const nav__responsive-button fas fa-bars = document.querySelector('.nav__responsive-button fas fa-bars');
alert("hola");
function validation(event) {
	if (event.matches) {
    nav__responsive-button fas fa-bars.addEventListener('click', hideShow);
  } else {
nav__responsive-button fas fa-bars.removeEventListener('click', hideShow);
}
}
validation(limit_size_screen);
unction hideShow() {
	if (nav__ul.classList.contains('is-active')) {
		nav__ul.classList.remove('is-active');
	} else {
		nav__ul.classList.add('is-active');
	}
}

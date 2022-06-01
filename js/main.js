let navbarElement = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
	let scrollTop = window.scrollY;
	console.log(scrollTop);
	if (scrollTop > 100) {
		navbarElement.classList.remove('hidden');
	} else if (scrollTop < 100) {
		navbarElement.classList.add('hidden');
	}
});

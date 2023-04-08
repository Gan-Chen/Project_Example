window.addEventListener('scroll', function() {
	var header = document.querySelector('header');
	if (window.scrollY > 100) {
		header.style.backgroundColor = '#333';
	} else {
		header.style.backgroundColor = '#f5f5f5';
	}
});
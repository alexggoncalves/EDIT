window.addEventListener('scroll', function() {
    
    if (window.pageYOffset >= 200) {
        document.querySelector('header').classList.add('nav-hidden');
    } else {
        document.querySelector('header').classList.remove('nav-hidden');
    }
});
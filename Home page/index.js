const icon = document.querySelector('.icon');
const navlinks = document.querySelector('.nav-links');
const navbuttons = document.querySelector('.nav-buttons');

icon.addEventListener('click', () => {
    icon.classList.remove('off');
    if (icon.classList.contains('active')) {
        navlinks.classList.remove('active');
        navlinks.classList.add('inactive');
        navbuttons.classList.remove('active');
        navbuttons.classList.add('inactive');
        icon.classList.remove('active');
        icon.classList.add('inactive');

    }
    else {
        icon.classList.add('active');
        icon.classList.remove('inactive');
        navlinks.classList.add('active');
        navlinks.classList.remove('inactive');
        navbuttons.classList.remove('inactive');
        navbuttons.classList.add('active');
    }
});
// Dark mode toggle function

// Get the checkbox element for dark mode toggle
const darkModeSwitch = document.getElementById('darkmode-switch');

// Add event listener to the checkbox to trigger the darkMode function
darkModeSwitch.addEventListener('change', darkMode);

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    // Change the Silicon logo image in the navigation bar
    var logo = document.getElementById('logo-text');
    logo.src = element.classList.contains('dark-mode') 
        ? "/images/dark/logo/silicon-text-dark.svg" 
        : "/images/light/logo/silicon-text-light.svg";

    // Change the AppStore and PlayStore logos in the buttons
    var appstore_logotype = document.getElementById('appstore');
    appstore_logotype.src = element.classList.contains('dark-mode') 
        ? "/images/dark/market/appstore-dark.svg" 
        : "/images/light/market/appstore-light.svg";

    var playstore_logotype = document.getElementById('playstore');
    playstore_logotype.src = element.classList.contains('dark-mode') 
        ? "/images/dark/market/googleplay-dark.svg" 
        : "/images/light/market/googleplay-light.svg";
}

// Change the background color of the navigation bar on scroll
document.addEventListener('scroll', function () {
    const header = document.querySelector('.sticky-header');
    if (window.scrollY > 50) {
        console.log('Scrolled more than 50px');
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
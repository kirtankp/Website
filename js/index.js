$('input[type="tel"]').each(function () {
    var iti = window.intlTelInput(this, {
        nationalMode: false,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
    });
    $(this).on('blur', function () {
        var fullNumber = iti.getNumber();
        var countryCode = iti.getSelectedCountryData().dialCode;
        if (fullNumber.startsWith("+" + countryCode + "+" + countryCode)) {
            fullNumber = fullNumber.replace("+" + countryCode + "+", "+");
        }
        $(this).val(fullNumber);
    });
});

window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 70) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const element = document.querySelector('.zoom-effect');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            element.style.animationName = 'zoomOut';
        } else {
            element.style.animationName = 'zoomIn';
        }
    });
}, { threshold: 0.25 });

observer.observe(element);
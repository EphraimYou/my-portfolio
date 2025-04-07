function toggleSkills() {
    let hiddenSkills = document.querySelectorAll('.hidden');
    let button = document.querySelector('.toggle-btn');
    let arrow = document.querySelector('.arrow');
    let isHidden = hiddenSkills[0].classList.contains('show');

    hiddenSkills.forEach(skill => {
        if (isHidden) {
            skill.classList.remove('show');
        } else {
            skill.classList.add('show');
        }
    });

    button.textContent = isHidden ? "Show More " : "Show Less ";
    button.appendChild(arrow);
    arrow.classList.toggle('rotate', !isHidden);
}



function openWhatsApp() {
    const phoneNumber = '+2001220127248';
    const message = 'Hi there! I came from your website 😊';
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, '_blank');
}

const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
const slider = document.querySelector('.img-slider');
const sliderWidth = slider.offsetWidth;
let index = 0;
const activePortfolio = () => {
    slider.style.transform = `translateX(calc( ${index * -100}% - ${index * 1}rem))`;
    const portfolioDetails = document.querySelectorAll('.portfolio-details');
    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if (index < 2) {
        index++;
        arrowLeft.classList.remove('disabled');
    } else {
        index = 3;
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    } else {
        index = 0;
        arrowLeft.classList.add('disabled');

    }
    activePortfolio();

});

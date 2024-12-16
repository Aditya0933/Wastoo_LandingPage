const toggler = document.getElementById('navbar-toggler');
const sideNav = document.getElementById('sideNav');
const closeBtn = document.getElementById('close-btn');

toggler.addEventListener('click', function () {
    sideNav.classList.toggle('open');
    console.log('Side nav toggled');
});

closeBtn.addEventListener('click', function () {
    sideNav.classList.remove('open');
    console.log('Side nav closed');
});

const expandableMenus = document.querySelectorAll('.expandable');

expandableMenus.forEach((menu) => {
    menu.addEventListener('click', function (e) {
        e.preventDefault();
        
        const dropdownContent = this.querySelector('.dropdown-content');

        const isOpen = dropdownContent.classList.contains('show');

        document.querySelectorAll('.dropdown-content').forEach((content) => {
            content.classList.remove('show');
        });

        if (!isOpen) {
            dropdownContent.classList.add('show');
        }
    });
});

const images = document.querySelectorAll(".col-lg-7 img");

function handleImageClick(event) {
    images.forEach((img) => {
        img.parentElement.style.flex = "0 0 20%";
        img.parentElement.style.maxWidth = "20%";
    });

    const clickedImage = event.currentTarget;
    clickedImage.parentElement.style.flex = "0 0 60%";
    clickedImage.parentElement.style.maxWidth = "60%";
}

images.forEach((img) => {
    img.addEventListener("click", handleImageClick);
});

const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideWidth = slider.firstElementChild.offsetWidth + 16;

nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: slideWidth, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -slideWidth, behavior: 'smooth' });
});

const sliderScrollContainer = document.getElementById("sliderScrollContainer");
const scrollLeftSlider = document.getElementById("scrollLeftSlider");
const scrollRightSlider = document.getElementById("scrollRightSlider");

scrollLeftSlider.addEventListener("click", () => {
    sliderScrollContainer.scrollBy({
        left: -300,
        behavior: "smooth",
    });
});

scrollRightSlider.addEventListener("click", () => {
    sliderScrollContainer.scrollBy({
        left: 300, 
        behavior: "smooth",
    });
});
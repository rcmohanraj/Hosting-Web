const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan .button');
const mobileNavBar = document.querySelector('.mobile-nav');
const toggleButton = document.querySelector('.toggle-button');


for(let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        // backdrop.style.display = 'block';
        // modal.style.display = 'block';
        backdrop.classList.add('open');
        modal.classList.add('open');
    });;
}

const closeBackdrop = function() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    backdrop.classList.remove('open');
    if (modal) {
        modal.classList.remove('open');
    }
}

backdrop.addEventListener('click', function() {
    mobileNavBar.classList.remove('open');
    closeBackdrop();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeBackdrop);
}

toggleButton.addEventListener('click', function() {
    // backdrop.style.display = 'block';
    // mobileNavBar.style.display = 'block';
    backdrop.classList.add('open');
    mobileNavBar.classList.add('open');
});

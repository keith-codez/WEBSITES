let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const dropdownIcon = document.querySelector(".dropdown-icon");
    const selectElement = document.querySelector(".vehicle-select");

    dropdownIcon.addEventListener("click", function () {
        // Toggle dropdown options visibility
        selectElement.focus();
    });

    // Change icon color when dropdown is active
    selectElement.addEventListener("focus", function () {
        dropdownIcon.style.color = "blue";
    });

    // Reset icon color when dropdown loses focus
    selectElement.addEventListener("blur", function () {
        dropdownIcon.style.color = "gray";
    });
});


document.querySelector('.View-Cars').addEventListener('click', function() {
    window.location.href = '#services';

});

document.querySelector('.Book-Now').addEventListener('click', function() {
    window.location.href = '#Form';

});

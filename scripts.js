document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const closeMobileMenuBtn = document.getElementById("closeMobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenuBtn && closeMobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener("click", function () {
            mobileMenu.style.width = "100%";
        });

        closeMobileMenuBtn.addEventListener("click", function () {
            mobileMenu.style.width = "0";
        });
    } else {
        console.error("One or more elements not found.");
    }
});

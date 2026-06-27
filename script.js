// ==========================================
// Navbar Scroll
// ==========================================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector("#navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ==========================================
// AOS
// ==========================================

AOS.init({

    duration:1000,

    // once:true,

    offset:120,

    easing:"ease-in-out"

});


//  scrool animation 
const backToTop = document.getElementById("backToTop");

// Show after scrolling one viewport height (approximately the second section)
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
    backToTop.classList.add("show");
} else {
    backToTop.classList.remove("show");
}
});
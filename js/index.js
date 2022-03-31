function intersection(el, gs) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            gs.forEach(({ tt, cls }) => {
                const t = entry.target.querySelector(tt);
                if (entry.isIntersecting) {
                    t.classList.add(cls);
                    return;
                }
                t.classList.remove(cls);
            })
        });
    });
    const tracker = document.querySelector(el);
    observer.observe(tracker);
}



intersection(".animated-bunnies", [{ tt: ".left-bunny", cls: "animated-left" }, { tt: ".right-bunny", cls: "animated-right" }]);
intersection(".walk-bunny-container", [{ tt: ".walking-bunny", cls: "animated-bunny" }]);



//
// ---Retro Button---
//
var buttons = document.querySelectorAll('.btn');

for (var i = 0; i < buttons.length; i++) {
    // Click
    buttons[i].addEventListener('mousedown', function() {
        this.classList.add('btn-active');
    });
    buttons[i].addEventListener('mouseup', function() {
        this.classList.remove('btn-active');
    });

    // Hover
    buttons[i].addEventListener('mouseleave', function() {
        this.classList.remove('btn-center', 'btn-right', 'btn-left', 'btn-active');
    });

    buttons[i].addEventListener("mousemove", function(e) {
        var leftOffset = this.getBoundingClientRect().left;
        var btnWidth = this.offsetWidth;
        var myPosX = e.pageX;
        var newClass = "";
        // if on left 1/3 width of btn
        if (myPosX < (leftOffset + .3 * btnWidth)) {
            newClass = 'btn-left'
        } else {
            // if on right 1/3 width of btn
            if (myPosX > (leftOffset + .65 * btnWidth)) {
                newClass = 'btn-right';
            } else {
                newClass = 'btn-center';
            }
        }
        // remove prev class
        var clearedClassList = this.className.replace(/btn-center|btn-right|btn-left/gi, "").trim();
        this.className = clearedClassList + " " + newClass;
    });
}

const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animation
function navAnimation(val1, val2) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
    });
}

function toggleNav() {
    // Toggle: Hamburger Open/Close
    hamburgerMenu.classList.toggle("active");

    //   Toggle: Menu Active
    overlay.classList.toggle("overlay-active");

    if (overlay.classList.contains("overlay-active")) {
        // Animate In - Overlay
        overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

        // Animate In - Nav Items
        navAnimation("out", "in");
    } else {
        // Animate Out - Overlay
        overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

        // Animate Out - Nav Items
        navAnimation("in", "out");
    }
}

// Events Listeners
hamburgerMenu.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener("click", toggleNav);
});
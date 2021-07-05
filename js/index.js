// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     const l_bunny = entry.target.querySelector(".left-bunny");
//     const r_bunny = entry.target.querySelector(".right-bunny");
//     if (entry.isIntersecting) {
//       l_bunny.classList.add("animated-left");
//       r_bunny.classList.add("animated-right");

//       return; // if we added the class, exit the function
//     }

//     // We're not intersecting, so remove the class!
//     l_bunny.classList.remove("animated-left");
//     r_bunny.classList.remove("animated-right");
//   });
// });
// const tracker = document.querySelector(".animated-bunnies");
// observer.observe(tracker);


function intersection(el, gs) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      gs.forEach(({tt, cls }) => {
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



intersection(".animated-bunnies", [{tt: ".left-bunny", cls: "animated-left"}, {tt: ".right-bunny", cls: "animated-right"}]);
intersection(".walk-bunny-container", [{tt: ".walking-bunny", cls:  "animated-bunny"}]);

function hideMenu() {
  let menuOpen = document.querySelector("#checkbox").checked;

  if ((menuOpen = true)) {
    document.querySelector("#checkbox").checked = false;
  }
}
window.addEventListener("scroll", hideMenu);

//   (function () {
//     emailjs.init("user_dXnw0wdAdI0EwpxJtJWnR");
//     document
//       .getElementById("contact-form")
//       .addEventListener("submit", function (event) {
//         event.preventDefault();
//         emailjs.sendForm("bufna", "bufnat", "contact-form").then(
//           function (response) {
//             document.getElementById("contact").style.display="none";
//             document.getElementById("responce").style.display="flex";

//       });
//   })
// })();

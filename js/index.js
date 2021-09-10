


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



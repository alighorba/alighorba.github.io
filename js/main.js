let navIcon = document.getElementById("nav-icon");
let navList = document.querySelector(".nav-lists");

// show navbar
navIcon.addEventListener("click", function () {
  navList.classList.toggle("showList");
});

// current
function startCount(id, target) {
  const step = document.getElementById(id);
  step.textContent = "0";
  let current = 0;

  const increment = () => {
    if (current < target) {
      current++;
      step.textContent = current;

      setTimeout(increment, 90);
    }
  };
  increment();
}
document.addEventListener("DOMContentLoaded", startCount("current1", 12));
document.addEventListener("DOMContentLoaded", startCount("current2", 6));
document.addEventListener("DOMContentLoaded", startCount("current3", 8));

// scroll section active link
const sections = document.querySelectorAll(".feature-card-container[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 500,
      sectionId = current.getAttribute("id");
      

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".feature-title a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".feature-title a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
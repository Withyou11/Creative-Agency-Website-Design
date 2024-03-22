function toggleActive(index) {
  const lis = document.querySelectorAll(".navbar__link");
  lis.forEach((li, i) => {
    if (i === index) {
      li.classList.add("navbar__link--active");
    } else {
      li.classList.remove("navbar__link--active");
    }
  });
}

document.querySelector(".li-1").addEventListener("click", function () {
  toggleActive(0);
});

document.querySelector(".li-2").addEventListener("click", function () {
  toggleActive(1);
});

document.querySelector(".li-3").addEventListener("click", function () {
  toggleActive(2);
});

document.querySelector(".li-4").addEventListener("click", function () {
  toggleActive(3);
});

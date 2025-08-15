// hamburger menu
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileSidebar = document.getElementById("mobile-sidebar");
const mobileLinks = mobileSidebar.querySelectorAll("a");

hamburgerBtn.addEventListener("click", () => {
  mobileSidebar.classList.toggle("active");
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileSidebar.classList.remove("active");
  });
});

// hover efekti ile animasyon çakışmasın diye
const btn = document.querySelector(".btn.animate__animated");

btn.addEventListener("animationend", () => {
  btn.classList.remove("animate__animated", "animate__fadeInDown");
});

// project section navbar
const projectFilterLinks = document.querySelectorAll(".project-navbar a");
const projectCards = document.querySelectorAll(".project-card");

function filterProjects(category, clickedLink) {
  // Aktif class değiştir
  projectFilterLinks.forEach((l) =>
    l.parentElement.classList.remove("project-active")
  );
  clickedLink.parentElement.classList.add("project-active");

  // Kartları filtrele
  projectCards.forEach((card) => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

projectFilterLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    filterProjects(this.dataset.category, this);
  });
});

// Sayfa yüklenince otomatik olarak "Frontend" aktif et
document.addEventListener("DOMContentLoaded", () => {
  const frontendLink = document.querySelector(
    '.section-navbar a[data-category="frontend"]'
  );
  if (frontendLink) {
    filterProjects("frontend", frontendLink);
  }
});

// experience section navbar
const filterLinks = document.querySelectorAll(".experience-navbar a");
const checkpoints = document.querySelectorAll(".checkpoint");

function filterExperience(category, clickedLink) {
  // Aktif link class değişimi
  filterLinks.forEach((l) =>
    l.parentElement.classList.remove("experience-active")
  );
  clickedLink.parentElement.classList.add("experience-active");

  // Filtreleme
  checkpoints.forEach((checkpoint) => {
    const card = checkpoint.querySelector(".experience-card");
    if (!category || card.dataset.category === category) {
      checkpoint.style.display = "block";
    } else {
      checkpoint.style.display = "none";
    }
  });

  // Görünen kartlara yeniden sağ/sol konumlandırma
  const visibleCheckpoints = Array.from(checkpoints).filter(
    (c) => c.style.display === "block"
  );

  visibleCheckpoints.forEach((c, index) => {
    c.classList.remove("left", "right");
    if (index % 2 === 0) {
      c.classList.add("left");
    } else {
      c.classList.add("right");
    }
  });
}

filterLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    filterExperience(this.dataset.category, this);
  });
});

// Sayfa yüklenince otomatik olarak "Relevant Experience" aktif et
document.addEventListener("DOMContentLoaded", () => {
  const firstLink = document.querySelector(
    '.section-navbar a[data-category="relevant"]'
  );
  if (firstLink) {
    filterExperience("relevant", firstLink);
  }
});

// swiper
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
    spaceBetween: 32,
    slidesPerView: 3,
    grabCursor: true,
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

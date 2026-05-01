// 現在のページに応じてナビゲーションを強調表示します。
const currentPage = document.body.dataset.page;
const navLinks = document.querySelectorAll("[data-nav]");

navLinks.forEach((link) => {
  if (link.dataset.nav === currentPage) {
    link.classList.add("is-current");
    link.setAttribute("aria-current", "page");
  }
});

// スマホ表示用の簡易メニュー制御です。
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

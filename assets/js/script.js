function showPopup() {
  $("#popup-overlay").fadeIn(300);
  $("#popup").fadeIn(300);
}

function hidePopup() {
  $("#popup").fadeOut(300);
  $("#popup-overlay").fadeOut(300);
}

window.addEventListener("load", function () {
  const loader = document.getElementById("preloader");
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});
function updateHeroBackgrounds() {
  const isMobile = window.innerWidth <= 768;

  document.querySelectorAll(".hero-slide").forEach((slide) => {
    const style = slide.getAttribute("style");
    const match = style.match(/url\(['"]?(.*?)['"]?\)/);

    if (match && match[1]) {
      const originalUrl = match[1];
      const extension = originalUrl.slice(originalUrl.lastIndexOf("."));
      const desktopUrl = originalUrl.replace(/-mobile(?=\.[a-z]+$)/i, "");
      const mobileUrl = desktopUrl.replace(extension, `-mobile${extension}`);
      const newUrl = isMobile ? mobileUrl : desktopUrl;

      if (!style.includes(newUrl)) {
        slide.style.backgroundImage = `url('${newUrl}')`;
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", updateHeroBackgrounds);

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(updateHeroBackgrounds, 300);
});

document.getElementById("content-area").addEventListener("click", function () {
  window.location.href = "tournaments-first.html";
});

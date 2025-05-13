const cookiebar = document.querySelector(".cookie-bar");
const cookieBtn = document.querySelector("#button-yes");

cookieBtn.addEventListener("click", () => {
  alert("Hej hej du klickade på knappen!");
});


cookieBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cookiebar.classList.remove("cookie-banner-active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

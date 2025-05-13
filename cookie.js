const cookiebar = document.querySelector(".cookie-bar");
const cookieBtn = document.querySelector("#button-yes");

cookieBtn.addEventListener("click", () => {
  alert("du klickade på knappen!");
});


cookieBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cookiebar.classList.remove("cookieparent");
  localStorage.setItem("cookieBarDisplayed", "true");
});

if(localStorage.getItem("cookieBannerDisplayed")){
  cookieBanner.classList.remove("cookieparent");
}


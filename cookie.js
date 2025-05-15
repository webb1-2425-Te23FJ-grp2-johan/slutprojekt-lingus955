const cookiebar = document.querySelector(".cookiebar");
const cookieBtn = document.querySelector("#button-yes");


cookieBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cookiebar.classList.remove("cookiefisk");
  localStorage.setItem("cookieBarDisplayed", "true");
  
});

if(localStorage.getItem("cookieBarDisplayed")){
  cookiebar.classList.remove("cookiefisk");
}




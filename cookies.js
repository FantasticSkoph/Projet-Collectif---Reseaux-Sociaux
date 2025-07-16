const cookieBox = document.querySelector(".wrapper"),
      overlay = document.querySelector(".overlay"),
      buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  if (document.cookie.includes("codinglab")) return;
  
  cookieBox.classList.add("show");
  overlay.classList.add("show");
  
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");
      overlay.classList.remove("show");
      
      if (button.id == "acceptBtn") {
        document.cookie = "cookieByTest=codinglab; max-age=" + 60 * 5;
      }
    });
  });
};
window.addEventListener("load", executeCodes);

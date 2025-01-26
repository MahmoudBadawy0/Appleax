let darkBtn = document.getElementById("darkBtn");
let them = document.getElementById("them");

toggle();

darkBtn.addEventListener("click", () => {
  if (localStorage.currentTheme === "dark") {
    localStorage.currentTheme = "light";
  } else {
    localStorage.currentTheme = "dark";
  }
  toggle();
});

function toggle() {
  document.documentElement.classList.toggle(
    "dark",
    localStorage.currentTheme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  them.innerHTML = localStorage.currentTheme === "dark" ? "Light" : "Dark";
}

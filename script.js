let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
let sidemenu = document.getElementById("sidemenu");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyZdsPXHY-v5xUYz5kgw98ZV1Y3qZ8Nr5Zm9oenaazjEEM57aZysZdvpgMGcsGzMl2-HQ/exec";

const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Your Message Successfully Submit";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 1000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

var typed = new Typed("#main-heading", {
  strings: [
    "Front-end Developer.",
    "React Developer.",
    "JavaScript Developer.",
  ],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true,
});

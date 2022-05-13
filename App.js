const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBnt = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

//Exportar cdn <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js" referrerpolicy="no-referrer"></script>
var typed = new Typed(".typing", {
  strings: ["Web", "FrontEnd", "BackEnd", "FullStack"],
  typeSpeed: 110,
  BackSpeed: 60,
  loop: true,
});

function PageTransitions() {
  //Button click active class
  for (let i = 0; i < sectBnt.length; i++) {
    sectBnt[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }
  //Section Active class
  allSections.addEventListener("click", (e) => {
    //dataset es data-id en index.html
    const id = e.target.dataset.id;
    if (id) {
      //remove selected from the other btns
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      //hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  //Toggle theme
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
}

PageTransitions();

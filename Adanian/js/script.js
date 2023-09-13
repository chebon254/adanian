//Create A Responsive Menu Hide Show Side Menu
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const menu = document.querySelector(".links");
const header = document.querySelector(".nav");
// Onclick For Menu Bar
// Onscroll Change Nav Bar Background
window.onscroll = ()=>{
    this.scrollY > 20 ? header.classList.add("sticky") : header.classList.remove("sticky");
}

menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}

// Onclick For Cancel Menu 
cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}

/* == Timeline == */
const tabButtons = document.querySelectorAll('.selector-btn');
const tabContents = document.querySelectorAll('.schedule-slide');

function showTab(tabIndex) {
  tabButtons.forEach((button) => {
    button.classList.remove('active');
  });

  tabContents.forEach((content) => {
    content.classList.remove('active');
  });

  tabButtons[tabIndex].classList.add('active');
  tabContents[tabIndex].classList.add('active');
}

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    showTab(index);
  });
});

showTab(0); // Show the first tab by default

/* == || Timeline == */
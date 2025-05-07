// ini navbar dropdown

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
};

// ini form contact

let myname = "toriq rosid";
let myemail = "toriqrosid@example.com";
let mynumber = "08111111111";
let subject = "saran";
let message = "halo world";

function contactme() {
  console.log("Nama: " + myname);
  console.log("Email: " + myemail);
  console.log("Number:" + mynumber);
  console.log("Subject: " + subject);
  console.log("Your Message" + message);
}

contactme();

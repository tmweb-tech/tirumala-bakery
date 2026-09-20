// NAVBAR SCROLL EFFECT

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const icon = menuToggle.querySelector("i");

  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});


// CLOSE MOBILE MENU AFTER CLICK

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    const icon = menuToggle.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});


// IMAGE ERROR HANDLING

document.querySelectorAll("img").forEach(img => {

  img.addEventListener("error", () => {

    img.style.background = "#eadcc7";
    img.style.minHeight = "200px";
    img.style.objectFit = "contain";

    console.log("Image not found:", img.src);

  });

});


// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(event) {

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});


// WHATSAPP ENQUIRY FORM

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

  enquiryForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("phoneNumber").value.trim();
    const requirement = document.getElementById("requirement").value;
    const date = document.getElementById("requiredDate").value;
    const message = document.getElementById("message").value.trim();

    const formattedDate = date
      ? new Date(date + "T00:00:00").toLocaleDateString("en-IN")
      : "Not specified";

    const whatsappMessage =
`Hello Tirumala Bakery & Sweets,

I would like to make an enquiry.

Name: ${name}
Phone: ${phone}
Requirement: ${requirement}
Required Date: ${formattedDate}
Message: ${message || "No additional message"}

Thank you.`;

    const bakeryWhatsAppNumber = "919949050053";

    const whatsappURL =
      "https://wa.me/" +
      bakeryWhatsAppNumber +
      "?text=" +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");

  });

}
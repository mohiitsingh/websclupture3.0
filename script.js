// scroll feature
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 100);
});

// toggle button feature
const toggleButton = document.querySelector("#nav-toggle");
const navLinks = document.getElementById("nav-links");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

//  pre and next button feature
const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

//whatsapp

document
  .getElementById("get-quote-button2")
  .addEventListener("click", function () {
    var phoneNumber = "9424457498"; // Replace with the actual phone number
    var instantQuoteMessage =
      "Thank you for requesting an instant quote! Please tell us How we can help ?";

    var encodedMessage = encodeURIComponent(instantQuoteMessage);
    var whatsappUrl =
      "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;

    window.open(whatsappUrl, "_blank");
  });

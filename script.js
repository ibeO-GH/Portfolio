$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });
});

document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const textarea = document.getElementById("textarea").value.trim();
    let message = "";

    switch (true) {
      case !name:
        message = "Name is required.";
        break;
      case !email:
        message = "Email is required.";
        break;
      case !subject:
        message = "Subject is required.";
        break;
      case !textarea:
        message = "Message is required.";
        break;
      default:
        message = "Form submitted successfully!";
    }

    document.getElementById("validation-message").innerHTML = message;
  });

const validationMessage = document.getElementById("validation-message");
validationMessage.style.fontSize = "3rem";
validationMessage.style.color = "var(--main-color)";
validationMessage.style.textAlign = "center";

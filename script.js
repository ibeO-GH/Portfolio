// Js code
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
        message = "All fields required.";
        break;
      case !email:
        message = "All fields required.";
        break;
      case !subject:
        message = "All fields required.";
        break;
      case !textarea:
        message = "All fields required.";
        break;
      default:
        message = "Form submitted successfully!";
    }

    document.getElementById("validation-message").innerHTML = message;
  });

const validationMessage = document.getElementById("validation-message");
validationMessage.style.fontSize = "2.5rem";
validationMessage.style.color = "moccasin";
validationMessage.style.backgroundColor = "#0e4168";
validationMessage.style.width = "100%";
validationMessage.style.textAlign = "center";
validationMessage.style.marginTop = "1rem";

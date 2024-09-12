var message; // Declare message globally
$(document).ready(function () {
  console.log("Welcome to this page");

  $("#day").on("input", function (e) {
    e.preventDefault();
    const dayofweek = $("#day").val().trim().toLowerCase();
    if (
        dayofweek !== "monday" &&
        dayofweek !== "tuesday" &&
        dayofweek !== "wednesday" &&
        dayofweek !== "thursday" && // Note: fixed typo from "thurday" to "thursday"
        dayofweek !== "friday" &&
        dayofweek !== "saturday" &&
        dayofweek !== "sunday"
      ) {
      err = "This is not day of week";
      
    }
    $("#err").html(err);
  });
  $("#dayForm").on("submit", function (event) {
    event.preventDefault();
    var message ;
    const day = $("#day").val().toLowerCase();
    switch (day) {
      case "monday":
        message = "Monday is the only day of the week named after the moon.";
        break;
      case "tuesday":
        message =
          "Tuesday is a popular day for worshiping Hanuman, Kartikeya, Kali, Durga, Parvati, and Ganesha. ";
        break;
      case "wednesday":
        message =
          "In the Catholic tradition, Wednesday is the day of Saint Joseph. In Hinduism, Wednesday is the day of Budha, the god of Mercury, merchants, and merchandise. ";
        break;
      case "thursday":
        message =
          "In Hinduism, Thursday is known as Guruvar and is dedicated to Lord Vishnu, the protector and preserver of the universe.";
        break;
      case "friday":
        message =
          "The name Friday comes from Friya, the wife of Odin, or from Venus, the Roman goddess of love. ";
        break;
      case "saturday":
        message =
          "People born on Saturday are said to have a strong sense of independence, self-determination, and justice. They are also said to be competitive, have a strong work ethic, and pay close attention to detail. ";
        break;
      case "sunday":
        message =
          "The word Sunday comes from the which means sun's day . The name comes from the Middle English word sunnenday, which comes from the Old English word sunnandæg. ";
        break;
      default:
        alert("Invalid day");
        break;
    }
    if(message){
        $("#message").html(`${message}`);
    }
});
});

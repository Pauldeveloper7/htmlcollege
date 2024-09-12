var message; // Declare message globally
$(document).ready(function () {
  console.log("Welcome to this page");

  $("#age").on("input", function (e) {
    e.preventDefault();
    const currentage = $("#age").val();
    if(currentage <= 0 || currentage >= 100){
    err = "Age should be less than 100 and greater than 0";
}
    $("#err").html(err);
  });
  $("#ageForm").on("submit", function (event) {
    event.preventDefault();
    var message ;
    const age = $("#age").val();
    if(age > 0 && age < 10) {
            message = "You are a child";
        } 
    else if(age >= 10 && age < 18) {
            message = "You are a teenager";
        } 
    else if(age >= 18 && age < 25) {
            message = "You are an adult";
        } 
    else if(age >= 25 && age < 100) {
            message = "You are Women/Men";
         }
       
    else {
            alert("Erroneous input !!");
        }
    if(message){
        $("#message").html(`${message}`);
    }
});
});

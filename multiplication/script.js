var multiplicationtable = "";
var num;
$(document).ready(function() {
    console.log("Welcome to this page");

    $("#num").on('input', function(e){
        e.preventDefault();
        num = $("#num").val();
        console.log(num);
        let err = "";
        if(num <= 0 || num >= 100){
            err = "Number should be less than 100 and greater than 0";
        }
        $("#err").html(err); // Update the span with the message
        multiplicationtable = ""; // Reset the table
        for (let index = 1; index <= 10; index++) {
            const t = num * index;
            multiplicationtable += num + " × " + index + " = " + t + "<br>";
        }
        if(multiplicationtable){
            $("#table").html(multiplicationtable);
        }
    });

})
$(document).ready(function() {
    console.log("Welcome to registration form");

    // Array of images
    const images = [
        "https://media.istockphoto.com/id/1543195033/photo/laptop-business-and-black-woman-in-office-with-smile-working-on-online-project-report-and.jpg?s=2048x2048&w=is&k=20&c=HGSsj7eEdveEcakWKWZozKhYlrRmlU17vloIPnK7ws4=",
        "https://media.istockphoto.com/id/680407116/photo/close-up-of-shaking-hands-after-successful-agreement.jpg?s=612x612&w=0&k=20&c=AovyoofDerhWxyWxf0evPsAbcEf8ZylJbalP6BI2YNM=",
        "https://media.istockphoto.com/id/1700222492/photo/group-of-business-people-waiting-for-job-interview-in-the-office.jpg?s=612x612&w=0&k=20&c=z-M1i8_KnsG18Bcl0uH6bblbqE6DnJtGye44ZJ4TZF4=",
        "https://media.istockphoto.com/id/1499722823/photo/adult-businesswoman-looking-for-a-new-job-over-the-digital-tablet-sitting-in-the-living-room.jpg?s=612x612&w=0&k=20&c=v3pe39LsdhIYZZXH0FOD3bJY1breAOrTkhgt5p5XwXY="
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    $(".bebas-neue-regular").css("background-image", `url(${images[randomIndex]})`);

    // Full name validation with delay
    $('#fullname').on('input', function() {
        const currentValue = $(this).val();
        setTimeout(function() {
            const regex = /^[a-zA-Z ]*$/;
            if (!regex.test(currentValue)) {
                $(".messageforfullname").html("Full name can only contain alphabets, no whitespace");
            } else {
                $(".messageforfullname").html(""); // Clear the message if valid
            }
        }, 2000); // 2-second delay
    });

    // Username validation with delay
    $('#username').on('input', function() {
        setTimeout(function() {
            const username = $('#username').val();
            const regexforusername = /^[a-zA-Z][a-zA-Z0-9!@#$%^&*()_+]*$/;
            if (!regexforusername.test(username)) {
                $(".messageforusername").html("Username must only contain numbers, letters, and dashes, no whitespace");
            } else {
                $(".messageforusername").html(""); // Clear the message if valid
            }
        }, 2000); // 2-second delay
    });

    // Email validation with delay
    $('#email').on('input', function() {
        setTimeout(function() {
            const email = $('#email').val();
            const regexforemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!regexforemail.test(email)) {
                $(".messageforemail").html("Invalid email Id");
            } else {
                $(".messageforemail").html(""); // Clear the message if valid
            }
        }, 2000); // 2-second delay
    });

    // Password validation with delay
    // $('#password').on('input', function() {
    //     setTimeout(function() {
    //         const password = $('#password').val();
    //         const regexforpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    //         // if (!regexforpassword.test(password)) {
    //             $(".messageforpassword").html("Your password must be at least 8 characters long and include at least one <br> uppercase letter, one lowercase letter, one number, and one special character.");

    //     }, 2000); // 2-second delay
    // });

    // Confirm password validation with delay
    $('#cpassword').on('input', function() {
        setTimeout(function() {
            const cpassword = $('#cpassword').val();
            const password = $('#password').val();
            if (cpassword !== password) {
                $(".messageforcpassword").html("Confirm password should match password");
            } else {
                $(".messageforcpassword").html(""); // Clear the message if valid
            }
        }, 2000); // 2-second delay
    });

    // Form submission validation
    $('#btnsubmit').on('click', function() {
        const fullname = $('#fullname').val().trim();
        const username = $('#username').val().trim();
        const password = $('#password').val().trim();
        const cpassword = $('#cpassword').val().trim();
        const address = $('#address').val().trim();
        const gender = $('#gender').val().trim();
        const course = $('#course').val().trim();
        const hobbies = $('#hobbies').val().trim();
        const state = $('#state').val().trim();

        if (fullname || username || password|| cpassword  == false || address || gender || course || hobbies || state == null) {
            switch (true) {
                case !fullname:
                    alert("Kindly fill the full name input");
                    break;
                case !username:
                    alert("Kindly fill the user name input");
                    break;
                case !password:
                    alert("Kindly fill the password input");
                    break;
                case !cpassword:
                    alert("Kindly fill the confirm password input");
                    break;
                case !address:
                    alert("Kindly fill address");
                    break;
                case !gender:
                    alert("Kindly select a gender");
                    break;
                case !course:
                    alert("Kindly select a course");
                    break;
                case !hobbies:
                    alert("Kindly fill hobbies");
                    break;
                case !state:
                    alert("Kindly select your state");
                    break;
                default:
                    alert("Something went wrong, refill the form");
            }
        } else {
            alert("The form is submitted");
        }
    });
});

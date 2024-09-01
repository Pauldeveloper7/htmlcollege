console.log("Welcome to the page");
let day = prompt("Enter day of the week").toLowerCase();

switch (day) {
    case 'monday':
        alert("Monday");
        break;
    case 'tuesday':
        alert("Tuesday");
        break;
    case 'wednesday':
        alert("Wednesday");
        break;
    case 'thursday':
        alert("Thursday");
        break;
    case 'friday':
        alert("Friday");
        break;
    case 'saturday':
        alert("Saturday");
        break;
    case 'sunday':
        alert("Sunday");
        break;
    default:
        alert("Invalid day");
        break;
}

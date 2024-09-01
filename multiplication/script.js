console.log("\n welcome to this program")
$(document).ready(function() {

const num = prompt("Enter a number");
for (let index = 1; index <=10; index++) {
    const table = num*index;
    document.write(num , "*" , index, "= ", table , 
    "<br>")
    console.log("\n",num , "*" , index, "= ", table ,"\n")
}
})
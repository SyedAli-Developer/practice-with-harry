var a = prompt("Enter your number.")
var b = confirm("Are you sure you want to leave this website")

if(b)
{
    console.log("Your number is " + a)
    console.error("Your computer will restart in 30sec.")
    alert("Your computer will restart in 30sec")
}else{
    console.log(`your number is ${a}`)
    console.error("Now your computer is safe")
}
document.title = "Mother Fuck"
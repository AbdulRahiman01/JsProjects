let date = new Date()

let month = date.getMonth()

let days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]



document.getElementById("two").innerHTML=date.getDate()
document.getElementById("four").innerHTML=date.getFullYear()
document.getElementById("three").innerHTML=days[date.getDay()]
document.getElementById("one").innerHTML=months[date.getMonth()]

console.log(month)
console.log(date1)
console.log(day)
console.log(year)
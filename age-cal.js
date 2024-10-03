function fun(){

let date = new Date();

let cdate = date.getDate();
let cmonth = date.getMonth()+1;
let cyear = date.getFullYear();


console.log(cdate)
console.log(cmonth)
console.log(cyear)


let inputdate = new Date(document.getElementById("input").value);

let gdate = inputdate.getDate();
let gmonth = inputdate.getMonth()+1;
let gyear = inputdate.getFullYear();

console.log(gdate)
console.log(gmonth)
console.log(gyear)

let year,month,day;

year = cyear - gyear;


if(cmonth>=gmonth){
    month = cmonth - gmonth;
}
else{
    year --;
    month = 12+ cmonth - gmonth;
}

if(cdate>=gdate){
    day = cdate - gdate;
}
else{
    month --;
    day = getdays(year,month)+cdate-gdate;

}

if(month<0){
    month =11;
    year--;
}


console.log(year)
console.log(month)
console.log(day)

document.getElementById("year").innerText=year;
document.getElementById("month").innerText=month;
document.getElementById("day").innerText=day;


}

function getdays(year,month){
return new Date(year,month,0).getDate();
}
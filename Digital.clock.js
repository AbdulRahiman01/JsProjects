let hrs = document.getElementById("hrs")
let min = document.getElementById("mins")
let sec = document.getElementById("sec")

setInterval(()=>{
let date = new Date()
    hrs.innerHTML=`${date.getHours()-12}`
    if(date.getHours()==0){
        hrs.innerHTML=`<span class=zero>0</span><span class=zero>0</span>`
    }
    else if(date.getHours()<12){
        hrs.innerHTML=`${date.getHours()}`
    }

    

    min.innerHTML=date.getMinutes()
    if(date.getMinutes()>9){
        mins.innerHTML=date.getMinutes()  
    }
    else{
        mins.innerHTML=`<span class=zero>0</span>${date.getMinutes()}`
    }
    sec.innerHTML=date.getSeconds()

    if(date.getSeconds()>9){
        sec.innerHTML=date.getSeconds()  
    }
    else{
        sec.innerHTML=`<span class=zero>0</span>${date.getSeconds()}`
    }
    
},1000)


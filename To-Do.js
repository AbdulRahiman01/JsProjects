// let input = document.getElementById("input")
// // console.log(input)

// let elem1 = document.getElementById("one")
// let elem2= document.getElementById("two")
// let elem3 = document.getElementById("three")
// // let elem4 = document.getElementById("four")
// // let elem5 = document.getElementById("five")

// // console.log(elem1.innerText)

// // function fun(){
// //     if(input.value===""){
// //         alert('Enter something to your to do-list')
// //     }
// //     if(elem1!=""){
// //         elem1.innerText=input.value
// //         input.value=""
// //     }
// // }

// // let ul = document.getElementsByClassName("ul")
// // let li = document.createElement("li")
// // function fun(){
// //     if(input.value===""){
// //         alert('Enter something to your To-do List')
// //     }

// //     if(input.value!=""){
// //         document.body.ul.appendChild(ul)
// //         li.innerText=input.value
// //     }
// // }

// let but = document.getElementById("btn")

// but.addEventListener("click",()=>{
//     if(input.value===""){
//                 alert('Enter something to your to do-list')
//             }
//             if(elem1!=""){
//                 elem1.innerHTML=input.value
//                 input.value=""
//                 confirm("added successfully")
//             }
//             else if(elem2!=""){
//                 elem2.innerHTML=input.value
//                  input.value=""
//             }
//              if(elem3!=""){
//                 elem3.innerHTML=input.value
//                  input.value=""
//             }
// })

// elem1.onclick=()=>{
//     if(elem1.style.textDecoration="none"){
//         elem1.style.textDecoration="line-through"
//     }
// }
// elem2.onclick=()=>{
//     elem1.style.textDecoration="line-through"
// }
// elem3.onclick=()=>{
//     elem1.style.textDecoration="line-through"
// }


let input = document.getElementById("input")
let content = document.getElementById("content")
 function fun(){
    if(input.value===""){
        alert('Enter something to the input list')
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=input.value;
        content.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML='&#10006'     
        li.appendChild(span)   
    }
    input.value=""



 }
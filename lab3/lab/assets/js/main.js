//accordion
// $( function() {
//     $( "#accordion" ).accordion();
// } );

// document.getElementById("accordion");

// let acc=$("#accordion")

// $("#accordion").parentElement.innerHTML("dmsalokdmsal")

// difference between vanilla and jquery selector
// let testdiv = $(".test")

// console.log(testdiv)
//jquerry onlick
// $(".test").on("click",function(e){
//     alert("hellooo")
// })

//accordion

// let headers = document.querySelectorAll(".acc-head")
// let bodies = document.querySelectorAll(".acc-body")
// console.log(headers)

// headers.forEach(header => {
//     header.addEventListener("click",function(e){
//         e.preventDefault();
//         console.log(header)
//         header.nextElementSibling.classList.add("active")
//     })
// });

//slider

let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let sliders = document.querySelectorAll("img");

// next.addEventListener("click",function(e){
//     sliders.forEach(element => {
//         if(element.firstElementChild.classList.contains("active")){
//             let nextslider=element.nextElementSibling.firstElementChild.className="active";
//             nextslider.classList.add("active")
//         }

//     });
// })
// prev.addEventListener("click",function(e){
//     console.log("hello")
// })

// next.addEventListener("click", function (e) {
//   e.preventDefault();
//   var current = document.querySelector(".active");
//   current.classList.remove("active");
//   if (current.nextElementSibling) {
//     current.nextElementSibling.classList.add("active");
//   }
//   else{
//       sliders[0].classList.add("active")
//   }
// });
// prev.addEventListener("click", function (e) {
//     e.preventDefault();
//     var current = document.querySelector(".active");
//     current.classList.remove("active");
//     if (current.previousElementSibling) {
//       current.previousElementSibling.classList.add("active");
//     }
//     else{
//         sliders[0].classList.add("active")
//     }
//   });
  

 





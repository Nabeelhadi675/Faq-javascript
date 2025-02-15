let main = document.querySelectorAll(".main");

main.forEach((items)=> {
   items.addEventListener("click",()=> {
    items.classList.toggle("active");
   })
})



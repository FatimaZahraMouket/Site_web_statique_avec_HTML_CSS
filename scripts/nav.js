
const sections =document.getElementsByClassName("sec");
const navButtons = document.querySelectorAll(".navButton");
console.log(navButtons)

navButtons.forEach((item,i) => {
  item.addEventListener("click", (event) => {
        let activate = document.getElementsByClassName("active")[1];
        activate.classList.remove("active");
       event.target.className+=" active";
       for(let i=0;i<sections.length;i++){
        sections.item(i).classList.remove("showing")
       }
        sections[i].classList.add("showing");
     

  });
});
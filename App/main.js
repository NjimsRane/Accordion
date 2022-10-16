const questions = document.querySelectorAll(".questions");
const hamburger = document.querySelectorAll(".hamburger");

questions.forEach((question)=>{
    const hamburgerMenu = question.querySelector(".hamburgerMenu");

    hamburgerMenu.addEventListener("click",()=>{
        
       
        questions.forEach((items)=>{
            if(items!==question){
                items.classList.remove("showText");
                items.classList.remove("hamburgerMenuChange")
                
            }
            console.log(items);
        });
        

        question.classList.toggle("showText");
        hamburgerMenu.classList.toggle("hamburgerMenuChange");
    })
})
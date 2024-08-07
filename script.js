const inputText = document.querySelectorAll(".input-container input")
const errorMessage = document.querySelectorAll(".input-container .error-message");
const errorIcon = document.querySelectorAll(".input-container .error-icon");

const submitBtn = document.querySelector("button[type=submit]");

function verifyEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.value);
}

function verifyEmpty(input){
    return(input.value==="");
}

function showError(index){
    inputText[index].style.borderColor="var(--red)";
    inputText[index].style.borderWidth="2px";
    errorMessage[index].textContent=`${inputText[index].name} cannot be empty`;
    errorIcon[index].classList.remove("hidden");
}

for(let i=0;i<inputText.length;i++){
    inputText[i].addEventListener("click",()=>{
        inputText[i].style.borderColor=null;
        inputText[i].style.borderWidth=null;
        inputText[i].style.color=null;
        errorMessage[i].textContent=null;
        errorIcon[i].classList.add("hidden");
    })
};

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let booleen=true;

    for (let i=0;i<inputText.length;i++){
        if(verifyEmpty(inputText[i])){
            showError(i);
            booleen=false;
        }
    }

    if(!verifyEmail(inputText[2])){
        inputText[2].style.borderColor="var(--red)";
        inputText[2].style.borderWidth="2px";
        inputText[2].style.color="var(--red)";
        inputText[2].value="email@example/com";
        
        errorMessage[2].textContent="Looks like this is not an email";
        errorIcon[2].classList.remove("hidden");
        booleen=false;
    }

    if(booleen){
        alert("Congratulations");
    }
})
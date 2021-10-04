const form= document.querySelector("#form");
const confirmPasswordEl= document.querySelector("#ConfirmPassword");
const passwordEl= document.querySelector("#password")
const messageContainer= document.querySelector("#message-container");
const messageEl = document.querySelector("#message");
let isValid=false;

function changeMessageContent(message, color)
{
 messageContainer.style.border=`1px solid ${color}`;
 messageEl.style.color=color;
 messageEl.textContent=message;
}

function validateForm()
{
    isValid=form.checkValidity();
    console.log(isValid);
    if (!isValid)
    {
        changeMessageContent("Please Fill Out all the fields", 'red');
    }

    else if(passwordEl.value!==confirmPasswordEl.value){
        changeMessageContent("Make Sure Password and confirm Password match", 'red');
    }
    else 
     changeMessageContent("Register Successfully", 'green');
}

function submitResponse(e)
{
    e.preventDefault();
    validateForm();
}
//Submit user response
form.addEventListener("submit", submitResponse);
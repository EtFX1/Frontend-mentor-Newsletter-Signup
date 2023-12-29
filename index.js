//! elements from the dom

// * form element
const form = document.querySelector("#email-form");

// * input 
const inputBox = document.querySelector("#email-input");
const inputText = document.querySelector("#email-input[type=\"text\"]");
const errorMsg = document.querySelector("#error-msg");
const mobileImg = document.querySelector("#mobile-image");
const mainCard = document.querySelector("#main-card-background");
const thankYouCard = document.querySelector("#thank-you-card-background");
const userEmailInsert = document.querySelector("#email-insert");


//* form event listener
form.addEventListener("submit", (event) => {
    event.preventDefault(); //? prevents the page from being refreshed and the form sending any data to the backend

    //* user email input
    const userEmailInput = document.querySelector("#email-input").value;

    //* validator.js to validate email
    const validation = validator.isEmail(userEmailInput);

    // * function that does some styling when the user types in the incorrect email 
    emailIncorrect = () => {
        inputBox.style.backgroundColor = "var(--tomato-20-opaque)";
        inputBox.style.border = "1px solid #ff000085";
        inputText.style.color = "var(--tomato-70-opaque)";
        errorMsg.style.display = "block";
    }

    // * function that does some styling when the user types in the correct email 
    emailCorrect = () => {
        mobileImg.style.display = "none";
        mainCard.style.display = "none";
        thankYouCard.style.display = "block";
        userEmailInsert.innerText = userEmailInput;
    }

    //* conditional statement to run the functions
    !validation ? emailIncorrect() : emailCorrect();
})



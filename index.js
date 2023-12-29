//! elements from the dom
const form = document.querySelector("#email-form");
const inputBox = document.querySelector("#email-input");
const errorMsg = document.querySelector("#error-msg");
const mobileImg = document.querySelector("#mobile-image");
const mainCard = document.querySelector("#main-card-background");
const thankYouCard = document.querySelector("#thank-you-card-background");
const userEmailInsert = document.querySelector("#email-insert");


//! submit event listener for the form that processes the user input when the form is submitted
form.addEventListener("submit", (event) => {
    event.preventDefault(); //? prevents the page from being refreshed and the form sending any data to the backend

    //* stores the input that the user types into the form
    const userEmailInput = document.querySelector("#email-input").value;

    //* validator.js library to validate email input
    const validation = validator.isEmail(userEmailInput);


    // * function that does some styling when the user types in the incorrect email 
    emailIncorrect = () => {
        inputBox.style.backgroundColor = "var(--tomato-20-opaque)";
        inputBox.style.border = "1px solid #ff000085";
        inputBox.style.color = "var(--tomato-70-opaque)";
        errorMsg.style.display = "block";
    }

    // // * function that does some styling when the user types in the correct email 
    emailCorrect = () => {
        mobileImg.style.display = "none";
        mainCard.style.display = "none";
        thankYouCard.style.display = "block";
        userEmailInsert.innerText = userEmailInput;
    }

    //* conditional statement to run the either of the functions  based on whether the email input is correct or not
    !validation ? emailIncorrect() : emailCorrect();
})



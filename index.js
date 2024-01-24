//! elements from the dom
const form = document.querySelector(".email-form");
const inputBox = document.querySelector(".email-input");
const mainCard = document.querySelector(".main-card-background");
const thankYouCard = document.querySelector(".thank-you-card-background");
const userEmailInsert = document.querySelector(".email-insert");
const errorMsg = document.querySelector(".error-msg");

//! submit event listener for the form that processes the user input when the form is submitted
form.addEventListener("submit", (event) => {
    event.preventDefault(); //? prevents the page from being refreshed and the form sending any data to the backend

    //* stores the input that the user types into the form
    const userEmailInput = document.querySelector(".email-input").value;
    console.log(userEmailInput);

    //* validator.js library to validate email input
    const validation = validator.isEmail(userEmailInput);


    // * function that runs when the email entered is incorrect
    emailIncorrect = () => {
        //* the input textbox turns red
        inputBox.classList.add("email-input-error");

        //* the error message is displayed
        errorMsg.classList.remove("display-none");
        errorMsg.classList.add("error-message-styles");
    }


    // * function that does some styling when the user types in the correct email 
    emailCorrect = () => {

        // * the main card disappears
        mainCard.classList.add("display-none");

        //* the thank you card appears
        thankYouCard.classList.remove("display-none");
        thankYouCard.classList.add("display-block");
        userEmailInsert.innerText = userEmailInput;
    }

    //* conditional statement to run the either of the functions  based on whether the email input is correct or not
    !validation ? emailIncorrect() : emailCorrect();

})



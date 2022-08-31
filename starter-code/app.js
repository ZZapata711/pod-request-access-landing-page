const email = document.querySelector("#email");
const form = document.querySelector("#form");
const submit = document.querySelector("#submit");

submit.addEventListener('click', (event) => {
    console.log(email.value);
    if (email.value === "" || email.validity.typeMismatch) {
        email.setCustomValidity("Oops! Please check your email.");
        email.reportValidity();
    }
    else {
        email.value = "";
        email.setCustomValidity("Your email has been submitted successfully!");
        email.reportValidity();
    }
})

// email.addEventListener('submit', (event) => {
//     if (email.validity.typeMismatch) {
//         email.setCustomValidity("Oops! Please check your email.");
//         email.reportValidity();
//     }
//     else {
//         email.setCustomValidity("");
//     }
// });
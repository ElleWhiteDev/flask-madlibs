document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("madlib-form");
    form.addEventListener("submit", function (event) {
        if (!validateForm()) {
			event.preventDefault();
		} else {
			convertInputsToLowerCase();
		}
    });
});

function showSnackbar(message) {
    const snackbar = document.getElementById("snackbar");
    snackbar.innerText = message;
    snackbar.classList.remove("hidden");
    setTimeout(() => {
        snackbar.classList.add("hidden");
    }, 3000);
}

function validateForm() {
    const inputs = document.getElementsByTagName("input");
    let isValid = true;

    for (let input of inputs) {
        if (input.value.trim().length < 3) {
            isValid = false;
            input.classList.add("invalid");
        } else {
            input.classList.remove("invalid");
        }
    }

    if (!isValid) {
        showSnackbar("Please enter at least 3 characters for all fields.");
    }

    return isValid;
}


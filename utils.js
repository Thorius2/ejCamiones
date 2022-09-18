const showError = (input, message) => {

    input.textContent = message

    errorField.classList.remove("success");
    errorField.classList.add("error");

    errorField.textContent = message;
    addClassHidden("hide");
    cardContainer.innerHTML = "";

}
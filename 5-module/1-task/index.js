function hideSelf() {
    let buttons = document.querySelectorAll(`.hide-self-button`); 
    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i]; 
        button.addEventListener("click", function () {
            button.hidden = true;
        });
    }
}

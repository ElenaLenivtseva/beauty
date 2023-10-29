
function bindMenu(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector);
        

    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            // item.style.opacity = "0";
            modal.style.display = "block";
            document.body.style.overflowY = "hidden";
        });
    });
    close.addEventListener('click', () => {
        // trigger[0].style.opacity = "1";
        modal.style.display = "none";
        document.body.style.overflowY = "visible";
    }); 
}
bindMenu(".form_modal__open", ".form__wrap", ".close__form");
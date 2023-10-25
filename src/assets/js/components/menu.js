
function bindMenu(triggerSelector, modalSelector, closeSelector, linkSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          menuList = modal.querySelectorAll(linkSelector);
          
    menuList.forEach(item => {
        item.addEventListener('click', (e) => {
            trigger[0].style.opacity = "1";
            modal.style.display = "none";
        });
    });

    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            item.style.opacity = "0";
            modal.style.display = "block";
        });
    });
    close.addEventListener('click', () => {
        trigger[0].style.opacity = "1";
        modal.style.display = "none";
    }); 
}
// function moveToSection(triggerSelector, modalSelector, linkSelector) {
//     const trigger = document.querySelectorAll(triggerSelector),
//           modal = document.querySelector(modalSelector),
//           menuList = modal.querySelectorAll(linkSelector);

//     menuList.forEach(item => {
//         item.addEventListener('click', (e) => {
//             trigger[0].style.opacity = "1";
//             modal.style.display = "none";
//         });
//     });

// }
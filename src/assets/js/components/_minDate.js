function setMinDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; 
    let yyyy = today.getFullYear();

    if (dd < 10) {
    dd = '0' + dd;
    }

    if (mm < 10) {
    mm = '0' + mm;
    } 
        
    today = yyyy + '-' + mm + '-' + dd;
    let dates = document.querySelectorAll('.form__date');
    console.log(dates)
    for (let i = 0; i < dates.length; i++) {
        dates[i].setAttribute("min", today); 
    }
}
setMinDate()
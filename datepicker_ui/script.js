const calendarButton = document.querySelector('.calendaar-button');
const calendarPopup = document.querySelector('.calendar-popup');

calendarButton.addEventListener('click', function() {
    //toggle display
    if (calendarPopup.style.display === 'none' || calendarPopup.style.display === '' ){
        calendarPopup.style.display = 'block';
    } else {
        calendarPopup.style.display ='none';
    }
});
const calendarButton = document.querySelector('.calendar-button');
const calendarPopup = document.querySelector('.calendar-popup');

calendarButton.addEventListener('click', function() {
    //toggle display
    if (calendarPopup.style.display === 'none' || calendarPopup.style.display === '' ){
        calendarPopup.style.display = 'block';
    } else {
        calendarPopup.style.display ='none';
    }
});

const dateInput = document.querySelector('.input-wrapper input');

const dateCells = document.querySelectorAll('.date-grid div');

dateCells.forEach(function(cell) {
    cell.addEventListener('click', function() {
        const selectedDate = cell.textContent;
        dateInput.value = selectedDate + ' / ' + (currentDisplayedMonth + 1) + ' / ' + currentDisplayedYear;
        calendarPopup.style.display = 'none';
    });
});

document.addEventListener('click', function(event) {
    const isClickInside = calendarPopup.contains(event.target) || calendarButton.contains(event.target);

    if (!isClickInside) {
        calendarPopup.style.display = 'none';
    }
});

const monthYearDisplay = document.querySelector('.month-year');
const today = new Date();

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const currentMonth = today.getMonth(); // 0-11
const currentYear = today.getFullYear();

let currentDisplayedMonth = currentMonth;
let currentDisplayedYear = currentYear;

monthYearDisplay.textContent = monthNames[currentMonth] + ' ' + currentYear;

const todayDate = today.getDate(); // day of month (1-31)

highlightToday();

function highlightToday() {
    if (currentDisplayedMonth === currentMonth && currentDisplayedYear === currentYear) {
        dateCells.forEach(function(cell) {
            if (parseInt(cell.textContent) === todayDate) {
                cell.classList.add('today');
            } else {
                cell.classList.remove('today'); // remove if not today
            }
        });
    } else {
        // Remove today highlight when not current month
        dateCells.forEach(function(cell) {
            cell.classList.remove('today');
        });
    }
}

const prevButton = document.querySelector('.prev-arrow');
const nextButton = document.querySelector('.next-arrow');

function updateCalendar() {
    monthYearDisplay.textContent = monthNames[currentDisplayedMonth] + ' ' + currentDisplayedYear;
}

prevButton.addEventListener('click', function() {
    currentDisplayedMonth--;
    if (currentDisplayedMonth < 0) {
        currentDisplayedMonth = 11;
        currentDisplayedYear--;
    }
    updateCalendar();
    highlightToday(); 
});

nextButton.addEventListener('click', function() {
    currentDisplayedMonth++;
    if (currentDisplayedMonth > 11) {
        currentDisplayedMonth = 0;
        currentDisplayedYear++;
    }
    updateCalendar();
    highlightToday();
});
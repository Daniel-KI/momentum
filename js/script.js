const timeField = document.querySelector('.time'),
    dateField = document.querySelector('.date'),
    greetingField = document.querySelector('.greeting'),
    quoteField = document.querySelector('.quote-text'),
    usernameField = document.querySelector('.username'),
    focusField = document.querySelector('.focus-text');

function clock() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    let currentDate = new Date();
    let h = currentDate.getHours().toString();
    let m = currentDate.getMinutes().toString();
    let s = currentDate.getSeconds().toString();

    if (h.length < 2) {
        h = '0' + h;
    }
    if (m.length < 2) {
        m = '0' + m;
    }
    if (s.length < 2) {
        s = '0' + s;
    }

    let timeString = h + ':' + m + ':' + s;
    let dateString = currentDate.toLocaleDateString('en', options);
    timeField.textContent = timeString;
    dateField.textContent = dateString;
    setTimeout(clock, 1000);
}

function setGreetAndBg() {
    // TO DO: добавить смену карнитки в зависимости от времени суток
    let today = new Date(),
        hour = today.getHours();

    if (hour > 6 && hour < 12) {
        // Morning
        greetingField.textContent = 'Good Morning, ';
    } else if (hour > 12 && hour < 18) {
        // Afternoon
        greetingField.textContent = 'Good Afternoon, ';
    } else if (hour > 18 && hour < 24) {
        // Evening
        greetingField.textContent = 'Good Evening, ';
    }
    else {
        //Night
        greetingField.textContent = 'Good Night, ';
    }
}

function getUsername() {
    if (localStorage.getItem('usernameField') === null || localStorage.getItem('usernameField') === '') {
        usernameField.textContent = '[Enter Name]';
    } else {
        usernameField.textContent = localStorage.getItem('usernameField');
    }
}

function setUsername(event) {
    if (event.type === 'keypress') {
        if (event.which == 13 || event.keyCode == 13) {
            localStorage.setItem('usernameField', event.target.innerText);
            usernameField.blur();
        }
    } else {
        localStorage.setItem('usernameField', event.target.innerText);
    }
}


function getFocusText() {
    if (localStorage.getItem('focusField') === null || localStorage.getItem('focusField') === '') {
        focusField.textContent = '[Enter Focus]';
    } else {
        focusField.textContent = localStorage.getItem('focusField');
    }
}

function setFocusText(event) {
    if (event.type === 'keypress') {
        if (event.which == 13 || event.keyCode == 13) {
            localStorage.setItem('focusField', event.target.innerText);
            focusField.blur();
        }
    } else {
        localStorage.setItem('focusField', event.target.innerText);
    }
}

usernameField.addEventListener('keypress', setUsername);
usernameField.addEventListener('blur', setUsername);
focusField.addEventListener('keypress', setFocusText);
focusField.addEventListener('blur', setFocusText);

clock();
setGreetAndBg();
getUsername();
getFocusText();

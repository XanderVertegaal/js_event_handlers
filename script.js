const myButton = document.querySelector('#mybutton');
const bgButton = document.querySelector('#buttonBg');

const alertEvent = function () {
    alert('Button clicked!');
}

// Separately defined function
myButton.addEventListener('click', alertEvent);

// Immediately called anonymous function
bgButton.addEventListener('click', function () {
    document.body.classList.toggle('red-background')
})


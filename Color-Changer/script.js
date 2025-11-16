const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");


buttons.forEach(function (button){
    console.log(button);
    button.addEventListener("click", function(event){
        console.log(event);
        console.log(event.target);
        if (event.target.id === 'pink') {
            body.style.backgroundColor = 'yellow';
        }
        if (event.target.id === 'Red') {
            body.style.backgroundColor = 'green';
        }
        if (event.target.id === 'Blue') {
            body.style.backgroundColor = 'Gray';
        }
        if (event.target.id === 'Orange') {
            body.style.backgroundColor = 'purple';
        }
    });
});

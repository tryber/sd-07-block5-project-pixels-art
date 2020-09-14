window.onload = function () {
    let pixels = document.querySelectorAll('.pixel');
    let clear = document.getElementById('clear-board');


    pixels.forEach(function (index) {
        index.addEventListener('click', function () {
            let selected = document.querySelector('.selected');
            index.style.backgroundColor = window.getComputedStyle(selected).backgroundColor;
        });
    });

    clear.addEventListener('click', function () {
        pixels.forEach(function (index) {
            index.style.backgroundColor = "rgb(255, 255, 255)";
        })
    })
}
function newSelected(newSelected) {
    let color = document.querySelector('.selected');
    document.querySelector('.selected').classList.remove('selected');
    newSelected.classList.add('selected');
    console.log(newSelected);   
}
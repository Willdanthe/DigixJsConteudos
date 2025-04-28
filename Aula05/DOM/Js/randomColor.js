document.addEventListener('DOMContentLoaded', function(){
    const color = document.getElementById('color');

    color.addEventListener('click', function() {
        const randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16);

        color.style.backgroundColor = randomColor;

        console.log(randomColor);
        
    })
})
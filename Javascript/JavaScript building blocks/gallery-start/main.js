const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imgArr = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

/* Looping through images */
for (const image of imgArr) {
    const imgTag = document.createElement('img');
    imgTag.src = `images/${image}`;
    thumbBar.appendChild(imgTag);
}

function selectImg(event){
    imgSrc = event.target.src;
    displayedImage.setAttribute('src',imgSrc)
}

thumbBar.addEventListener('click', event => selectImg(event))
/* Wiring up the Darken/Lighten button */

function changeLight(){
    if(btn.textContent === 'Darken'){
        overlay.style.background = "rgba(0,0,0,.6)"
        btn.textContent = "Lighten"
    } else{
        overlay.style.background = "rgba(0,0,0,0)"
        btn.textContent = "Darken"
    }
}

btn.addEventListener('click',changeLight)
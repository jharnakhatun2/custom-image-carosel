const images = [
    'images/pic-1.png',
    'images/pic-2.png',
    'images/pic-3.png',
    'images/pic-4.png',
    'images/pic-5.png',
    'images/pic-6.png',
    'images/pic-7.png',
    'images/pic-8.png',
    'images/pic-9.png'
];


let imgIndex = 0;
const img = document.getElementById('slider');
setInterval(() =>{
    if(imgIndex ===images.length){
        imgIndex = 0;
    }
    const imgLink = images[imgIndex];
    img.setAttribute('src', imgLink);
    imgIndex++;
},1200);

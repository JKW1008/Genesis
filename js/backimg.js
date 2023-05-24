const bigImage = document.getElementById("bigImage");

const images = [
  "./images/1.jpeg",
  "./images/2.jpeg",
  "./images/3.jpeg",
  "./images/4.webp",
  "./images/5.jpg",
  "./images/6.jpeg",
  "./images/7.jpeg",
  "./images/8.jpg",
  "./images/9.jpg",
  "./images/10.jpg",
  "./images/11.jpg",
  "./images/12.jpg",
  "./images/13.jpg",
  "./images/14.jpg",
  "./images/15.jpg",
  "./images/16.jpg",
  "./images/17.jpg",
  "./images/18.jpg",
  "./images/19.jpg",
];

const choosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = `url(${choosenImage})`;

bigImage.style.backgroundImage = bgImage;

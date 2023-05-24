let observer = new IntersectionObserver((e) => {
  e.forEach((Box) => {
    if (Box.isIntersecting) {
      Box.target.style.opacity = 1;
    } else {
      Box.target.style.opacity = 0;
    }
  });
});

let box = document.querySelectorAll(".product");

observer.observe(box[0]);
observer.observe(box[1]);
observer.observe(box[2]);
observer.observe(box[3]);
observer.observe(box[4]);
observer.observe(box[5]);

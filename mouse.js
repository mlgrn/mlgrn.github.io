// boilerplate to set up HTML canvas.
const canvas = document.getElementById("canvas1");

// getContext can be passed 2d or WebGL.
// This ctx (short for context)variable will return an object.
// basically a bunch of properites we can change to do stuff
const ctx = canvas.getContext("2d");
canvas.height = ($(".intro").outerHeight() / $(".intro").outerHeight()) * 687;
// canvas.width = $(".intro").width();
canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
let hue = 0;
const particlesArray = [];

// Things we draw will distort & stretch if browser window is resized.
// this eventListener takes a function that redraws the canvas
// when the window is resized

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = ($(".intro").outerHeight() / $(".intro").outerHeight()) * 687;
  //    ctx.fillStyle = "white"
  // ctx.fillRect(10, 10, 150, 50)
  // uncomment the above two lines to see how canvas deals with resizing
});

const mouse = {
  x: undefined,
  y: undefined,
};
canvas.addEventListener("click", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  // control how many particles are generated on click here
  for (let i = 0; i < 80; i++) {
    particlesArray.push(new Particle());
  }
});

canvas.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  // control how many particles are generated on mousemove here
  for (let i = 0; i < 1; i++) {
    particlesArray.push(new Particle());
  }
});

// changes the --clr-accent css variable as the mouse moves to current value of hue. Commented out original function and moved it into a handler function to add multiple eventlisteners. Wanted colors to change on mobile Scroll.
document.addEventListener("mousemove", colorHandler);
document.addEventListener("scroll", colorHandler);

// document.addEventListener('mousemove', (event => {
//     let hslColor = 'hsl(' + hue + ', 100%, 70%)'
//     const r = document.querySelector(':root')
//     r.style.setProperty('--clr-accent', hslColor)
// }))
function colorHandler(event) {
  let hslColor = "hsl(" + hue + ", 100%, 70%)";
  const r = document.querySelector(":root");
  r.style.setProperty("--clr-accent", hslColor);
}

// this class will be used to create lots of Particle objects.
// inside the constructor() is all of their properties.
class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;

    this.size = Math.random() * 10 + 1;
    this.speedX = Math.random() * 3 - 2;
    this.speedY = Math.random() * 3 - 2;
    this.color = "hsl(" + hue + ", 100%, 50%)";
  }
  // methods are functions on an object.
  // This is a method on the Particle object.
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.lineWidth = 1;
    // we need this to tell canvas to 'put the brush on the screen'
    ctx.beginPath();
    // args are (x position, y position, radius, starting point in degress, how far to draw)
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function handleParticle() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();

    for (let j = i; j < particlesArray.length; j++) {
      const dx = particlesArray[i].x - particlesArray[j].x;
      const dy = particlesArray[i].y - particlesArray[j].y;
      const distance = Math.sqrt(dx ** 2 + dy ** 2);

      if (distance < 100) {
        ctx.beginPath();
        ctx.lineWidth = particlesArray[i].size / 20;
        ctx.strokeStyle = particlesArray[i].color;
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.stroke();
      }
    }
    if (particlesArray[i].size <= 0.4) {
      particlesArray.splice(i, 1);
      i--;
    }
  }
}

function animate() {
  // this clears the entire canvas

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillStyle = 'rgba(0,0,0,0.01'
  // ctx.fillRect(0, 0, canvas.width, canvas.height)
  handleParticle();
  hue += 4;

  //this function calls a function we pass as an arg 1 time
  //since it calls itself, a loop is created
  requestAnimationFrame(animate);
}

animate();

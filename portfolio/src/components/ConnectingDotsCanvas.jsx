export function initCanvasDots() {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const colorDot = "#CECECE";
  const color = "#CECECE";

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = "block";
  ctx.fillStyle = colorDot;
  ctx.lineWidth = 0.1;
  ctx.strokeStyle = color;

  const mousePosition = {
    x: canvas.width / 2,
    y: canvas.height / 2,
  };

  const dots = {
    nb: 600,
    distance: 60,
    d_radius: 100,
    array: [],
  };

  function Dot() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = -0.5 + Math.random();
    this.vy = -0.5 + Math.random();
    this.radius = Math.random();
  }

  Dot.prototype = {
    create: function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fill();
    },

    animate: function () {
      for (let i = 0; i < dots.nb; i++) {
        const dot = dots.array[i];

        if (dot.y < 0 || dot.y > canvas.height) {
          dot.vx = dot.vx;
          dot.vy = -dot.vy;
        } else if (dot.x < 0 || dot.x > canvas.width) {
          dot.vx = -dot.vx;
          dot.vy = dot.vy;
        }
        dot.x += dot.vx;
        dot.y += dot.vy;
      }
    },

    line: function () {
      if (window.innerWidth < 768) {
        // Proveri da li je ekran manji od 768px (mobilni uređaji)
        return; // Preskoči crtanje linija
      }

      for (let i = 0; i < dots.nb; i++) {
        for (let j = 0; j < dots.nb; j++) {
          const i_dot = dots.array[i];
          const j_dot = dots.array[j];

          if (
            Math.abs(i_dot.x - j_dot.x) < dots.distance &&
            Math.abs(i_dot.y - j_dot.y) < dots.distance
          ) {
            if (
              Math.abs(i_dot.x - mousePosition.x) < dots.d_radius &&
              Math.abs(i_dot.y - mousePosition.y) < dots.d_radius
            ) {
              ctx.beginPath();
              ctx.moveTo(i_dot.x, i_dot.y);
              ctx.lineTo(j_dot.x, j_dot.y);
              ctx.stroke();
              ctx.closePath();
            }
          }
        }
      }
    },
  };

  function createDots() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < dots.nb; i++) {
      dots.array.push(new Dot());
      const dot = dots.array[i];
      dot.create();
    }

    if (window.innerWidth >= 768) {
      // Ako je ekran veći od 768px
      dots.array.forEach((dot) => {
        dot.line();
      });
    }
    dots.array.forEach((dot) => {
      dot.animate();
    });
  }

  window.onmousemove = function (event) {
    mousePosition.x = event.pageX;
    mousePosition.y = event.pageY;
  };

  setInterval(createDots, 1000 / 30);
}

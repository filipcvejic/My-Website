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

  const isMobile = window.innerWidth <= 768;
  const numDots = isMobile ? 200 : 600;
  const distance = isMobile ? 30 : 60;
  const dRadius = isMobile ? 50 : 100;

  const mousePosition = {
    x: (30 * canvas.width) / 100,
    y: (30 * canvas.height) / 100,
  };

  const dots = {
    nb: numDots,
    distance: distance,
    d_radius: dRadius,
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
      if (isMobile) return;

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

    dots.array[0].line();
    dots.array[0].animate();
  }

  if (!isMobile) {
    window.onmousemove = function (parameter) {
      mousePosition.x = parameter.pageX;
      mousePosition.y = parameter.pageY;
    };
  }

  mousePosition.x = window.innerWidth / 2;
  mousePosition.y = window.innerHeight / 2;

  setInterval(createDots, 1000 / 30);
}

window.onload = function () {
  initCanvasDots();
};

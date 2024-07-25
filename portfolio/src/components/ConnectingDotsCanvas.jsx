import React, { useEffect, useRef } from "react";

const CanvasDots = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const colorDot = "gray";
    const color = "gray";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = "block";
    ctx.fillStyle = colorDot;
    ctx.lineWidth = 0.2;
    ctx.strokeStyle = color;

    const mousePosition = {
      x: (30 * canvas.width) / 100,
      y: (30 * canvas.height) / 100,
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
      this.radius = Math.random() + 0.5;
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
            dot.vy = -dot.vy;
          } else if (dot.x < 0 || dot.x > canvas.width) {
            dot.vx = -dot.vx;
          }
          dot.x += dot.vx;
          dot.y += dot.vy;
        }
      },

      line: function () {
        if (window.innerWidth >= 1024) {
          for (let i = 0; i < dots.nb; i++) {
            for (let j = 0; j < dots.nb; j++) {
              const i_dot = dots.array[i];
              const j_dot = dots.array[j];
              if (
                i_dot.x - j_dot.x < dots.distance &&
                i_dot.y - j_dot.y < dots.distance &&
                i_dot.x - j_dot.x > -dots.distance &&
                i_dot.y - j_dot.y > -dots.distance
              ) {
                if (
                  i_dot.x - mousePosition.x < dots.d_radius &&
                  i_dot.y - mousePosition.y < dots.d_radius &&
                  i_dot.x - mousePosition.x > -dots.d_radius &&
                  i_dot.y - mousePosition.y > -dots.d_radius
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
      Dot.prototype.line();
      Dot.prototype.animate();
    }

    window.onmousemove = function (event) {
      mousePosition.x = event.pageX;
      mousePosition.y = event.pageY;
    };

    mousePosition.x = window.innerWidth / 2;
    mousePosition.y = window.innerHeight / 2;

    const interval = setInterval(createDots, 1000 / 30);

    return () => {
      clearInterval(interval);
      window.onmousemove = null;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-40 overflow-hidden pointer-events-none"
    />
  );
};

export default CanvasDots;

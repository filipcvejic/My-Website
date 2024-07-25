import React, { useRef, useEffect } from "react";

const ConnectingDotsCanvas = () => {
  const canvasRef = useRef(null);
  const dots = useRef([]);
  const numDots = 50; // Manji broj tačaka radi bolje performanse
  const minWidth = 1024; // Minimalna širina prozora za crtanje linija
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const Dot = () => {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = -0.1 + Math.random() * 0.2; // Sporiji pokreti
      this.vy = -0.1 + Math.random() * 0.2; // Sporiji pokreti
      this.radius = Math.random() * 2 + 1; // Malo veće tačke
    };

    Dot.prototype = {
      create: function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = "#CECECE";
        ctx.fill();
      },

      animate: function () {
        for (let i = 0; i < dots.current.length; i++) {
          const dot = dots.current[i];

          if (dot.y < 0 || dot.y > canvas.height) {
            dot.vy = -dot.vy;
          }
          if (dot.x < 0 || dot.x > canvas.width) {
            dot.vx = -dot.vx;
          }

          dot.x += dot.vx;
          dot.y += dot.vy;
        }
      },

      line: function () {
        if (window.innerWidth < minWidth) {
          // Proveri da li je ekran manji od 1024px
          return; // Preskoči crtanje linija
        }

        ctx.strokeStyle = "#CECECE"; // Boja linija
        ctx.lineWidth = 0.5;

        for (let i = 0; i < dots.current.length; i++) {
          for (let j = i + 1; j < dots.current.length; j++) {
            const i_dot = dots.current[i];
            const j_dot = dots.current[j];

            const dist = Math.sqrt(
              (i_dot.x - j_dot.x) ** 2 + (i_dot.y - j_dot.y) ** 2
            );

            if (dist < 100) {
              // Raspon linija
              ctx.beginPath();
              ctx.moveTo(i_dot.x, i_dot.y);
              ctx.lineTo(j_dot.x, j_dot.y);
              ctx.stroke();
              ctx.closePath();
            }
          }
        }
      },
    };

    const createDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (dots.current.length === 0) {
        for (let i = 0; i < numDots; i++) {
          dots.current.push(new Dot());
        }
      }

      dots.current.forEach((dot) => {
        dot.create();
      });

      if (window.innerWidth >= minWidth) {
        dots.current.forEach((dot) => {
          dot.line();
        });
      }
      dots.current.forEach((dot) => {
        dot.animate();
      });
    };

    window.onmousemove = function (event) {
      mousePosition.current.x = event.pageX;
      mousePosition.current.y = event.pageY;
    };

    const animate = () => {
      createDots();
      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default ConnectingDotsCanvas;

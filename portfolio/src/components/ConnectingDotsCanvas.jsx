import React, { useRef, useEffect } from "react";

const ConnectingDotsCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dots = [];
    const numDots = 10;
    const minWidth = 1024; // Minimalna širina prozora za crtanje linija

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (window.innerWidth >= minWidth) {
        ctx.strokeStyle = "#00f"; // Boja linija
        ctx.lineWidth = 2;

        // Crtaj linije između tačaka
        for (let i = 0; i < dots.length; i++) {
          for (let j = i + 1; j < dots.length; j++) {
            const dist = Math.sqrt(
              (dots[j].x - dots[i].x) ** 2 + (dots[j].y - dots[i].y) ** 2
            );
            if (dist < 150) {
              // Raspon linija
              ctx.beginPath();
              ctx.moveTo(dots[i].x, dots[i].y);
              ctx.lineTo(dots[j].x, dots[j].y);
              ctx.stroke();
            }
          }
        }
      }

      // Crtaj tačke
      ctx.fillStyle = "#00f"; // Boja tačaka
      for (const dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 3, 0, 2 * Math.PI);
        ctx.fill();
      }
    };

    const updateDots = () => {
      dots.length = 0;
      for (let i = 0; i < numDots; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
        });
      }
      drawDots();
    };

    const animate = () => {
      updateDots();
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
    <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />
  );
};

export default ConnectingDotsCanvas;

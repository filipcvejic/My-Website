export function startAnimation(section) {
  const container = document.querySelector(`.${section}-wrapper`);
  const background = document.querySelector(`.${section}-background-animation`);
  if (!container || !background) return;

  const circles = [];
  const numCircles = 10;

  for (let i = 0; i < numCircles; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");

    const size = Math.random() * 10 + 14;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    const x = Math.random() * (container.clientWidth - size);
    const y = Math.random() * (container.clientHeight - size);

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    let speedMultiplier = Math.random() * 1.75 + 0.7;
    const dx = (Math.random() - 0.5) * 2 * speedMultiplier;
    const dy = (Math.random() - 0.5) * 2 * speedMultiplier;

    if (i % 2 === 0) {
      circle.classList.add("circle-border");
    } else {
      circle.classList.add("circle-full");
    }

    circles.push({ element: circle, x, y, size, dx, dy });

    background.appendChild(circle);
  }

  function animate() {
    circles.forEach((circle) => {
      circle.x += circle.dx;
      circle.y += circle.dy;

      if (circle.x <= 0 || circle.x + circle.size >= container.clientWidth) {
        circle.dx *= -1;
      }

      if (circle.y <= 0 || circle.y + circle.size >= container.clientHeight) {
        circle.dy *= -1;
      }

      circle.element.style.left = `${circle.x}px`;
      circle.element.style.top = `${circle.y}px`;
    });

    requestAnimationFrame(animate);
  }

  animate();
}

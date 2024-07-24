let circlesInitialized = false;

export function skillsAnimation() {
  if (circlesInitialized) return;

  const container = document.querySelector(".skills-list-wrapper");
  const background = document.querySelector(
    ".skills-list-background-animation"
  );
  if (!container || !background) return;

  const circles = [];
  const numCircles = 10;
  const rows = Math.ceil(Math.sqrt(numCircles));
  const cols = Math.ceil(numCircles / rows);

  const cellWidth = container.clientWidth / cols;
  const cellHeight = container.clientHeight / rows;

  const circleTypes = ["circle-border", "circle-full"];
  const usedPositions = new Set();

  for (let i = 0; i < numCircles; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");

    const size = Math.random() * 10 + 14;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    let x, y;
    let position;
    do {
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);

      x = col * cellWidth + Math.random() * (cellWidth - size);
      y = row * cellHeight + Math.random() * (cellHeight - size);

      position = `${row}-${col}`;
    } while (usedPositions.has(position));

    usedPositions.add(position);

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    const type = circleTypes[Math.floor(Math.random() * circleTypes.length)];
    circle.classList.add(type);

    circles.push({ element: circle, x, y, size });

    background.appendChild(circle);
  }

  function animateCircle(circle) {
    const moveX = Math.random() * 100 - 50;
    const moveY = Math.random() * 100 - 50;

    circle.element.style.transition = "transform 2s ease";
    circle.element.style.transform = `translate(${moveX}px, ${moveY}px)`;

    setTimeout(() => {
      circle.element.style.transform = "translate(0, 0)";
    }, 2000);

    setTimeout(() => {
      animateCircle(circle);
    }, 4000);
  }

  circles.forEach((circle) => {
    const initialDelay = Math.random() * 2000;
    setTimeout(() => {
      animateCircle(circle);
    }, initialDelay);
  });

  circlesInitialized = true;
}

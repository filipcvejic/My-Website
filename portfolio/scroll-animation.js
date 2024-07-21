export function scrollAnimation() {
  const maxScrollCount = 5; // Maksimalan broj skrolova pre prelaska na sledeći projekat
  let scrollCount = 0; // Brojač skrolova

  const handleWheel = (event) => {
    const sections = document.querySelectorAll(".single-project");
    const projectsSection = document.getElementById("projects");

    if (!sections.length || !projectsSection) return;

    // Proveri da li je trenutni skrol u sekciji sa projektima
    const isInProjectsSection =
      projectsSection.getBoundingClientRect().top <= window.innerHeight &&
      projectsSection.getBoundingClientRect().bottom >= 0;

    if (!isInProjectsSection) {
      // Ako se ne nalazimo u sekciji sa projektima, dozvoli normalno skrolovanje
      return;
    }

    event.preventDefault(); // Sprečava normalno skrolovanje samo unutar sekcije sa projektima

    // Odredi trenutnu sekciju
    let currentSectionIndex = -1;
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const rect = section.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        currentSectionIndex = i;
        break;
      }
    }

    if (currentSectionIndex === -1) return; // Nema trenutne sekcije

    // Odredi sledeću sekciju
    let nextSectionIndex = currentSectionIndex;
    if (event.deltaY > 0) {
      // Skrolovanje nadole
      nextSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
    } else {
      // Skrolovanje nagore
      nextSectionIndex = Math.max(currentSectionIndex - 1, 0);
    }

    if (nextSectionIndex !== currentSectionIndex) {
      scrollCount++;

      if (scrollCount >= maxScrollCount) {
        // Smooth scroll na sledeću sekciju
        sections[nextSectionIndex].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        // Resetuj brojač skrolovanja
        scrollCount = 0;
      }
    }
  };

  window.addEventListener("wheel", handleWheel, { passive: false });

  return () => {
    window.removeEventListener("wheel", handleWheel);
  };
}

// export function scrollAnimation() {
//   const maxScrollCount = 5;
//   let scrollCount = 0;

//   const handleWheel = (event) => {
//     const sections = document.querySelectorAll(".single-project");
//     const projectsSection = document.getElementById("projects");

//     if (!sections.length || !projectsSection) return;

//     const isInProjectsSection =
//       projectsSection.getBoundingClientRect().top <= window.innerHeight &&
//       projectsSection.getBoundingClientRect().bottom >= 0;

//     if (!isInProjectsSection) {
//       return;
//     }

//     event.preventDefault();

//     let currentSectionIndex = -1;
//     for (let i = 0; i < sections.length; i++) {
//       const section = sections[i];
//       const rect = section.getBoundingClientRect();
//       if (
//         rect.top <= window.innerHeight / 2 &&
//         rect.bottom >= window.innerHeight / 2
//       ) {
//         currentSectionIndex = i;
//         break;
//       }
//     }

//     if (currentSectionIndex === -1) return;

//     let nextSectionIndex = currentSectionIndex;
//     if (event.deltaY > 0) {
//       nextSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
//     } else {
//       nextSectionIndex = Math.max(currentSectionIndex - 1, 0);
//     }

//     if (nextSectionIndex !== currentSectionIndex) {
//       scrollCount++;

//       if (scrollCount >= maxScrollCount) {
//         sections[nextSectionIndex].scrollIntoView({
//           behavior: "smooth",
//           block: "center",
//         });

//         scrollCount = 0;
//       }
//     }
//   };

//   window.addEventListener("wheel", handleWheel, { passive: false });

//   return () => {
//     window.removeEventListener("wheel", handleWheel);
//   };
// }

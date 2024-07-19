export function scrollAnimation() {
  let scrollCount1 = 0;
  let scrollCount2 = 0;
  const maxScrollCount = 5;

  window.addEventListener("wheel", function (event) {
    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");
    const progressBar1 = document.getElementById("progress-bar1");
    const progressBar2 = document.getElementById("progress-bar2");

    const section2Middle =
      section2.offsetTop + section2.offsetHeight / 2 - window.innerHeight / 2;
    const section1Middle =
      section1.offsetTop + section1.offsetHeight / 2 - window.innerHeight / 2;

    // Spreči defaultno ponašanje skrolovanja
    event.preventDefault();

    if (window.scrollY < section2.offsetTop) {
      // Skrolovanje sa prve sekcije na drugu
      if (event.deltaY > 0) {
        scrollCount1++;
      } else {
        scrollCount1 = 0; // Resetuj broj ako je skrolovanje nagore
      }

      // Ažuriraj širinu progress bara za prvu sekciju
      let progressPercentage1 = (scrollCount1 / maxScrollCount) * 100;
      progressBar1.style.width = progressPercentage1 + "%";
      // Ako je skrolovanje nadole 5 puta, prebaci na drugu sekciju
      if (scrollCount1 >= maxScrollCount) {
        window.scrollTo({
          top: section2Middle,
          behavior: "smooth",
        });

        // Resetuj broj nakon skrolovanja i progress bar
        scrollCount1 = 0;
        progressBar1.style.width = "0%";
      }
    } else {
      // Skrolovanje sa druge sekcije na prvu
      if (event.deltaY < 0) {
        scrollCount2++;
      } else {
        scrollCount2 = 0; // Resetuj broj ako je skrolovanje nadole
      }

      // Ažuriraj širinu progress bara za drugu sekciju
      let progressPercentage2 = (scrollCount2 / maxScrollCount) * 100;
      progressBar2.style.width = progressPercentage2 + "%";

      // Ako je skrolovanje nagore 5 puta, prebaci na prvu sekciju
      if (scrollCount2 >= maxScrollCount) {
        window.scrollTo({
          top: section1Middle,
          behavior: "smooth",
        });

        // Resetuj broj nakon skrolovanja i progress bar
        scrollCount2 = 0;
        progressBar2.style.width = "0%";
      }
    }
  });
}

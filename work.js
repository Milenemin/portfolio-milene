// Ball follows mouse
const ball = document.querySelector(".ball");
const leftSide = document.querySelector(".work-scale");

leftSide.addEventListener("mousemove", (e) => {
  const rect = leftSide.getBoundingClientRect();
  const y = e.clientY - rect.top;
  const percent = y / rect.height;
  ball.style.top = `${percent * 52 + 20}%`;
  ball.style.left = `${36 + percent * 8}%`;
});

// Click project name → scroll to it
document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    project.addEventListener("click", () => {
      const key = project.dataset.project;
      const target = document.getElementById(key);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      document.addEventListener("DOMContentLoaded", function () {
        const projects = document.querySelectorAll(".project");

        projects.forEach((project) => {
          project.addEventListener("click", () => {
            const key = project.dataset.project;
            const target = document.getElementById(key);
            if (!target) return;

            setTimeout(() => {
              target.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 800); // change this number — bigger = longer wait before scrolling
          });
        });
      });
    });
  });
});

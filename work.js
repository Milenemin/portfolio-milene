console.log("JS loaded");
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM ready");

  const projectData = {
    tango: {
      title: "Tango Urquiza",
      description: `
        <h3>The Challenge</h3>
        <p>
          Tango Urquiza is a tango school in the heart of Copenhagen. 
          The goal was to update their website to improve user-friendliness, 
          reduce visual clutter, and create a more playful and engaging visual identity.
        </p>
    
        <h3>The Solution</h3>
        <p>
          Through user research, including interviews and a 5-scale questionnaire, 
          we identified key user needs and design preferences. I contributed by 
          conducting research, developing prototypes in Figma, and translating 
          the final design into code. The process included iterative testing and 
          refinement to ensure a cohesive visual identity and improved usability 
          across devices.
        </p>
    
        <a href="#" target="_blank">Visit Website</a>
      `,
    },
    blooming: {
      title: "Blooming Beauty",
      description: `
        <h3>The Challenge</h3>
       Blooming Beauty is a fictional skincare brand created to explore brand identity, user experience, and interactive design. The goal was to develop a visually cohesive and engaging universe that appealed to a younger audience while maintaining trust and inclusivity.
    
        <h3>The Solution</h3>
       My role focused on concept and experience design. I developed prototypes, generated AI visuals aligned with the brand’s tone of voice, designed and coded an interactive “Discover Your Skin Type” quiz to guide users toward relevant products. To strengthen engagement, I created a timed pop-up inviting users to “Join our Blooming Community,” reinforcing an inclusive and welcoming brand feel.
    
        <a href="#" target="_blank">Visit Website</a>
      `,
    },
    poetry: {
      title: "Poetry Website",
      description: `
        <h3>The Challenge</h3>
       The goal was to create a digital space that could present poetry and photography in a cohesive and atmospheric way — without overdesigning or distracting from the art itself. The challenge was balancing simplicity with emotional depth.
    
        <h3>The Solution</h3>
       I designed and coded a minimal, 90s-inspired interface that allows each poem and image to stand independently. I collaborated with photographers to ensure visual coherence between text and imagery. Each section includes a voice note (MP3) of me reading a poem, adding intimacy and dimensionality to the experience. As a dedicated writer of poetry, this project highlights my strength in storytelling, tone, and conceptual cohesion — skills that strongly inform my design work.
    
        <a href="#" target="_blank">Visit Website</a>
      `,
    },
    toki: {
      title: "Tòki",
      description: `
        <h3>The Challenge</h3>
       Toki was a newly established B2B packaging company without existing cases or a defined visual identity. The challenge was to create a strong, credible brand presence and communicate their five-phase “Toki Flow” model.
    
        <h3>The Solution</h3>
       I contributed by developing multiple interactive prototypes in Figma and refining the layout structure across key pages, including the Toki Flow model and case overview. Through iterative user testing and adjustments,  adjustments were made in regards to  strengthening navigation clarity , implementing a structured contact page.
    
        <a href="#" target="_blank">Visit Website</a>
      `,
    },
  };

  const projects = document.querySelectorAll(".project");
  const panel = document.querySelector(".work-right");

  console.log("Projects found:", projects.length);

  projects.forEach((project) => {
    project.addEventListener("click", () => {
      const key = project.dataset.project;
      console.log("Clicked:", key);

      const content = projectData[key];
      if (!content) return;

      panel.innerHTML = `
        <h2>${content.title}</h2>
        <p>${content.description}</p>
      `;
      panel.classList.add("active");
    });
  });
});

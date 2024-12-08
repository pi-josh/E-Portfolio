document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      // Update the background gradient's origin
      card.style.setProperty("--cursor-x", `${x}px`);
      card.style.setProperty("--cursor-y", `${y}px`);
    });
  });
  
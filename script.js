document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".service-card, .block");

    const reveal = () => {
        const windowHeight = window.innerHeight;

        elements.forEach(el => {
            const position = el.getBoundingClientRect().top;

            if (position < windowHeight * 0.85) {
                el.classList.add("visible");
            }
        });
        
    

    };

    // lancement initial
    reveal();

    // lancement à chaque scroll
    window.addEventListener("scroll", reveal);

    const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Ici tu peux envoyer le message avec ton service ou ton backend

    form.reset(); // vide tous les champs
  });

    
});

    

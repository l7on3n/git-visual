// Add some subtle interactive micro-animations for the scribbly feel
document.addEventListener("DOMContentLoaded", () => {
    // Add random slight rotations to cards to make them feel more natural/hand-placed
    const cards = document.querySelectorAll('.env-card, .diagram-card');
    
    cards.forEach(card => {
        // Only apply if it's not the stash box which has a predefined rotation
        if (!card.classList.contains('stash-box')) {
            const randomRotation = (Math.random() * 2 - 1).toFixed(2); // Between -1 and 1 degrees
            card.style.transform = `rotate(${randomRotation}deg)`;
            
            // Save base rotation to use in hover calculations if we had JS hover
            card.dataset.baseRotation = randomRotation;
        }
    });

    // Make the notebook lines parallax slightly on scroll
    const notebookLines = document.querySelector('.notebook-lines');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (notebookLines) {
            notebookLines.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });
});

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

    // Image Maximization Logic
    const maximizeIcons = document.querySelectorAll('.maximize-icon');
    const images = document.querySelectorAll('.img-wrapper img');
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('maximized-img');
    const closeModal = document.querySelector('.close-modal');

    function openModal(src) {
        modalImg.src = src;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling background
    }

    maximizeIcons.forEach((icon, index) => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent trigger if img has click listener
            openModal(images[index].src);
        });
    });

    // Also allow clicking the image itself to maximize
    images.forEach((img) => {
        img.addEventListener('click', () => {
            openModal(img.src);
        });
        img.style.cursor = 'zoom-in';
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
});

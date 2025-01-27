document.addEventListener('DOMContentLoaded', () => {
    // Animation for h1
    const h1Words = document.querySelectorAll('h1 .word');
    let delay = 0;
    
    h1Words.forEach((word, index) => {
        setTimeout(() => {
            word.classList.add('visible');
        }, delay);
        delay += 400;
    });

    // Animation for intro text
    const introWords = document.querySelectorAll('.intro-text .word');
    setTimeout(() => {
        let introDelay = 0;
        let previousTimeout = null;
        
        introWords.forEach((word, index) => {
            // Show current word
            setTimeout(() => {
                word.classList.add('visible');
                
                // Hide previous word (if exists)
                if (index > 0) {
                    introWords[index - 1].classList.remove('visible');
                }
                
                // Hide the last word
                if (index === introWords.length - 1) {
                    setTimeout(() => {
                        word.classList.remove('visible');
                    }, 800);
                }
            }, introDelay);
            
            introDelay += 600; // Increased to 600ms for slower word-by-word animation
        });
    }, delay + 800);
}); 
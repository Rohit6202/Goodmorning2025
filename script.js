 
document.addEventListener('DOMContentLoaded', () => {
    const userName = prompt('Enter your name for moon connection:') || 'Dear Dreamer';
    document.querySelector('.stellar-greeting').textContent = `${userName}, शुभ रात्रि!`;

    // Hindi motivational quotes (5 second cycle)
    const hindiQuotes = [
        "सपनों की उड़ान भरो, चाँद तुम्हारा साथ देगा!",
        "रात की शांति में खो जाओ, कल नई ऊर्जा लेकर आएगा!",
        "तारे तुम्हारे लिए जगमगाएंगे, सो जाओ मीठे सपनों में!",
        "हर रात नई शुरुआत का वादा लेकर आती है!",
        "चाँदनी रात तुम्हारे सपनों को संवारेगी!"
    ];

    let quoteIndex = 0;
    const hindiElement = document.querySelector('#hindi-quote');

    function cycleHindiQuotes() {
        hindiElement.style.opacity = 0;
        setTimeout(() => {
            hindiElement.textContent = hindiQuotes[quoteIndex];
            quoteIndex = (quoteIndex + 1) % hindiQuotes.length;
            hindiElement.style.opacity = 1;
        }, 500);
    }
    setInterval(cycleHindiQuotes, 5000);

    // Enhanced Stardust Effect
    document.querySelector('.stardust-btn').addEventListener('click', () => {
        for(let i = 0; i < 30; i++) {
            const stardust = document.createElement('div');
            stardust.className = 'stardust-particle';
            stardust.style.left = `${Math.random() * 100}vw`;
            stardust.style.top = `${Math.random() * 100}vh`;
            stardust.style.animation = 
                `drift ${3 + Math.random() * 4}s linear infinite`;
            document.body.appendChild(stardust);
            
            setTimeout(() => stardust.remove(), 7000);
        }
    });

    // WhatsApp Share
    document.querySelector('.whatsapp-share').addEventListener('click', () => {
        const message = encodeURIComponent(
            `${userName} ने आपको शुभ रात्रि की शुभकामनाएं भेजी! 🌙✨\n` +
            "देखें: https://example.com/night-wishes"
        );
        window.open(`https://wa.me/?text=${message}`);
    });
});
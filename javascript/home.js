function readPage() {
    const bodyText = document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(bodyText);
    
    utterance.lang = 'en-US'; 
    utterance.pitch = 1; 
    utterance.rate = 1;
    utterance.volume = 1;

    speechSynthesis.speak(utterance);
}
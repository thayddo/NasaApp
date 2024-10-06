function readPage() {
    // Capture the body content
    const bodyText = document.body.innerText;

    // Create a new instance of SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(bodyText);

    // Set some optional properties
    utterance.lang = 'en-US'; // You can set this to other languages like 'pt-BR' for Portuguese
    utterance.pitch = 1; // You can change pitch (range: 0 to 2)
    utterance.rate = 1; // You can change rate (range: 0.1 to 10)
    utterance.volume = 1; // Volume control (range: 0 to 1)

    // Speak the text
    speechSynthesis.speak(utterance);
}
function speak() {
    const text = document.getElementById("text").value;

    const utterance = new SpeechSynthesisUtterance(text);

    // Request Tagalog/Filipino
    utterance.lang = "fil-PH";

    speechSynthesis.speak(utterance);
}
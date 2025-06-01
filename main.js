const outputText = document.getElementById('outputText');
const startBtn = document.getElementById('startBtn');

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';

startBtn.onclick = () => {
  outputText.textContent = "Listening...";
  recognition.start();
};

recognition.onresult = (event) => {
  const text = event.results[0][0].transcript;
  outputText.textContent = "You said: " + text;
  replyWithVoice("Acknowledged, Boss. " + text);
};

function replyWithVoice(message) {
  const utterance = new SpeechSynthesisUtterance(message);
  utterance.voice = speechSynthesis.getVoices().find(voice => voice.name.includes("Google") || voice.default);
  speechSynthesis.speak(utterance);
}

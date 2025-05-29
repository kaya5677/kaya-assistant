// script.js - Kaya Assistant
const input = document.querySelector('#userInput');
const responseDiv = document.querySelector('.response');
const speakButton = document.querySelector('#speakButton');

function respondToCommand(command) {
  let response = '';

  // Basic command recognition
  command = command.toLowerCase();

  if (command.includes('hai') || command.includes('hello')) {
    response = 'Hai Boss, saya di sini.';
  } else if (command.includes('siapa kau') || command.includes('nama kau')) {
    response = 'Saya Kaya Assistant, dicipta khas oleh Boss.';
  } else if (command.includes('mainkan lagu')) {
    response = 'Baik Boss, sedang memainkan lagu kegemaran.';
    // Integrasi muzik boleh ditambah di sini
  } else if (command.includes('cuaca')) {
    response = 'Boss, saya perlukan akses internet untuk maklumat cuaca semasa.';
  } else if (command.includes('jam berapa')) {
    const now = new Date();
    response = `Sekarang jam ${now.getHours()} lebih ${now.getMinutes()} minit.`;
  } else {
    response = 'Maaf Boss, saya belum faham arahan itu.';
  }

  displayResponse(response);
  speakResponse(response);
}

function displayResponse(text) {
  responseDiv.textContent = text;
}

function speakResponse(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ms-MY'; // Bahasa Melayu
  synth.speak(utterance);
}

// Trigger on enter key
input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const userCommand = input.value;
    respondToCommand(userCommand);
    input.value = '';
  }
});

// Optional: button to speak
if (speakButton) {
  speakButton.addEventListener('click', () => {
    const userCommand = input.value;
    respondToCommand(userCommand);
    input.value = '';
  });
}
function kayaSpeak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "ms-MY";
  msg.pitch = 1;
  msg.rate = 1;
  speechSynthesis.speak(msg);
}window.onload = function () {
  document.getElementById("startButton").click();
};

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
function kayaSpeak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.voice = speechSynthesis.getVoices().find(v => v.name.includes('Daniel') || v.name.includes('UK English Male'));
  msg.pitch = 1;
  msg.rate = 1;
  speechSynthesis.speak(msg);
}

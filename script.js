// Hologram Kaya Assistant - J.A.R.V.I.S Mode

const kayaOutput = document.getElementById("kaya-output");
const micButton = document.getElementById("mic-button");
const wave = document.querySelector(".wave-animation");
const synth = window.speechSynthesis;

let recognition;
if ("webkitSpeechRecognition" in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.lang = "en-MY";
  recognition.interimResults = false;
} else {
  alert("Speech Recognition not supported in this browser.");
}

// Text-to-Speech (J.A.R.V.I.S style)
function speak(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 1;
  utter.pitch = 1.2;
  utter.voice = synth.getVoices().find(v => v.name.includes("Google UK English Male")) || synth.getVoices()[0];
  synth.speak(utter);
}

// Respond with AI voice & text
function respondToCommand(command) {
  const response = getJarvisResponse(command);
  kayaOutput.textContent = response;
  speak(response);
}

// Example AI logic (can be expanded)
function getJarvisResponse(command) {
  command = command.toLowerCase();
  if (command.includes("hello") || command.includes("hi")) return "Greetings, Boss. Kaya is fully operational.";
  if (command.includes("time")) return `Current time is ${new Date().toLocaleTimeString()}`;
  if (command.includes("status")) return "All systems are running at 100%.";
  return "I'm listening, Boss.";
}

// Start recognition
function startListening() {
  recognition.start();
  wave.classList.add("active");
  kayaOutput.textContent = "Listening...";
}

// Stop recognition and process
recognition.onresult = function(event) {
  const transcript = event.results[0][0].transcript;
  kayaOutput.textContent = `You said: "${transcript}"`;
  respondToCommand(transcript);
  wave.classList.remove("active");
};

recognition.onend = function() {
  wave.classList.remove("active");
};

micButton.addEventListener("click", () => {
  if (synth.speaking) synth.cancel();
  startListening();
});

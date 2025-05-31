// Auto-response JARVIS
document.addEventListener("DOMContentLoaded", () => {
  const response = document.getElementById("response");
  const phrases = [
    "System activated, Boss.",
    "Scanning area… All secure.",
    "Voice mode online.",
    "Welcome back, Boss."
  ];
  let index = 0;

  setInterval(() => {
    response.textContent = phrases[index % phrases.length];
    index++;
  }, 5000);

  // Mainkan suara automatik selepas load
  const audio = document.getElementById("jarvisVoice");
  if (audio) audio.play();
});

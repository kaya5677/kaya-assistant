// 🧠 Auto response JARVIS

// Fungsi utama bila DOM telah dimuatkan
document.addEventListener("DOMContentLoaded", () => {
  const response = document.getElementById("response");
  const phrases = [
    "System activated, Boss.",
    "Scanning area… All secure.",
    "Voice mode online.",
    "Welcome back, Boss."
  ];
  let index = 0;

  // Papar mesej setiap 5 saat
  setInterval(() => {
    response.textContent = phrases[index % phrases.length];
    index++;
  }, 5000);
});

// 🔊 Mainkan suara JARVIS bila dipanggil
function playVoice() {
  const audio = document.getElementById("jarvisVoice");
  audio.play();
}

// 👆 Trigger suara bila user tekan butang
const btn = document.getElementById("responButton");
if (btn) {
  btn.addEventListener("click", playVoice);
}

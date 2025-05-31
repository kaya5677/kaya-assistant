script_js = """
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
});

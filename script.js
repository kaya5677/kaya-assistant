// Kaya Assistant Script
const kayaOutput = document.getElementById("kaya-output");
const kayaInput = document.getElementById("kaya-input");
const kayaForm = document.getElementById("kaya-form");

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ms-MY"; // Bahasa Melayu
  speechSynthesis.speak(utterance);
}

function kayaRespond(message) {
  kayaOutput.innerHTML += `<div class="kaya-message kaya-response">Kaya: ${message}</div>`;
  speak(message);
}

kayaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userMessage = kayaInput.value.trim();
  if (!userMessage) return;

  kayaOutput.innerHTML += `<div class="kaya-message kaya-user">Boss: ${userMessage}</div>`;
  kayaInput.value = "";

  handleCommand(userMessage.toLowerCase());
});

function handleCommand(text) {
  if (text.includes("hai") || text.includes("hello")) {
    kayaRespond("Hai Boss! Ada apa saya boleh bantu?");
  } else if (text.includes("main lagu") || text.includes("play music")) {
    kayaRespond("Baik Boss, tapi fungsi main muzik belum disambung.");
  } else if (text.includes("pukul berapa") || text.includes("masa")) {
    const now = new Date();
    kayaRespond(`Sekarang pukul ${now.getHours()}:${now.getMinutes()}`);
  } else {
    kayaRespond("Saya belum faham arahan itu, Boss. Cuba lagi.");
  }
}

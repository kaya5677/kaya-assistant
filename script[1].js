
function speak() {
  const msg = new SpeechSynthesisUtterance("Saya sedia Boss. Apa arahan seterusnya?");
  msg.lang = "ms-MY";
  window.speechSynthesis.speak(msg);
}

function TextToSpeech(text) {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = text;
      speech.lang = "es-ES";
      speechSynthesis.speak(speech);
    } else {
      console.log("La síntesis de voz no es compatible con este navegador.");
    }
  }

  module.exports = TextToSpeech
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
//var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent =
  SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var recognition = null;
//const speechRecognitionList = new SpeechGrammarList();

export const getRecognitionInstance = () => {
  if (recognition == null) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "es-ES";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
  }

  return recognition;
};

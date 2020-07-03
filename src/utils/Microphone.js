const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export default class Microphone {
  constructor() {
    this.createrecognition();
    this.addResultListener();
  }

  createrecognition() {
    this.recognition = new SpeechRecognition();
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 10;
    this.changeLanguageMicrophone();
  }

  addResultListener() {
    let transcript;
    this.recognition.addEventListener('result', (e) => {
      transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      transcript = transcript.toLowerCase();
      this.setTranscript(transcript);
    });
  }

  changeLanguageMicrophone() {
    const lang = 'en-US';
    this.recognition.lang = lang;
  }

  startMicrophone(setTranscript) {
    this.recognition.addEventListener('end', this.recognition.start);
    this.recognition.start();
    if (setTranscript) this.setTranscript = setTranscript;
  }

  changeTranscript(setTranscript) {
    this.setTranscript = setTranscript;
  }

  stopMicrophone() {
    this.recognition.removeEventListener('end', this.recognition.start);
    this.recognition.stop();
  }
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export default class Microphone {
  constructor(setTranscript) {
    this.createRecognation();
    this.addResultListener();
    this.setTranscript = setTranscript;
  }

  createRecognation() {
    this.recognation = new SpeechRecognition();
    this.changeLanguageMicrophone();
  }

  addResultListener() {
    let transcript;
    this.recognation.addEventListener('result', (e) => {
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
    this.recognation.lang = lang;
  }

  startMicrophone() {
    this.recognation.start();
    this.recognation.addEventListener('end', this.restartMicrophone);
  }

  stopMicrophone() {
    this.recognation.stop();
    this.recognation.removeEventListener('end', this.restartMicrophone);
  }

  restartMicrophone() {
    this.start();
  }
}

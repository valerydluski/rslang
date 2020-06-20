const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export default class Microphone {
  constructor(setTranscript) {
    this.createrecognition();
    this.addResultListener();
    this.setTranscript = setTranscript;
  }

  createrecognition() {
    this.recognition = new SpeechRecognition();
    this.recognition.interimResults = false;
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

  startMicrophone() {
    this.recognition.start();
    this.recognition.addEventListener('end', this.restartMicrophone);
  }

  stopMicrophone() {
    this.recognition.stop();
    this.recognition.removeEventListener('end', this.restartMicrophone);
  }

  restartMicrophone() {
    this.start();
  }
}

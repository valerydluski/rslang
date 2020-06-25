export default class Sound {
  constructor() {
    this.sound = new Audio();
    this.baseSrc = 'https://raw.githubusercontent.com/tarasdemidovich1995/rslang-data/master';
  }

  update(src) {
    this.sound.src = `${this.baseSrc}/${src}`;
  }

  play() {
    this.sound.play();
  }
}

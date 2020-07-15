export default async function loadImage(url) {
  const promise = new Promise((resolve, reject) => {
    const audio = new Audio();
    audio.src = url;
    audio.oncanplay = () => resolve(audio);
    audio.onerror = reject;
  });
  return promise;
}
